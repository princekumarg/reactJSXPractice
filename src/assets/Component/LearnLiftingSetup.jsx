
const LearnLiftingSetup = (props) => {
    const handleClick=(e)=>{
        e.preventDefault()
        let dt="I am Child data"
        props.myClick(dt)
    }
    return (
    <>
      <button onClick={handleClick}>Click1</button>
    </>
  )
}

export default LearnLiftingSetup

