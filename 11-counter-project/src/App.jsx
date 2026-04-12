import React from 'react'
import { useState } from 'react';

export const App = () => {


  let [counter, setCounter] = useState(1);

  const addCount=()=>{
  //  console.log("add counter: ", {counter});
   setCounter(counter+1)
  }

  const removeCount=()=>{
    // console.log("Remove counter: ", {counter})
    if(counter > 1){
      setCounter(counter-1);
    }
  }
  return (
    <div className='counter'>
      <div className='center'>
        <h1>Counter Project</h1>
        <h2>count: {counter}</h2>
        <button onClick={addCount} className='btn'>Add Value</button>
        <button onClick={removeCount} className='btn'>Remove Value</button>
      </div>
    </div>
  )
}

export default App;