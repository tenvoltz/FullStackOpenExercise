/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part section = {props.part1} amount = {props.exercises1} />
      <Part section = {props.part2} amount = {props.exercises2} />
      <Part section = {props.part3} amount = {props.exercises3} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.section} {props.amount}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.amount1 + props.amount2 + props.amount3}</p>
    </div>
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

  return (
    <div>
      <Header course = {course} />
      <Content 
        part1 = {part1}
        part2 = {part2}
        part3 = {part3}
        exercises1 = {exercises1}
        exercises2 = {exercises2}
        exercises3 = {exercises3}
      />
      <Total 
        amount1 = {exercises1} 
        amount2 = {exercises2} 
        amount3 = {exercises3} 
      />
    </div>
  )
}

export default App
