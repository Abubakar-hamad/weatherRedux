import React from "react"
import Header from './components/Header';
import logo from './assets/icon.png'
import Form from "./components/Form";
import {GrReactjs} from 'react-icons/gr'
import {SiRedux} from 'react-icons/si'
import {AiOutlineApi} from 'react-icons/ai'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
                    <li><a href="#about">about</a></li>
                    <li><a href="#contact">contact</a></li>
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
    
            <section id="about">
              <div className="container">
                <h2>about site</h2>
                <span></span>
               <div className="about">
               <div className="item">
                  <GrReactjs style={{color:'#1DA1F2' , fontSize:'5rem'}}/>
                  <h2>Reactjs</h2>
                  <p>the site using  reactjs   , axios </p>
                </div>  

                <div className="item">
                  <SiRedux style={{color:'#764ABC' , fontSize:'5rem'}}/>
                  <h2>Redux</h2>
                  <p>useing redux toolKit with thunk and slices  </p>
                </div>  

                <div className="item">
                  <AiOutlineApi style={{color:'#F48225' , fontSize:'5rem'}}/>
                  <h2>API</h2>
                  <p> useing Api from site <a style={{color:"blue" , fontSize:"1rem"  , textDecoration:"underline" }} href="https://openweathermap.org/">open weather</a> </p>
                </div>  
               </div>
              </div>
            </section>

          <ToastContainer/>

    </div>
  );
}

export default App;
