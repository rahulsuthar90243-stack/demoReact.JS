import React from 'react'
import Form from './form.jsx'   

export const App = () => {

  function submit(e){
    e.preventDefault();
    console.log("Form Submit.");
    alert("form submit successful");
  }

  return (
    <div>

      <form onSubmit={submit}>
        <input type="text" placeholder='Enter your message.'/>
        <button>Submit</button>
      </form>

     <Form />
    </div>
  )
}

export default App;