import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter] = useState(15)

  const addValue = () =>{
    // Since react create a batch of the same code and execute one single batch which result in updating the
    // the value of counter only once
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    // In the above process we cannot increment the value of counter by 3 however we can do this by
    // using callback of useState
    setCounter((prevCounter => prevCounter + 1))
    setCounter((prevCounter => prevCounter + 1))
    setCounter((prevCounter => prevCounter + 1))
  }

  const removeValue = () => {
     if(counter==0){
      setCounter(counter = 0)
     }else{
      setCounter(counter-1)
     }
  }
  return (
    <>
     <h1>Hello this is sonis sapkota</h1>
     <h2>Counter: {counter}</h2>
     <button onClick={addValue}>Add value</button>
     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
