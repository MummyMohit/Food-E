import { useState } from "react";
function ChildComponent({onData}) {
const [count,setCount] = useState(0)

  const handlebutton = ()=>{
    setCount(count+1)
    onData(count)
  }

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handlebutton}>Send Data to Parent</button>
    </div>
  );
  
}

export default ChildComponent;
