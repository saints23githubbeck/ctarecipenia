import React from 'react';
import restlilk from '../../images/restlink.png'
import logo from '../../images/login-logo.png'
import TextField from '@mui/material/TextField';

import './Restlink.css'
import { Button } from '@mui/material';

const ResetLink = () => {
    return (
        <div className='d-md-flex pb-5'>
            <div className='col-md-6 col-12'>
                <img className='restImage img-fluid' src={restlilk} alt="" />
            </div>
            <div className='col-md-6 col-12 p-5 text-center'>
                <img className='pt-5 ' src={logo} alt="" />
                <p className='py-3 resetText'>Enter your email and we send you a password reset link</p>
                <TextField className='textfield'
                  label="Email"
                  type="email"
                  InputLabelProps={{
                   shrink: true,
                   }}
                   variant="standard"
                 />
                 <br />
                 <button className='custom'>Send request</button>
                 <p className='term '>Term of use. Privecy policy</p>
            </div>
           
        </div>
    );
};

export default ResetLink;