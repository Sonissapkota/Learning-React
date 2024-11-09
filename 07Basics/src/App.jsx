import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'

function App() {
  const [name, setName] = useState("Sonis")
  const [count, setCount] = useState(0)

  const increaseCount = () =>{
    setCount(count+1)
  }

  const decreaseCount = () =>{
    setCount(count-1)
  }

  return (
    <>
    <Navbar userName={name}/>
    <h1>Count:{count}</h1>
    <button onClick={increaseCount}>Increase</button>
    <button onClick={decreaseCount}>Decrease</button>
    </>
  )
}

export default App
