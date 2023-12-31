import React from "react"
import { Learnjsx } from "./assets/Component/learnjsx"
import { Learncomp } from "./assets/Component/Learncomp"
import { Learnprops } from "./assets/Component/Learnprops";
function App() {
  let price=10;
  return (
    <>
      <h1>Hello Prince</h1>
      <Learnjsx/>{/*This is a component*/}
      <Learncomp/>{/*This is a component with variable*/}
      <Learnprops name="Prince" price={price}/>
    </>
  )
}

export default App
