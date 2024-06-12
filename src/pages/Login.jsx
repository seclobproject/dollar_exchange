import React, { useState } from 'react'
import "../style/Style.css";
import Logimg from "../assets/Images/Logimg.png"
import logo from "../assets/Images/logo.png";
import text from "../assets/Images/text.png";
import lorem from "../assets/Images/lorem.png";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
// import Typography from '@mui/material/Typography';

export default function Login() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword ]= useState('');
  return (
    <div>
        <div className='contaier-fluid'>
            <div className='log1'>
                <img src={Logimg} alt="loading" className='logimg'/>
            </div>
            <div className='log2'>
            <img src={logo} alt="loading" className='logdata'/>
            <img src={text} alt="loading" className='logtxt'/>
            <img src={lorem} alt="loading" className='logtxt2'/>
            </div>
            <div className='log3'>
              <div className='login'>
                <div className='logdiv1'>
                  <h1 style={{fontSize:".8em"}}>WELCOME BACK</h1>
                  <h3 style={{fontSize:"1.2em"}}>Log In to your Account</h3>
                </div><br />
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
                <TextField
                    required
                    id="outlined-required"
                    label="Password"
                    type='password'
                    sx={{ width: '500px', height: '70px', '& .MuiInputBase-input': { fontSize: '20px' } }}
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
            </div>
        </Box>
                </div>
                <div>
                <span style={{paddingLeft:"100px",fontSize:"20px"}}><input type="checkbox" /> remember me</span>
                <span style={{paddingLeft:"130px",fontSize:"20px"}}> <Link to={"/forgotpassword"}>Forgot Password ?</Link></span>
                </div>
                <div>
                <button className='logbtn'>CONTINUE</button>
                </div>
                <br />
                <span style={{paddingLeft:'320px',fontSize:'25px'}}> Or</span>
                <br />
                <div className='inp'>
                  <button className='loginput' style={{paddingLeft:'10px'}}>
                  <span style={{color:"#74C0FC"}}><i class="fa-brands fa-google" style={{paddingRight:"25px"}}></i> <span style={{color:"#151416"}}>Log In with Google</span></span>
                  </button>
                  <button className='loginput'>
                  <span style={{color:"#74C0FC"}}><i class="fa-brands fa-facebook" style={{paddingRight:"25px"}}></i> <span style={{color:"#151416"}}>Log In with Facebook</span></span>
                  </button>
                   <button className='loginput' style={{paddingLeft:'3px'}}>
                  <span style={{color:"#000"}}><i class="fa-brands fa-apple" style={{paddingRight:"25px"}}></i>Log In with Apple</span>
                  </button>
                  
           
                </div>
                <div className='logdiv2'>
                  <span>New User ?<a href="/signup" style={{fontWeight:'bold'}}> <u>Sign Up Here</u></a> </span>
                </div>
              </div>
            </div>
   
        </div>

    </div>
  )
}
