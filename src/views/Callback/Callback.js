import { useState } from "react"
import ChildComponent from "./Children"
const Callback = () =>{

  const[data,setData] = useState()
  const handleClick = (value) => {
   setData(value) 
  console.log(value);
  }
  return (
    <div>
<p>{data}</p>
 <ChildComponent onData={handleClick}/>
    </div>
  )

}

export default Callback