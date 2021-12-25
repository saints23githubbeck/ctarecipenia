import React from 'react';
import DashboardRoot from '../DashboardRoot/DashboardRoot';
import ManageAds from '../ManageAds/ManageAds';
import MyRecipes from '../MyRecipes/MyRecipes';
import NewsLetters from '../Newsletters/NewsLetters';

import Profile from '../Profile/Profile';


const Dashboard = () => {
    return (
        <div>
            <NewsLetters></NewsLetters>
            <ManageAds></ManageAds>
            <DashboardRoot></DashboardRoot>
            <Profile></Profile> 
            <MyRecipes></MyRecipes>

         


        </div>
    );
};

export default Dashboard;