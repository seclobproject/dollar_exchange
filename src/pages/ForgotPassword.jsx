import React, { useState } from 'react'
import "../style/Style.css";
import Groupfor from "../assets/Images/Groupfor.png"
import logo from "../assets/Images/logo.png";
import textfor from "../assets/Images/textfor.png";
import loremfor from "../assets/Images/loremfor.png";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
// import Typography from '@mui/material/Typography';

export default function ForgotPassword() {
  const [Email,setEmail] = useState("");
  const navigate = useNavigate();

  const handleOtp = ()=>{
    navigate('/verificationcode');
  }
  return (
    <div>
        <div className='contaier-fluid'>
            <div className='log1'>
                <img src={Groupfor} alt="loading" className='logimg'/>
            </div>
            <div className='log2'>
            <img src={logo} alt="loading" className='logdata'/><br />
            <img src={textfor} alt="loading" className='logtxt'/><br />
            <img src={loremfor} alt="loading" className='logtxt2'/>
            </div>
            <div className='log3'>
              <div className='login'>
                <div className='logdiv1'>
                  <h1 style={{fontSize:".8em"}}>LET'S GET YOU STARTED</h1>
                  <h3 style={{fontSize:"1.2em"}}>Forgot Password</h3>
                </div>
                <br />
                <div >
                <Box style={{fontSize:'30px'}}
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '53ch', height: '8ch', fontSize: '16px' },
                '& .MuiInputBase-input': { fontSize: '20px' } 
            }}
            noValidate
            autoComplete="off"
        >
            <div className='logtext'>
                <TextField className='textfield'
                //  style={{fontSize:'30px'}}
                    required
                    id="outlined-required"
                    label="Enter Email Or Phone Number"
                    sx={{ width: '500px', height: '70px', '& .MuiInputBase-input': { fontSize: '20px' ,borderRadius:"10px"} }}
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
                <br />
               
            </div>
        </Box>
                </div>
                
                <div>
                <button className='logbtn' onClick={handleOtp}>GET OTP</button>
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
