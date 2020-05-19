import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handler, text}) => <button onClick={handler}>{text}</button>
const DisplayVote = ({vote}) => <p>has {vote} votes</p>
const Headline = ({text}) => <h1>{text}</h1>
const DisplayAnec = ({anecdotes, index}) => <p>{anecdotes[index]}</p>

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0])
  const [max_index, setMax] = useState(0)

  const handlerNext = () => setSelected(Math.floor(Math.random()*6))
  const handlerVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    if(copy[selected] > copy[max_index]) {
      setMax(selected)
    }
    setVotes(copy)
  }
  
  return (
    <div>
      <Headline text="Anecdote of the day" />
      <DisplayAnec anecdotes={props.anecdotes} index={selected} />
      <DisplayVote vote={votes[selected]} />
      <Button handler={handlerNext} text="next anecdote" />
      <Button handler={handlerVote} text="vote" />
      <Headline text="Anecdote with most votes" />
      <DisplayAnec anecdotes={props.anecdotes} index={max_index} />
      <DisplayVote vote={votes[max_index]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)