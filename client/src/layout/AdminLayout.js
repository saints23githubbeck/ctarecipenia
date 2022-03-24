import React from 'react'
import { Link }from 'react-router-dom'
import '../assets/styles/adminStyles/login.scss'
import '../assets/styles/adminStyles/adminLayout.scss'
import SideNav from '../components/admin/SideNav'

import menuBar from "../assets/images/menu-bar-admin2.png"
import homeLogo from "../assets/images/home-logo.png"

const AdminLayout = (props) => {
  const currentLocation = "/"

  return (
    <div className='adminlayout'>
      <SideNav />
      <div className='children'>
        <header>
          <div>
            <img src={menuBar} alt="menuBar" />
            <Link to="/admin/dashboard">
              <img src={homeLogo} alt="homeLogo" />
            </Link>   
            <span> 
              <Link to="/admin/dashboard">Home</Link>
              <strong> {props.title} </strong>
            </span>
          </div>
        </header>
        {props.children}
      </div>
      {/* <Nav landingPage={landingPage} setModalShow={openAuth}/> */}
  
      {/* <AuthModal 
      show={modalShow}
      onHide={() => setModalShow(false)}
      setModalShow={setModalShow}
      /> */}
    </div>
  )
}

export default AdminLayout