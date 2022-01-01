
import React from 'react';
import DashboardRoot from '../DashboardRoot/DashboardRoot';
import DashboardSlide from '../DashboardSlide/DashboardSlide';
import ManageAds from '../ManageAds/ManageAds';
import MyRecipes from '../MyRecipes/MyRecipes';
import NewsLetters from '../Newsletters/NewsLetters';
import BlogList from '../Dashboard/BlogList/BlogList';

import Profile from '../Profile/Profile';
import User from "./User/User";

const Dashboard = () => {
    return (
        <div>
        
            <DashboardSlide></DashboardSlide>
            <NewsLetters></NewsLetters>
            <ManageAds></ManageAds>
            <DashboardRoot></DashboardRoot>
            <Profile></Profile> 
            <MyRecipes></MyRecipes>
            <User></User>
            <BlogList></BlogList>
        </div>
    )
}
export default Dashboard;

