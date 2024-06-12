import React, { useState } from 'react'
import "../style/Style.css";
import Groupveri from "../assets/Images/Groupveri.png"
import logo from "../assets/Images/logo.png";
import textveri from "../assets/Images/textveri.png";
import loremveri from "../assets/Images/loremveri.png";
import { Link } from 'react-router-dom';
// import Typography from '@mui/material/Typography';

export default function Verificationcode() {
  return (
    <div>
        <div className='contaier-fluid'>
            <div className='log1'>
                <img src={Groupveri} alt="loading" className='logimg'/>
            </div>
            <div className='veri2'>
            <img src={logo} alt="loading" className='logdata'/><br />
            <img src={textveri} alt="loading" className='veritxt'/><br />
            <img src={loremveri} alt="loading" className='veritxt2'/>
            </div>
            <div className='log3'>
              <div className='login'>
                <div className='veridiv1'>
                  <h1 style={{fontSize:".8em"}}>ENTER VERIFICATIN CODE</h1>
                  <h3 style={{fontSize:"1.2em"}}>Verification Code</h3>
                </div>
                <br />
                <div className='veridiv3'>
                   <input type="text" className='veriinput'/>
                   <input type="text" className='veriinput'/>
                   <input type="text" className='veriinput'/>
                   <input type="text" className='veriinput'/>
                   <input type="text" className='veriinput'/>
                </div>
                <span className='veriotp'><Link> <u>Get OTP</u></Link></span>
                <div>
                <button className='logbtn'>VERIFY</button>
                </div>
                <br />
                <br /><br /><br /><br />
                <span style={{paddingLeft:'320px',fontSize:'25px'}}> Or</span>
                <br />
                <div className='inp'>
                  <button className='loginput' style={{paddingLeft:'10px'}}>
                  <span style={{color:"#74C0FC"}}><i class="fa-brands fa-google" style={{paddingRight:"25px"}}></i> <span style={{color:"#151416"}}>Log In with Google</span></span>
                  </button>
                  <button className='loginput'>
                  <span style={{color:"#74C0FC"}}><i class="fa-brands fa-facebook" style={{paddingRight:"25px"}}></i><span style={{color:"#151416"}}>Log In with Facebook</span></span>
                  </button>
                   <button className='loginput' style={{paddingLeft:'3px'}}>
                  <span style={{color:"#000"}}><i class="fa-brands fa-apple" style={{paddingRight:"25px"}}></i>Log In with Apple</span>
                  </button>
                  
           
                </div>
                <div className='forgot'>
                  <span>Already have an Account ?<a href="/login" style={{fontWeight:'bold'}}> <u>Login Here</u></a> </span>
                </div>
              </div>
            </div>
   
        </div>

    </div>
  )
}


