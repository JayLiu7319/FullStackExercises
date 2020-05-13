import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

// const Content = (props) => {
//   return (
//     <>
//       <p>{props.partList[0]} {props.exerciseList[0]}</p>
//       <p>{props.partList[1]} {props.exerciseList[1]}</p>
//       <p>{props.partList[2]} {props.exerciseList[2]}</p>
//     </>
//   )
// }

const Content = (props) => {
  return (
    <div>
      <Part name={props.partList[0]} exercises={props.exerciseList[0]}/>
      <Part name={props.partList[1]} exercises={props.exerciseList[1]}/>
      <Part name={props.partList[2]} exercises={props.exerciseList[2]}/>
    </div>
  )
}


const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.number}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const partList = [part1, part2, part3]
  const exerciseList = [exercises1, exercises2, exercises3]

  return (
    <div>
      <Header course={course}/>
      <Content partList={partList} exerciseList={exerciseList} />
      <Total number={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))