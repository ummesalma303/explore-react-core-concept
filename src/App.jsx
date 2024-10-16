import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Vite + React</h1>
      <Device name='laptop' price='12000'></Device>
      <Device name='mobile' price='19000'></Device>
      <Device name='tablet' price='18000'></Device>

      <Student name="lal mia" score='768'></Student>
     <Person></Person>
      <Dev></Dev>
    </>
  )
}
function Person() {
  const age = 10;
  const money = 60;
  const person={name:"farha", roll:22}
  return (
    <div className='active'>
      <h3>hi i am {person.name}.and my age is {age + 10} <br /> and my income is {money + age} </h3>
      <p>roll:{ person.roll}</p>
    </div>
  )
}

function Dev() {
  const devStyle = {
    backgroundColor: "rgba(104, 190, 230, 0.100)",
    border: "3px solid, blue",
    borderRadius:'20px',
    padding: '20px',
    marginTop:'20px'
  }
  return (
    <div style={devStyle}>
      <h2>Devo devo</h2>
      <p>Coding:</p>
    </div>
  )
}
function Student(props) {
  return (
    <div className='active'>
      <h2>his is a student</h2>
      <h4>name:{props.name}</h4>
      <h4>score: { props.score}</h4>
    </div>
  )
}
const{name,price}={name:'laptop',price:"12000"}
function Device({name,price}) {
  console.log(name,price);
  return <h3>This device:{name} Price:{price}</h3>
}

export default App
