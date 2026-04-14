import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setLength] = useState(7);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-{}[]`~";

    for (let i = 0; i < length; i++) {
    let char = Math.floor(Math.random() * str.length);
    pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  function copyPassword(){
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }
    
  

  useEffect(()=>{
    passwordGenerator();
  },[length, numberAllowed, charAllowed])
  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md
          rounded-lg px-4 my-9 text-orange-500 bg-gray-700"
      >
        <h1 className="text-white text-center my-5">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-8">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
          className="outline-none bg-blue-700 text-white
          px-2 py-2 shrink-0 cursor-pointer" onClick={()=>{
            copyPassword();
          }}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 ">
          <div className="flex items-center gapx-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer "
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="ml-3">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              className="cursor-pointer"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              className="cursor-pointer"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Charactors</label>
          </div>

        </div>
      </div>
    </>
  );
};

export default App;
