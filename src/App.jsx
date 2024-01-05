import React from "react"
import { Learnjsx } from "./assets/Component/learnjsx"
import { Learncomp } from "./assets/Component/Learncomp"
import { Learnprops } from "./assets/Component/Learnprops";
import LearnLiftingSetup from "./assets/Component/LearnLiftingSetup";
function App() {
  let price=10;
  const getData=(data)=>{
    console.log(data);
  }
  return (
    <>
      <h1>Hello Prince</h1>
      <Learnjsx/>{/*This is a component*/}
      <Learncomp/>{/*This is a component with variable*/}
      <Learnprops name="Prince" price={price}/>
      <LearnLiftingSetup myClick={getData}/>
    </>
  )
}

export default App
