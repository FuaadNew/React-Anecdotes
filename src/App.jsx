import { useState } from "react"

const Button = ({name,onClick}) =>{
  return(<button onClick={onClick}> {name}

  </button>)
}

const VoteCast = ({points, selected}) =>{
  const votes = points[selected]
  return (<div>
    Has {votes} points

  </div>)
}



const MostVotes = ({points, anecdotes}) =>{
  const mostPopular =points.indexOf(Math.max(...points))


  return (<div>
     {Math.max(...points) != 0 ? `The anecdote with the most votes: "${anecdotes[mostPopular]}" with ${points[mostPopular]} votes `: "No votes yet"}

  </div>)
}

const App = () =>{


  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected,setSelected] = useState(0)
  const [points,setPoints] = useState(Array(anecdotes.length).fill(0))

  
  const chooseAnecdote = () =>{
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)

  }
  const castVote = () =>{
    const newPoints = [...points]
    newPoints[selected]+=1
    setPoints(newPoints)
    console.log(newPoints)


  }




 
  return (
    <div>
      {anecdotes[selected]}
      <VoteCast points = {points} selected = {selected}></VoteCast>
      <Button onClick={chooseAnecdote} name = "next anecdote"></Button>
      <Button onClick={castVote} name = "Vote"></Button>
      <MostVotes points = {points} anecdotes={anecdotes}></MostVotes>

      
    </div>
  )

}



export default App