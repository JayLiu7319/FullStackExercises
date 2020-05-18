import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Headline = ({text}) => <h1>{text}</h1>

const Statistics = ({good, neutral, bad}) => {
  if (good===0 && neutral===0 && bad===0)
    return (<p>No feedback given</p>)

  return (
    <div>
      <Statistic level='good' sum={good} />
      <Statistic level='neutral' sum={neutral} />
      <Statistic level='bad' sum={bad} />
      <All good={good} neutral={neutral} bad={bad} />
      <Average good={good} neutral={neutral} bad={bad} />
      <Positive good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Statistic = ({level, sum}) => <p>{level} {sum}</p>

const Button = ({handler, text}) => <button onClick={handler}>{text}</button>

const All = ({good, neutral, bad}) => <p>all {good + neutral + bad}</p>

const Average = ({good, neutral, bad}) => <p>average {(good - bad)/(good + neutral + bad)}</p>

const Positive = ({good, neutral, bad}) => <p>positive {good*100/(good+neutral+bad)}%</p>

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
