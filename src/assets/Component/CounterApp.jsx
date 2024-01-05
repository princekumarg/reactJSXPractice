import {useState} from 'react'

const CounterApp = () => {
  const [count,setCount]=useState(0);
  const increment=()=>{
    setCount(count+1);//setCount((prev)=>prev+1)
  }
  const reset=()=>{
    setCount(0);
  }
  const[randomNumber,setRandomNumber]=useState(null);
  const generateRandomNumber=()=>{
    const random=Math.floor(Math.random()*100)+1;
    setRandomNumber(random);
  }
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={reset}>reset</button>
      <h2>RandomN0:{randomNumber}</h2>
      <button onClick={generateRandomNumber}>RandomNumber</button>
    </>
  )
}

export default CounterApp
