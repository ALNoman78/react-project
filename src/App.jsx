import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Ternary from './Ternary'
import Rendering from './Rendering'
import Actor from './Actor';
import Singer from './Singer';
import BookStore from './BookStore'

function App() {

  const actorsName = ['HRX', 'JNTR', 'Alia Bhatt', 'MSD'];
  const bestSingers = [
    "Luciano Pavarotti",
    "Maria Callas",
    "Placido Domingo",

  ];
  const listedSinger = [
    {id : 1,name : 'MMM' , age : 22},
    {id : 2,name : 'Eba Rahman' , age : 21},
    {id : 3,name : 'Himesh' , age : 12},
    {id : 4,name : 'Hridoy ' , age : 12},
    {id : 5,name : 'Pritom ', age : 28}
  ];

  const books = [
    { id: 1, name: "To Kill a Mockingbird", price: 18.99 },
    { id: 2, name: "1984", price: 15.99 },
    { id: 3, name: "The Great Gatsby", price: 14.99 },
    { id: 4, name: "Moby Dick", price: 21.50 },
    { id: 5, name: "Pride and Prejudice", price: 12.75 }
  ];
  

  return (
    <>
      <h1>Vite + React</h1>
      <BookStore nameOfBook={books}></BookStore>
      <Actor name={'MM Moule'}></Actor>
      {
        actorsName.map((actor) => <Actor name={actor}></Actor>)
      }
      {
        bestSingers.map((singer) => <Actor name={singer}></Actor>)
      } 
      {
        listedSinger.map((singer) => <Singer singerDetails={singer}></Singer>)
      }
      {/* <Rendering tasks = {'Laptop Repair'}  isComplete = {true}></Rendering>
      <Rendering tasks = {'Mobile Display Repair'}  isComplete = {false}></Rendering>
      <Rendering tasks = {'Keyboard button repair'}  isComplete = {true}></Rendering> */}
      {/* <Ternary task = 'Learning React JSX' isComplete = {true}></Ternary>
      <Ternary task = 'Core React' isComplete = {false}></Ternary>
      <Ternary task = 'Using Vite' isComplete = {true}></Ternary> */}
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

function Person() {
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

function Developer() {
  // new concept to style added on jsx file
  const developer = {
    margin: '20px',
    padding: '20px',
    borderRadius: '10px',
    border: '2px solid steelblue'
  }
  return (
    <div style={developer}>
      <h4>Developer Portfolio</h4>
      <p>This is a new Developer</p>
    </div>
  )
}

function Device(props) {
  // console.log(props);
  return (
    <div>
      <h3>The Device : {props.name} and Price : {props.price} </h3>
    </div>
  )
}

function MainStudent({ grade, name, score = 0 }) {
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
