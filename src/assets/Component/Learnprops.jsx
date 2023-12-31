/*export const Learnprops=(props)=>{
    return(
        <>
          <h1>All Props</h1>
          <h1>{props.name}</h1>
          <h2>{props.price}</h2>(This is a props1)
        </>
    )
}*/
export const Learnprops=({name,price})=>{
    return(
        <>
            <h1>All Props</h1>
            <h1>{name}</h1>
            <h1>{price}</h1>
        </>
    )
}