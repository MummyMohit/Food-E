import React, { useState } from 'react'

const PracticeComponent2 =()=> {

    const[open,setOpen] = useState(false)

     const Shot = ()=>{
      alert("greate shot");
     }

  return (
    <div>
            PracticeComponent2
        <button onClick={Shot}>ShotButton</button>
    </div>
  )

}

export default PracticeComponent2