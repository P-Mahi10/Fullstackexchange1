const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
  
    <p>
      Name of course:{props.name}, number of exercises in course:{props.exercise}
    </p>
  )
  
}

const Total = (props) => {
  return(
    <p>
      Total number of exercises in course are:{props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
    </p>
  )
}

const Content = (props)=> {
  return(
    <>

      <Part name ={props.course.parts[0].name} exercise={props.course.parts[0].exercises} />
      <Part name ={props.course.parts[1].name} exercise={props.course.parts[1].exercises} />
      <Part name ={props.course.parts[2].name} exercise={props.course.parts[2].exercises} />
    </>
  )
}



const App = () =>{
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
  return(
    <div>
      <Header course={course.name} />
      <Content course={course} />
      <Total course={course}/>
    </div>

  )
}

export default App
