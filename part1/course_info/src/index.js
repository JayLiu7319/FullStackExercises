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

const Content = (parts) => {
  return (
    <div>
      <Part part={parts.parts[0]}/>
      <Part part={parts.parts[1]}/>
      <Part part={parts.parts[2]}/>
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

const Total = (parts) => {
  console.log(parts)
  return (
    <p>
      Number of exercises {parts.parts[0].exercises + 
      parts.parts[1].exercises + 
      parts.parts[2].exercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  // const partList = [part1, part2, part3]

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))