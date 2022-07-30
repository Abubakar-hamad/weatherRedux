import React from "react"
import Header from './components/Header';
import logo from './assets/icon.png'
import Form from "./components/Form";
import {GrReactjs} from 'react-icons/gr'
import {SiRedux} from 'react-icons/si'
import {AiOutlineApi , AiFillGithub , AiOutlineWhatsApp , AiFillLinkedin} from 'react-icons/ai'
import { ToastContainer } from 'react-toastify';
import {CgMail} from 'react-icons/cg'
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
                <h1><b>About Site</b></h1>
                <br />
               <div className="about">
               <div className="item">
                  <GrReactjs style={{color:'#1DA1F2' , fontSize:'5rem'}}/>
                  <h2>Reactjs</h2>
                  <p>the site created by uses  reactjs and axios </p>
                </div>  

                <div className="item">
                  <SiRedux style={{color:'#764ABC' , fontSize:'5rem'}}/>
                  <h2>Redux</h2>
                  <p>uses redux toolkit with create a think thunk and slices  </p>
                </div>  

                <div className="item">
                  <AiOutlineApi style={{color:'#F48225' , fontSize:'5rem'}}/>
                  <h2>API</h2>
                  <p> uses Api from <a style={{color:"blue" , fontSize:"1rem"  , textDecoration:"underline" }} href="https://openweathermap.org/">open weather</a> </p>
                </div>  
               </div>
              </div>
            </section>

            <footer id="contact">
          
                <div className="contact">
                  <div className="con"><a target='_blank' href="https://api.whatsapp.com/send/?phone=249922838007&text&type=phone_number&app_absent=0">< AiOutlineWhatsApp/></a></div>
                  <div className="con"><a target='_blank' href="https://github.com/Abubakar-hamad"><AiFillGithub/></a></div>
                  <div className="con"><a target='_blank' href="mailto:abubakar.hmdelneel@gmail.com "><CgMail/></a></div>
                  <div className="con"><a target='_blank' href="https://www.linkedin.com/in/abubakar-hmd-52272b1b7/"><AiFillLinkedin/></a></div>
                  
              </div>
            </footer>
              <div className="reserv">
            
              <p>Created by  Abubakar Hmd. &copy; 2022</p>
                {/* <span>all reserv saved 2022 </span> */}
              </div>

          <ToastContainer/>

    </div>
  );
}

export default App;
