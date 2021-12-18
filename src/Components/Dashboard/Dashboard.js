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
};

export default Dashboard;