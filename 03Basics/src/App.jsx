import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card username="Sonis Sapkota" position="Frontend Developer"/>
      <Card username="Bijay Chapagai" position="Backend Developer"/>
    </>
  )
}

export default App
