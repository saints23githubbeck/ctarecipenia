import React from 'react';
// import { useSelector } from 'react-redux';
import { Navigate, Outlet } from "react-router-dom";

export const AuthRoute = () => {

    // const loggedIn = useSelector((state)=> state.loggedIn);
    const loggedIn = false

    return loggedIn ? <Outlet />: <Navigate to="/" /> ;
};
