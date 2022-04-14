import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from "react-router-dom";

export const NoAuthRoute = () => {
    const loggedIn = useSelector((state) => state.user.isLoggedIn);
    return loggedIn ? <Navigate to="/home" />:<Outlet /> ;
};
