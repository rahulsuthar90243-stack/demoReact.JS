import React from 'react'

export const App = () => {

  function clickBtn(){
    console.log("Button click");
  }

  const inputchange=(val)=>{
    console.log(val);
  }

  const move=(x, y)=>{
   console.log(x, y);
  }

  return (
    <div>
      <button mouse={function click(){
        console.log("Button click");
      }}>Click Me</button>

      <input onChange={function input(elem){
        inputchange(elem.target.value);
      }} type="text" placeholder='Enter message'/>

      <div className='parent'>
           <div className='round' onMouseMove={function(elem){
            move(elem.clientX, elem.clientY)
           }}></div>
      </div>
    </div>
  )
}

export default App