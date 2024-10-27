import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter] = useState(15)

  const addValue = () =>{
    setCounter(counter+1)
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