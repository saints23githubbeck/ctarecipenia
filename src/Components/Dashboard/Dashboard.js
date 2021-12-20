
import React from 'react';
import DashboardRoot from '../DashboardRoot/DashboardRoot';
import MyRecipes from '../MyRecipes/MyRecipes';

import Profile from '../Profile/Profile';


const Dashboard = () => {
    return (
        <div>
            <DashboardRoot></DashboardRoot>
            <Profile></Profile> 
            <MyRecipes></MyRecipes>

         


        </div>
    );

import React from "react";
import User from "./User/User";



const Dashboard = () => {
  return (
    <div className="container my-5">
     <User></User>
    </div>
  );

};

export default Dashboard;

