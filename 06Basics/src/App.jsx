import { useState, useCallback } from 'react'
import './App.css'
import Navbar from './Component/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [adjective, setAdjective] = useState("good")

  // In the given call back function it will vaoid the function and the child component from getting
  // re-render unless the dependencies is changed
  const getAdjective = useCallback(()=>{
    setAdjective("better")
  },[adjective])

  // In the given function it is rerendered even whenn the function is not called because it is passed as props
  // and when the count is updated so does the function is re rendered
  // const getAdjective = ()=>{
  //   setAdjective("better")
  // }

  return (
    <>
    <Navbar adjective={adjective} getAdjective={getAdjective}/>
      <h1>Count: {count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increase Count</button>
      <button onClick={()=>{setCount(count-1)}}>Decrease Count</button>
    </>
  )
}

export default App
