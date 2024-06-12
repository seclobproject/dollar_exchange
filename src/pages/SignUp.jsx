import React, { useState } from 'react'
import "../style/Style.css";
import Group12 from "../assets/Images/Group12.png"
import Group570383 from "../assets/Images/Group570383.png";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
// import { Link } from 'react-router-dom';
// import Typography from '@mui/material/Typography';

export default function SignUp() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [Password, setPassword ]= useState('');
  const [Confirmpwd, setConfirmpwd] = useState('');


  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <div>
        <div className='contaier-fluid'>
            <div className='sign1'>
                <img src={Group12} alt="loading" className='signimg'/>
            </div>
            <div className='sign2'>
            <img src={Group570383} alt="loading" className='signdata'/>
            </div>
            <div className='sign3'>
              <div className='signup'>
                <div className='logdiv1'>
                  <h1 style={{fontSize:".8em"}}>REGISTER HERE</h1>
                  <h3 style={{fontSize:"1.2em"}}>Create an Account</h3>
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
                    label="Your Name"
                    type='text'
                    sx={{ width: '500px', height: '70px', '& .MuiInputBase-input': { fontSize: '20px' ,borderRadius:"10px"} }}
                    onChange={(e)=>{setName(e.target.value)}}
                />
                <br />
                <TextField className='textfield'
                //  style={{fontSize:'30px'}}
                    required
                    id="outlined-required"
                    label="Enter Email Or Phone Number"
                    sx={{ width: '500px', height: '70px', '& .MuiInputBase-input': { fontSize: '20px' ,borderRadius:"10px"} }}
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
                <br />
               
                  <FormControl 
      required 
      sx={{ width: '460px', height: '70px' }}
    >
      <InputLabel id="country-select-label">Country</InputLabel>
      <Select
        labelId="country-select-label"
        id="country-select"
        value={country}
        label="Country"
        onChange={handleChange}
        sx={{ 
          '& .MuiSelect-select': { 
            fontSize: '20px', 
            borderRadius: "10px",
            marginLeft: "20px"
          },
          '& .MuiOutlinedInput-root': {
            marginLeft: "20px"
          }
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'US'}>United States</MenuItem>
        <MenuItem value={'CA'}>Canada</MenuItem>
        <MenuItem value={'UK'}>United Kingdom</MenuItem>
        
      </Select>
    </FormControl>
                <br />
                <TextField
                    required
                    id="outlined-required"
                    label="Password"
                    type='password'
                    sx={{ width: '500px', height: '70px', '& .MuiInputBase-input': { fontSize: '20px' } }}
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
                <br />
                <TextField
                    required
                    id="outlined-required"
                    label="Confirm Password"
                    type='password'
                    sx={{ width: '500px', height: '70px', '& .MuiInputBase-input': { fontSize: '20px' } }}
                    onChange={(e)=>{setConfirmpwd(e.target.value)}}
                />
            </div>
        </Box>
                </div>
                <div>
                <span style={{paddingLeft:"100px",fontSize:"20px"}}><input type="checkbox" /> I agree to Vaultizo</span> <br />
                <span style={{fontSize:"22px",color:"lightblue",paddingLeft:'100px'}}> Trems of Service ,Privacy Policy & Cookie Policy</span>
                </div>
                <div>
                <button className='logbtn'>GET STARTED</button>
                </div>
                <br />
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
                <div className='signdiv2'>
                  <span>Already have an Account ?<a href="/login" style={{fontWeight:'bold'}}> <u>Login Here</u></a> </span>
                </div>
              </div>
            </div>
   
        </div>

    </div>
  )
}
