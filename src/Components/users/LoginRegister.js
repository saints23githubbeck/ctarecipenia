import React, { useEffect, useState } from 'react';
import loginImageBoy from '../../images/login-image.png';
import loginImageGirl from '../../images/login-image-girl.png';
import loginLogo from '../../images/login-logo.png';
import './LoginRegister.css';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Checkbox } from '@mui/material';
const LoginRegister = () => {
    // const [isRegister,setIsregister] = useState(false);
    const [isToggle,setIsToggle] = useState(false);
    
    const handleToggle = (e)=>{
        setIsToggle(e.target.checked);
    }
    
    const handleLoginRegister =(e)=>{
        e.preventDefault()
    }
    useEffect(() =>{
        AOS.init();
        },[]);
    return (
        <div id="loginRegister-container">
            <div class="row login-register">
                <div class="col-md-6 loginimage" data-aos="fade-down" data-aos-delay="500">
                    {isToggle ?
                        <img className='w-100' src={loginImageGirl} alt="" />
                        :
                        <img className='w-100' src={loginImageBoy} alt="" />
                    }
                </div>
                <div class="col-md-6 loginimage" data-aos="fade-down" data-aos-delay="500">
                    <div className='login-register-form'>
                        <div class="text-center">
                            <img src={loginLogo} alt="" />
                            <p className='text-secondary'>Welcome back! Please Login your Account</p>
                        </div>
                        <form onSubmit={handleLoginRegister}>
                            <div>
                                {isToggle ?
                                    <div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <TextField className="my-input" id="standard-basic" label="First Name" variant="standard" />
                                            </div>
                                            <div class="col-md-6">
                                                <TextField className="my-input" id="standard-basic" label="Last Name" variant="standard" />
                                            </div>
                                        </div>
                                        <TextField className="my-input" id="standard-basic" label="User Name" variant="standard" />
                                        <TextField className="my-input" id="standard-basic" type="email" label="User Email" variant="standard" />
                                        <TextField className="my-input" id="standard-basic" type="password" label="Password" variant="standard" />
                                        <TextField className="my-input" id="standard-basic" type="password" label="Confirm Password" variant="standard" />
                                    </div>
                                    :
                                    <div>
                                        <TextField className="my-input" id="standard-basic" label="User Name" variant="standard" />
                                    <TextField className="my-input" id="standard-basic" label="Password" type="password" variant="standard" />
                                    </div>
                                }
                            </div>
                        <div className='checked-and-forget-password'>
                            <FormControlLabel
                                control={<Checkbox />}
                                    labelPlacement="end"
                                    style={{ margin: ' 0 0 0 0', color: "black" }}
                                    label="Remember Me"             
                            />
                            <span className='text-primary'>
                                Forgot Password
                            </span>
                        </div>
                        <div className='d-grid mt-2'>
                            <button className='my-bg-button'>{isToggle? "Register" : "Login"}</button>
                        </div>
                        <FormControlLabel
                            control={<Checkbox />}
                            labelPlacement="end"
                            onChange={handleToggle}
                            style={{ margin: ' 0 0 0 0', color: "black" }}
                            label="Create An Account"           
                        />
                        {/* <div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div className='d-grid mt-2'>
                                        <button className='my-bg-button'>Login</button>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div className='d-grid mt-2'>
                                        <button onChange={handleRegister} className='my-register-button'>Register</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;