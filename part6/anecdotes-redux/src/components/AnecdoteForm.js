import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const addAnecdote = async (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    props.createAnecdote(anecdote)
    props.createNotification(`You created '${anecdote}'`, 5)
    event.target.anecdote.value = ''
  }

  return (
    <form onSubmit={addAnecdote}>
      <input id='anecdote' />
      <button type='submit'>add</button>
    </form>)
}

const mapDispatchToProps = {
  createAnecdote,
  createNotification,
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm
