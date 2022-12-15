import noteService from '../services/notes'

const noteReducer = (state = [], action) => {
  // console.log('ACTION: ', action)
  // console.log('state now: ', state)
  switch (action.type) {
    case 'NEW_NOTE':
      return state.concat(action.data)
    case 'TOGGLE_IMPORTANCE': {
      const id = action.data.id
      const noteToChange = state.find(n => n.id === id)
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important
      }
      return state.map(note =>
        note.id !== id ? note : changedNote
      )
    }
    case 'INIT_NOTES':
      return action.data
    default:
      return state
  }
}

export const createNote = content => {
  return async dispatch => {
    const newNote = await noteService.createNew(content)
    dispatch({
      type: 'NEW_NOTE',
      data: newNote
    })
  }
}

export const toggleImportanceOf = id => {
  return async dispatch => {
    const note = await noteService.getOne(id)
    const changedNote = { ...note, important: !note.important }

    const updatedNote = await noteService.update(id, changedNote)
    dispatch({
      type: 'TOGGLE_IMPORTANCE',
      data: { id: updatedNote.id }
    })
  }
}

// thunk middleware allows us to return a function instead of an object
export const initializeNotes = () => {
  return async dispatch => {
    const notes = await noteService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: notes,
    })
  }
}

export default noteReducer