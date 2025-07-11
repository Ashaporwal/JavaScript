import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [counter,setCounter] = useState(15)
  // let counter = 15

  const addValue = ()=>{
    counter = counter+1;
    setCounter(counter + 1)
  }
  const removeValue = ()=>{
      counter = counter-1;
    setCounter(counter-1)

  }
  return (
    <>
      <h1>React is going on..</h1>
      <h2>COunter value: {counter}</h2>

      <button onClick={addValue}>Add {counter}</button>
      <br />
      <button onClick={removeValue}>Remove {counter}</button>
      <p>footer:{counter}</p>

    </>
  );
}

export default App;
