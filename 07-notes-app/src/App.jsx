import React, { useState } from 'react'
export const App = () => {

const [title, setTitel] = useState('')
const [detail, setDetail] = useState('')

function submitHandlig(e){
  e.preventDefault();
 console.log("Title: ",title ," details: ", detail)
 setTitel('');
 setDetail('');
}



  return (
    <div className='container'>
      <h1>Add Notes</h1>
      <form className='center' onSubmit={(e)=>{
        submitHandlig(e);
      }}>
        <input type="text" placeholder='Enter Notes Heading' value={title} onChange={(e)=>{
          setTitel(e.target.value);
        }}/>
        <textarea name="" id="" placeholder='Write Details.' onChange={(e)=>{
          setDetail(e.target.value);
        }} value={detail}></textarea>
        <button>Add Note</button>
      </form>
          
          <h2>Recent Notes</h2>
        <div className='bigPad'>
          <div className='note'></div>
          <div className='note'></div>
          <div className='note'></div>
         </div>
      </div>
  )
}

export default App;