import React from 'react'

export const App = () => {


  function submit(e){
   e.preventDefault();
    console.log("Form Submit.");
    alert("form submit successfull");
  }

  return (
    <div>
      <form  onSubmit={(e)=>{
       submit(e);
      }}>
         <input type="text" placeholder='Enter your message.'/>
         <button>Submit</button>
      </form>
    </div>
  )
}

export default App;