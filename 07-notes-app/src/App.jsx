import React, { useState } from "react";
export const App = () => {
  const [title, setTitel] = useState("");
  const [detail, setDetail] = useState("");

  const [task, settask] = useState([]);

  function submitHandlig(e) {
    e.preventDefault();

    const copytask = [...task];
    copytask.push({ title, detail });

    settask(copytask);
    setTitel("");
    setDetail("");
  }


  function deleteNote(idx){
    const copytask = [...task];
    copytask.splice(idx, 1);

    settask(copytask);
  }


  return (
    <div className="container">
      <h1>Add Notes</h1>
      <form
        className="center"
        onSubmit={(e) => {
          submitHandlig(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            setTitel(e.target.value);
          }}
        />
        <textarea
          name=""
          id=""
          placeholder="Write Details."
          onChange={(e) => {
            setDetail(e.target.value);
          }}
          value={detail}
        ></textarea>
        <button>Add Note</button>
      </form>

      <h2>Recent Notes</h2>
      <div className="bigPad">
        {task.map(function (elem, idx) {
          return (
           
             <div className="note" key={idx}>
              <div>
                <h3 className="boxh3">{elem.title}</h3>
                <p className="boxp">{elem.detail}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className="delete">Delete</button>
            </div>
           
          );
        })}
      </div>
    </div>
  );
};

export default App;



