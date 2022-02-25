import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from "react-router-dom";

export const AuthRoute = ({ component: Component, ...restOfProps }) => {
    const loggedIn = useSelector((state)=> state.loggedIn);
    return (
      <Route
        {...restOfProps}
        render={(props) =>
          loggedIn ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
};