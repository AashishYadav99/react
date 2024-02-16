import { useState } from "react"


const Count=()=>{

    const [setValue,newValue]=useState(0);
   
    return(

        <>
        <h1 >{setValue}</h1>
        <button type="button" onClick={()=>newValue(setValue+1)}> click here</button>
        </>
    )
    
    }

   

export default Count