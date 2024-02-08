import { useEffect } from 'react';

const LearnuseState = () => {
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
    /*//Example1:it runs each time when 
    component is mounted and re-render 
    useEffect(()=>{
        console.log("useEffect Called")
    })*/
    /*//Example2:it runs once when the component is
     mounted([] means no dependices) 
     useEffect(()=>{
        console.log("useEffect called")
    },[])*/
    /*//Example3-it runs when the component is 
    mounted and dependies changes*/
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

export default LearnuseState
