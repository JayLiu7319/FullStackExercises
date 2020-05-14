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
      <Part part={props.partList[0]}/>
      <Part part={props.partList[1]}/>
      <Part part={props.partList[2]}/>
    </div>
  )
}


const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const partList = [part1, part2, part3]

  return (
    <div>
      <Header course={course}/>
      <Content partList={partList}/>
      <Total number={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))