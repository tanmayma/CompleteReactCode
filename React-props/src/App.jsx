import React, { useEffect, useState } from 'react'
import Greeting from './Greeting'

export default function App() {
  let [name,setName] = useState("Tanmay")
  let [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count+1)
    },1000)
  },[count])

  const updateName = () => {
    setName("Tanmay Manna");
  }

  const inc = () => {
    setCount(count+1)
  }

  const dec = () => {
    setCount(count-1);
  }

  const zero = () => {
    setCount(0);
  }
  return (
    <div>
      <h1>Welcome {name}</h1>
      <button onClick={updateName}>Change Name</button>
      <h1>The count value is {count}</h1>
      <br />
      <button onClick = {inc}>Increment Count</button>
      <button onClick = {dec}>Decrement Count</button>
      <button onClick = {zero}>Reset Count</button>
    </div>
  )
}
