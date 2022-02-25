import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from "react-router-dom";

export const NoAuthRoute = ({ component: Component, ...restOfProps }) => {
    const loggedIn = useSelector((state)=> state.loggedIn);
    console.log(loggedIn,"noauth log")

    return (
      <Route
        {...restOfProps}
        render={(props) =>
          !loggedIn ? <Component {...props} /> : <Redirect to="/dashboard" />
        }
      />
    );
};