
import React, { useEffect } from 'react';
import DashboardRoot from '../DashboardRoot/DashboardRoot';
import DashboardSlide from '../DashboardSlide/DashboardSlide';
import ManageAds from '../ManageAds/ManageAds';
import MyRecipes from '../MyRecipes/MyRecipes';
import NewsLetters from '../Newsletters/NewsLetters';
import BlogList from '../Dashboard/BlogList/BlogList';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Profile from '../Profile/Profile';
import User from "./User/User";

const Dashboard = () => {

    const history = useHistory();
    const loggedIn = useSelector((state)=> state.loggedIn);

    // useEffect(()=> {
    //     console.log(loggedIn, " dashboard useffect loggedIn2 log");
    //     if(loggedIn === true){
    //       history.replace("/dashboard");
    //     }else if (loggedIn === false){
    //       history.replace("/login");
    //       console.log(loggedIn, "to auth loggedIn2 log");
    //     }
    //   }, [loggedIn])

    return (
        <div>
            <DashboardSlide>
            </DashboardSlide>
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

