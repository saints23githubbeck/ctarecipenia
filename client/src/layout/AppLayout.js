
import React, { useState } from 'react'

import Footer from '../components/Footer'
import AuthModal from '../components/modals/AuthModal';
import Nav from '../components/Nav'


const AppLayout = (props) => {

  const { landingPage } = props;
  const [modalShow, setModalShow] = React.useState(false);

  const openAuth = (val) => {
    setModalShow(val);
  }

  return (
    <div className='applayout'>
      <Nav landingPage={landingPage} setModalShow={openAuth}/>
      {props.children}
      <Footer />

      <AuthModal 
      show={modalShow}
      onHide={() => setModalShow(false)}
      setModalShow={setModalShow}
      />
    </div>
  )
}

export default AppLayout