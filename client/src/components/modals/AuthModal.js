import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

import "../../assets/styles/authModal.scss"
import cancel from '../../assets/images/cancel.png'
import ForgotPassword from '../ForgotPassword'
import Login from '../Login'
import Register from '../Register'



const LoginModal = (props) => {

  const [authType, setAuthType] = useState("login");
  
  const handleAuthType = (val) => {
    setAuthType(val)
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <div className='authModal'>
          <div style={{textAlign: "right"}}>
            <img  src={cancel} alt="cancel" onClick={props.onHide}/>
          </div>

          {
            authType === "login"? <Login handleAuthType={handleAuthType}/>:
            authType === "register"? <Register handleAuthType={handleAuthType}/>: <ForgotPassword handleAuthType={handleAuthType}/>
          }
          
        </div>
    </Modal>
  )
}

export default LoginModal