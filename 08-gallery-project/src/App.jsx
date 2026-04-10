import axios from "axios";
import React, { useEffect, useState } from "react";

export const App = () => {
  const [UserData, setUserData] = useState([]);
  const [Index, setIndex] = useState(1)

  async function getData() {
    const responce = await axios.get(
    `https://picsum.photos/v2/list?page=${Index}&limit=15`,
    );

    setUserData(responce.data);
    console.log(UserData);
  }

  useEffect(function(){
    getData();

  },[Index])

  let printLoding = <div className="loadingdiv"><h3 className="loading">loading..</h3></div>;

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

      <div className="prenext">
        <button className="btn" style={{opacity: Index == 1 ? 0.6 : 1}}
        onClick={()=>{
          if(Index>1){
            setIndex(Index-1)
            setUserData([]);
          }
        }}>Prev</button>
        <h3>Page{Index}</h3>
        <button className="btn" onClick={()=>{
          setIndex(Index+1)
          setUserData([]);
        }}>Next</button>
      </div>
    </div>
  );
};

export default App;
