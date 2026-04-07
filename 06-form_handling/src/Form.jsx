import React, { useState } from 'react'

export const Form = () => {

  const [Title, setTitle] = useState('');

  function submitHandling(e){
    e.preventDefault();
   console.log("form submit by", Title);
   localStorage.setItem("form submit by ", Title);
   setTitle('')
  }

  return (
    <div>
        <h1>This is form Component</h1>

        <form className='form2' onSubmit={(e)=>{
          submitHandling(e);
        }}>
          <input ons className='input2' type="text" value={Title} onChange={(e)=>{
            setTitle(e.target.value);
          }}/>
          <button className='btn2'>Submit</button>
        </form>
    </div>
  )
}
export default Form;
