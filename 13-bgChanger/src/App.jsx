import React from "react";
import { useState } from "react";

export const App = () => {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen flex justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="bg-white text-black w-60 h-12 flex items-center justify-center gap-5 rounded-2xl">
        <button
          className="bg-red-400 p-10 w-10 rounded-2xl cursor-pointer"
          style={{ backgroundColor: { color } }}
          onClick={() => {
            {
              setColor("red");
            }
          }}
        >
          Red
        </button>
        <button
          className="bg-blue-400 p-10 w-10 rounded-2xl cursor-pointer"
          onClick={() => {
            setColor("blue");
          }}
        >
          Red
        </button>
        <button
          className="bg-green-400 p-10 w-10 rounded-2xl cursor-pointer"
          onClick={() => {
            setColor("green");
          }}
        >
          Green
        </button>
        <button
          className="bg-pink-400 p-10 w-10 rounded-2xl cursor-pointer"
          onClick={() => {
            setColor("pink");
          }}
        >
          Pink
        </button>
      </div>
    </div>
  );
};

export default App;
