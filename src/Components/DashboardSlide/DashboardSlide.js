import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import DashboardRoot from '../DashboardRoot/DashboardRoot';

import Profile from '../../Components/Profile/Profile'
import Newsletter from '../Home/Newsletter/Newsletter';
import ManageAds from '../ManageAds/ManageAds';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import Home from '../Home/Home';

import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import AddRecipe from '../AddRecipe/AddRecipe';
import RecipeTable from '../MyRecipes/MyRecipes';
import ManageAddTable from '../ManageAds/ManageAds';
import NewsLaterTable from '../Newsletters/NewsLetters';
import AblogTable from '../Dashboard/BlogList/BlogList';
import AboutUsTable from '../Dashboard/BlogList/BlogList';
import ManageAboutUs from '../ManageAboutUs/ManageAboutUs';
import ManageContactUs from '../ManageContactUs/ManageContactUs';
import DashboardHome from '../DashboardHome/DashboardHome';

const DashboardSlide = () => {

  const { logOut, user } = useFirebase()
  console.log( user )


  let { path, url } = useRouteMatch();
  console.log(path, url)

//     let btn = document.getElementById("button")
// let slide = document.getElementById("slide")

// // action is here 

// btn.addEventListener("click" , ()=>{
//     slide.classList.toggle("-translate-x-full")
//     console.log(1)
    
// })
  return (
      <div className='relative md:flex min-h-screen'>
        {/* side bar is here  */}
        <div className="w-64 bg-red-500 text-neutral-100	 space-y-5 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 md:relative md:-translate-x-0" idName="slide">
          {/* logo  */}
          <div>
            <Link to='/dashboard' href="" style={{color:'white'}} className="block py-3 px-5 hover:bg-red-700 transition no-underline duration-200"><a href="/dasboard" className="text-2xl font-bold mt-5 flex items-center justify-center no-underline" style={{color:'white'}}><span>RecipeMania</span></a>
            </Link>
          </div>
          {/* side bar  */}
          <nav className='text' style={{color:'white'}} >
              <Link to='/home' href="" style={{color:'white'}} className="block py-3 px-5 hover:bg-red-700 transition no-underline duration-200"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>Home</Link>
              <Link to={`${url}/RecipeTable`} href="" style={{color:'white'}} className="block py-3 px-5 hover:bg-red-700 transition no-underline duration-200"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>Add Recipe</Link>
              <Link to={`${url}/addBlog`} href="" style={{color:'white'}} className="block py-3 px-5 hover:bg-red-700 transition no-underline duration-200"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>Add Blogs</Link>
              <Link to={`${url}/editPage`} href="" style={{color:'white'}} className="block py-3 px-5 hover:bg-red-700 transition no-underline duration-200"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>Edit page</Link>
              <Link to={`${url}/ManageAddTable`} href="" style={{color:'white'}} className="block py-3 px-5 hover:bg-red-700 transition no-underline duration-200"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>Manage Ads</Link>
              <Link to={`${url}/newsLetter`} href="" style={{color:'white'}} className="block py-3 px-5 hover:bg-red-700 transition no-underline duration-200"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" /></svg>NewsLetters</Link>
              <Link to={`${url}/manageAboutUs`} href="" style={{color:'white'}} className="block py-3 px-5 hover:bg-red-700 transition no-underline duration-200"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>Manage About us</Link>
              <Link to={`${url}/manageContactUs`} href="" style={{color:'white'}} className="block py-3 px-5 hover:bg-red-700 transition no-underline duration-200"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
              </svg>Manage contact us</Link>
              <Link to={`${url}/profile`} href="" style={{color:'white'}} className="block py-3 px-5 hover:bg-red-700 transition no-underline duration-200"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>Profile</Link>
              <button onClick={() => logOut()} style={{color:'white'}} className="block py-3 px-5 hover:bg-red-700 transition no-underline duration-200"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>  LogOut  </button>
          </nav>
        </div>
        <div className="flex-grow ">
          <Switch>
            <Route exact path={`${path}`}>
              <DashboardHome />
            </Route>
            <Route exact path={`${path}/editPage`}>
              <h1>wellcome to edit page</h1>
            </Route>
            <Route exact path={`${path}/newsLetter`}>
              <NewsLaterTable></NewsLaterTable>
            </Route>
            <Route exact path={`${path}/profile`}>
              <Profile></Profile>
            </Route>
            <Route exact path={`${path}/addRecipe`}>
              <AddRecipe></AddRecipe>
            </Route>
            <Route exact path={`${path}/ManageAddTable`}>
              <ManageAddTable></ManageAddTable>
            </Route>
            <Route exact path={`${path}/RecipeTable`}>
              <RecipeTable></RecipeTable>
            </Route>
            <Route exact path={`${path}/addBlog`}>
              <AblogTable> </AblogTable>
            </Route>
            <Route exact path={`${path}/manageAds`}>
              <ManageAds></ManageAds>
            </Route>
            <Route exact path={`${path}/manageAboutUs`}>
              <ManageAboutUs></ManageAboutUs>
            </Route>
            <Route exact path={`${path}/manageContactUs`}>
              <ManageContactUs></ManageContactUs>
            </Route>
          </Switch>
        </div>
      </div>
  );
};

export default DashboardSlide;