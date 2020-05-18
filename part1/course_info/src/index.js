import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Headline = ({text}) => <h1>{text}</h1>

const Display = ({level, sum}) => <p>{level} {sum}</p>

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
      <Display level='good' sum={good} />
      <Display level='neutral' sum={neutral} />
      <Display level='bad' sum={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
