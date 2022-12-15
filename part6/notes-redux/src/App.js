import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// components
import NewNote from './components/NewNote'
import VisibilityFilter from './components/VisibilityFilter'
import Notes from './components/Notes'

// import reducer
import { initializeNotes } from './reducers/noteReducer'


const App = () => {
  const dispatch = useDispatch()

  // dipatch async action creator to initialize notes
  useEffect(() => {
    dispatch(initializeNotes())
  }, [dispatch])

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}

export default App