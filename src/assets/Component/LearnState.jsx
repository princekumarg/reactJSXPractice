import { useState } from "react"
const LearnState = () => {
  const[num,setNum]=useState(5);
  console.log("No.",num);
  return (
    <>
      <h1>Number{num}</h1>
    </>
  )
}

export default LearnState
