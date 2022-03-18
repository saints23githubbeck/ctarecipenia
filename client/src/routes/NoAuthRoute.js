import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from "react-router-dom";

export const NoAuthRoute = () => {
    const loggedIn = useSelector((state)=> state.loggedIn);
     console.log(loggedIn,"noauth log")
 
    return loggedIn ? <Navigate to="/home" />:<Outlet /> ;
};
