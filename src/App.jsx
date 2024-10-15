import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
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
    borderRadius : '1opx',
    border : '2px solid steelblue'
  }
  return (
    <div style={developer}>
      <h4>Developer Portfolio</h4>
      <p>This is a new Developer</p>
    </div>
  )
}
export default App
