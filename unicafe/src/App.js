import React, { useState } from 'react'

const Button = ({text, count, setter}) => {
  // console.log(text, count, setter)

  const onClick = () => {
    setter(count + 1)
  }

  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) => <tr><td>{text}</td> <td>{value}</td></tr>

const Statistics = ({good, neutral, bad}) => {

  if(good + neutral + bad >= 1){
    return (
      <table>
        <StatisticLine text={"good"} value={good}/>
        <StatisticLine text={"neutral"} value={neutral}/>
        <StatisticLine text={"bad"} value={bad}/>
        <StatisticLine text={"all"} value={good+neutral+bad}/>
        <StatisticLine text={"average"} value={(good - bad) / (good+neutral+bad)}/>
        <StatisticLine text={"positive"} value={good / (good+neutral+bad) * 100}/>
      </table>
    )
  }
  else{
    return (
      <div>
        No feedback given
      </div>
    )
  }  
}

const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (

    <div>
      <h1>give feedback</h1>
      <Button text="good" count={good} setter={setGood}/>
      <Button text="neutral" count={neutral} setter={setNeutral}/>
      <Button text="bad" count={bad} setter={setBad}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App