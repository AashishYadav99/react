import { useState } from "react"


const Example=()=>{

    const [name,setName]=useState("Ashish");
    
    const onChange=(event)=>{
        setName(event.target.value)

    }
    return(
        <div>
              <h1>{name}</h1>
        <label>Enter the Name :</label>
        <input type="text" value={name} placeholder="Enter your Name" onChange={onChange}></input>

        </div>
      

    )
}
export default Example