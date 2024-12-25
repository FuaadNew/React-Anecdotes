import { useState } from "react"

const Button = ({onClick,name}) =>{
  return (
    <button onClick= {()=>onClick(name)}>{name}</button>
  )
}

const StatisticLine = ({text,value}) =>{
 

  return (
    <div>{text} {value}</div>
  )
}



const Statistics = ({good,neutral,bad}) =>{
  const total = good - bad
  const allFeedback = good + neutral + bad
  const average = allFeedback ? total / allFeedback : 0
  const posPercentage = allFeedback ? (good/ allFeedback) * 100: 0
  if (allFeedback === 0){
    return <div>No feedback given </div>
  } else{
    return (
      <table>
          <tbody>
          <tr>
              <td>
              <StatisticLine text="good"value ={good} ></StatisticLine>
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="neutral"value ={neutral} ></StatisticLine>
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="bad"value ={bad} ></StatisticLine>
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text = "all" value={good + neutral + bad}></StatisticLine>
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text = "average" value = {average}></StatisticLine>
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text = "positive" value = {posPercentage}></StatisticLine>
            </td>
          </tr>
        </tbody>
        </table>
    );
  

  }
  
}




const App = () =>{

  const handleClick = (name) =>{
    if (name === "good"){
      setGood(good+1)
     
    }else if (name === "neutral"){
      setNeutral(neutral+1)
      
    }else if (name === "bad"){
      setBad(bad+1)
    }

  }




  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)

  return <div>
    <h1>give feedback</h1>
    <Button onClick= {handleClick} name = "good">good</Button>
    <Button onClick= {handleClick} name = "neutral">neutral</Button>
    <Button onClick= {handleClick} name = "bad">bad</Button>
    <h1>statistics</h1>
    <Statistics good = {good} neutral = {neutral} bad = {bad}></Statistics>
    
  </div>
  

}





export default App