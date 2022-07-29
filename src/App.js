import React from "react"
import Header from './components/Header';
import logo from './assets/icon.png'
import Form from "./components/Form";



function App() {

  var today = new Date();

  var hours = (today.getHours());
  
  return (

    <div className="App">
        <div className="container">
          <div className="header">
          
               <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav>
                <ul>
                    <li>about</li>
                    <li>contact</li>
                </ul>
            </nav>
          </div>
          <div className="time">
            <div style={{textAlign:'center'}} className="">
          <h1> {today.getHours() + ":" + today.getMinutes()} | {hours>12 ? "PM" : 'AM'}</h1>
          <p >{today.getDay() +'/'+today.getMonth()+'/'+today.getFullYear()} </p>
          </div>
          <div className="good">
          <p>have a nice day</p>
          </div> 
          </div>
        </div>


          <Form />

     
    </div>
  );
}

export default App;
