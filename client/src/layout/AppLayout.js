
import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

import Footer from '../components/Footer'
import AuthModal from '../components/modals/AuthModal';
import Nav from '../components/Nav'


const AppLayout = (props) => {
  const { landingPage } = props;
      const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);

  const loggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log(loggedIn, "loggedIn out");
  useEffect(() => {
    console.log(loggedIn, "loggedIn");
    if (loggedIn) {
      navigate("/user-dashboard");
    } else {
      navigate("/");
    }
  }, [loggedIn]);


  const openAuth = (val) => {
    setModalShow(val);
  };

  return (
    <div className="applayout">
      <Nav landingPage={landingPage} setModalShow={openAuth} />
      {props.children}
      <Footer />

      <AuthModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </div>
  );
}

export default AppLayout