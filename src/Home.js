import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Header from './Header';


function Home() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const myFunc = require('./Header.js');

  function submitFormToNotion(){
    console.log("lets gooooooooo");
    console.log(name);
    fetch("http://localhost:4000/submitFormToNotion", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        phoneNumber, phoneNumber,
        extraInfo: extraInfo
      })
    }).then(response => response.json())
    .then(data => {
      console.log("Success", data);
    }).catch((error) =>{
      console.log("error", error)
    })
  }

  
  return (

    <div className="App">
       <Header />
      <div style={{maxWidth: "500px", margin: "0 auto"}}>
        <h1>Time Report</h1>
        <p>Datum</p>
        <input type= "text" id= "name" onChange={(e) => setName(e.target.value)} />

        <p>Time</p>
        <input type= "text" id= "phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} />

        <p>Comments</p>
        <textarea onChange={(e) => setExtraInfo(e.target.value)} rows={10} cols={25} />

        <div>
          <button onClick={submitFormToNotion}>
            Submit to Notion
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
