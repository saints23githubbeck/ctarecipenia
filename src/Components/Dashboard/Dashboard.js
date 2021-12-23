
import React from 'react';
import DashboardRoot from '../DashboardRoot/DashboardRoot';
import MyRecipes from '../MyRecipes/MyRecipes';

import Profile from '../Profile/Profile';
import User from "./User/User";

const Dashboard = () => {
    return (
        <div>
            <DashboardRoot></DashboardRoot>
            <Profile></Profile> 
            <MyRecipes></MyRecipes>
            <User></User>
        </div>
    )
}
export default Dashboard;

