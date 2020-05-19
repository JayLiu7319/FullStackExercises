import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Headline = ({text}) => <h1>{text}</h1>

const Statistics = ({good, neutral, bad}) => {
  if (good===0 && neutral===0 && bad===0)
    return (<p>No feedback given</p>)

  return (
    <table>
      <Statistic level='good' sum={good} />
      <Statistic level='neutral' sum={neutral} />
      <Statistic level='bad' sum={bad} />
      
      <All good={good} neutral={neutral} bad={bad} />
      <Average good={good} neutral={neutral} bad={bad} />
      <Positive good={good} neutral={neutral} bad={bad} />
    </table>
  )
}

const Statistic = ({level, sum}) => 
  <tbody>
    <tr>
      <td>{level}</td>
      <td>{sum}</td>
    </tr>
  </tbody> 

const All = ({good, neutral, bad}) => 
  <tbody>
    <tr>
      <td>all</td>
      <td>{good + neutral + bad}</td>
    </tr>
  </tbody> 

const Average = ({good, neutral, bad}) => 
  <tbody>
    <tr>
      <td>average</td>
      <td>{(good - bad)/(good + neutral + bad)}</td>
    </tr>
  </tbody> 

const Positive = ({good, neutral, bad}) => 
  <tbody>
    <tr>
      <td>positive</td>
      <td>{good*100/(good+neutral+bad)}%</td>
    </tr>
  </tbody> 

const Button = ({handler, text}) => <button onClick={handler}>{text}</button>

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const HandlerGood = () => setGood(good+1)
  const HandlerNeutral = () => setNeutral(neutral+1)
  const HandlerBad = () => setBad(bad+1) 

  return (
    <div>
      <Headline text={'give feedback'} />
      <Button handler={HandlerGood} text='good' />
      <Button handler={HandlerNeutral} text='neutral' />
      <Button handler={HandlerBad} text='bad' />
      <Headline text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
