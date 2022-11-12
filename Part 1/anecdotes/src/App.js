import { useState } from 'react'

const Anecdote = ({anecdote}) => {
  return (
    <div>
      <p>{anecdote.line}</p>
      <p>has {anecdote.vote} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotesList = [
    {line: 'If it hurts, do it more often.', vote: 0},
    {line: 'Adding manpower to a late software project makes it later!', vote: 0},
    {line: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', vote: 0},
    {line: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', vote: 0},
    {line: 'Premature optimization is the root of all evil.', vote: 0},
    {line: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', vote: 0},
    {line: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', vote: 0}
  ]
   
  const [selected, setSelected] = useState(0)
  const [anecdotes, setAnecdotes] = useState(anecdotesList)

  const handleNextAnecdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }

  const handleVoteAnecdote = () => {
    const copy = [...anecdotes]
    copy[selected].vote += 1
    setAnecdotes(copy)
  }

  const getMostVotedAnecdote = () => {
    return anecdotes.reduce((prev, current) => 
      (prev.vote > current.vote) ? prev : current)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} />
      <button onClick={() => handleVoteAnecdote()}>vote</button>
      <button onClick={() => handleNextAnecdote()}>next anecdote</button>

      <h1>Anecdote with the most vote</h1>
      <Anecdote anecdote={getMostVotedAnecdote()} />
    </div>
  )
}

export default App
