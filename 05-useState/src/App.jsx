import React, { useState } from 'react'

export const App = () => {

  const [num, updateNum] = useState(0)

  function increase(){
    console.log("increase..");
    updateNum(num+1)
  }

  function decrease(){
    updateNum(num-1)
  }



  const [mode, changemode] = useState("light")

  function change(){
  if(mode == "light"){
    changemode("dark");
    document.body.classList.toggle("dark");    
  }else{
    changemode("light");
    document.body.classList.toggle("#fff");
  }
  }

  return (
    <div>
      <h1 className='num'>number: {num}</h1>
      <button onClick={increase}>increase</button>
      <button className='btn' onClick={decrease}>decrease</button>

     <div className='change'>
        <div className='mode'></div>
        <button className='mc' onClick={change}>{mode}</button>
     </div>
    </div>
  )
}

export default App;