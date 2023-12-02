import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const Buttons = (props) => {
  return (
    <button onClick={props?.onClick}>
      {props?.name}
    </button>
  )
}
const array = Array(anecdotes.length).fill(0)
const arraycopy = [...array]

let maxvotes = 0
let position = 0 
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(0)
 
  
  const VoteAnecdote = () => {
    arraycopy[selected]++
    setVotes(arraycopy[selected])
    MaxVotes(arraycopy[selected], selected)
    
  }
    const MaxVotes = (momentvotes, momentposition) => {
      
      
      if (momentvotes > maxvotes) {
        
        maxvotes = momentvotes
        position = momentposition
        
      }
  
      return (
        <>
        <p>{props?.anecdotes[position]}</p>
        <p>Has {maxvotes} votes</p>
        </>
        )
     
    }
  

  const NextAnecdotes = () => {
    let random = Math.trunc(Math.random() * (props['anecdotes'].length - 1) + 0)
    setVotes(arraycopy[random])
    MaxVotes(arraycopy[random], props?.anecdotes[selected])
    return setSelected(random)
    
  }
 

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
     <p>Has {votes} votes</p>
    <div>
      <Buttons onClick={VoteAnecdote} name='Vote'/>
      <Buttons onClick={NextAnecdotes} name='Next'/>
    </div>
    <h1>Anecdote with most votes</h1>
      <MaxVotes />
    </div>
  )
}



ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)