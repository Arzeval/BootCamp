import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Stadistics = (props) => {
  let total = props?.good + props?.neutral + props?.bad;
  if (total === 0) {
    return <p>No feedback given</p>
  }
  return (
    <table>
      <tbody>
       <StatisticLine text="good" value ={props?.good} />
       <StatisticLine text="neutral" value ={props?.neutral} />
       <StatisticLine text="bad" value ={props?.bad} />
       <StatisticLine text="all" value ={total} />
       <StatisticLine text="average" value ={(props?.good - props?.bad) / total} />
       <StatisticLine text="positive" value ={props?.good/total * 100 +' %'} />
       
      
       </tbody>
    </table>
  )
}
const StatisticLine = (props) => {
  return (
    <tr>
      <th>
       {props?.text}
      </th>
      <td>
        {props?.value}
      </td>
    </tr>
  )
}


const Buttons = (props) => {
  return (
    <button onClick={props?.onClick}>
      {props?.name}
    </button>
    
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const CountGood = () => {
    setGood(good + 1)
  }
  const CountNeutral = () => {
    setNeutral(neutral + 1)
  }
  const CountBad = () => {
    setBad(bad + 1)
  }
  

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Buttons onClick={CountGood} name={'good'}/>
        <Buttons onClick={CountNeutral} name={'neutral'}/>
        <Buttons onClick={CountBad} name={'bad'}/>
        <h1>statistics</h1>
        <Stadistics good={good} neutral={neutral} bad={bad}/>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)