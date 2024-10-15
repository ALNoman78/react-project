import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Ternary from './Ternary'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Ternary task = 'Learning React JSX' isComplete = {true}></Ternary>
      <Ternary task = 'Core React' isComplete = {false}></Ternary>
      <Ternary task = 'Using Vite' isComplete = {true}></Ternary>
      {/* <Todo task = 'Learn React with Vite' isDone = {true}></Todo>
      <Todo task = 'Explore Concepts' isDone = {true}></Todo>
      <Todo task = 'Use React and JSX' isDone = {false}></Todo>
      <Device name = 'Laptop' price = '67k'></Device>
      <Device name = 'Mobile' price = '44k'></Device>
      <Device name = 'Watch ' price = '4k'></Device>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
      <MainStudent name = 'Abdullah AL Noman' grade = 'Diploma Engineer' score = '79'></MainStudent>
      <MainStudent name = 'MM Moule' grade = 'Diploma Engineer' score = '99'></MainStudent>
      <MainStudent name = 'Anonymous' grade = 'Diploma Engineer' ></MainStudent> */}
    </>
  )
}

function Person () {
  const age = 21;
  return (
    <h2>This is a new Component age : {age}</h2>
  )
}

function Student() {
  const name = "Maisa Monoara Moule";
  const age = 22;
  return (
    <div className='border'>
      <h3>Student Information </h3>
      <p>Name : {name} </p>
      <p>Age : {age}</p>
    </div>
  )
}

function Developer () {
  // new concept to style added on jsx file
  const developer = {
    margin : '20px',
    padding : '20px',
    borderRadius : '10px',
    border : '2px solid steelblue'
  }
  return (
    <div style={developer}>
      <h4>Developer Portfolio</h4>
      <p>This is a new Developer</p>
    </div>
  )
}

function Device (props) {
  // console.log(props);
  return (
    <div>
      <h3>The Device : {props.name} and Price : {props.price} </h3>
    </div>
  )
}

function MainStudent ({grade , name , score = 0}) {
  return (
    <>
      <div className='best-student'>
        <h3>Best Student</h3>
        <p>Name : {name} </p>
        <p>Grade  : {grade} </p>
        <p>Score : {score} </p>
      </div>
    </>
  )
}
export default App
