import axios from "axios";
import React, { useEffect, useState } from "react";

export const App = () => {
  const [UserData, setUserData] = useState([]);

  async function getData() {
    const responce = await axios.get(
      "https://picsum.photos/v2/list?page=3&limit=20",
    );

    setUserData(responce.data);
    console.log(UserData);
  }

  useEffect(function(){
    getData();
  },[])

  let printLoding = <h3 className="loding">loding..</h3>;

  if (UserData.length > 0) {
    printLoding = UserData.map(function (elem, idx) {
      return (
        <a href={elem.url}>
          <div>
            <div className="divimg">
              <img src={elem.download_url} alt="" />
            </div>
            <h2>{elem.author}</h2>
          </div>
        </a>
      );
    });
  }

  return (
    <div className="main">

      <div className="printlod">{printLoding}</div>

      <div cla>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default App;
