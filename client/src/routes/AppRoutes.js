import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import LandingPage from "../pages/LandingPage";
// import { NoAuthRoute } from "./NoAuthRoute";
// import { AuthRoute } from "./AuthRoute";
import UserDashboard from "../pages/UserDashboard";
import Profile from "../pages/Profile";
import Recipes from "../pages/Recipes";
import ContactUs from "../pages/ContactUs";
import Blogs from "../pages/Blogs";
import AppLayout from '../layout/AppLayout'
import LoginAdmin from "../pages/admin/LoginAdmin";
import AdminLayout from "../layout/AdminLayout";

import DashboardAdmin from "../pages/admin/DashboardAdmin";
import SettingsAdmin from "../pages/admin/SettingsAdmin";
import SliderAdmin from "../pages/admin/SliderAdmin";
import UsersNormal from "../pages/admin/UsersNormal";
import UsersAdministrator from "../pages/admin/UsersAdministrator";
import NewsletterAdmin from "../pages/admin/NewsletterAdmin";
import AdvertisementAdmin from "../pages/admin/AdvertisementAdmin";
import RecipesAdmin from "../pages/admin/RecipesAdmin";
import BlogsAdmin from "../pages/admin/BlogsAdmin";
import CategoriesAdmin from "../pages/admin/CategoriesAdmin";
import PagesAdmin from "../pages/admin/PagesAdmin";
import Categories from "../pages/Categories";
import AddRecipe from "../pages/AddRecipe";

const AppRoutes = (props) => {
  return (
    <BrowserRouter> 
        <Routes>
            <Route path="/" element={
              <AppLayout landingPage="true">
                <LandingPage/>
              </AppLayout>
            }/>
            <Route path="/user-dashboard" element={
              <AppLayout>
                <UserDashboard />
              </AppLayout>
            }/>
            <Route path="/profile" element={   
              <AppLayout>
                <Profile />
              </AppLayout>
            }/>
            
            <Route path="/recipes" element={ 
              <AppLayout>
                <Recipes />
              </AppLayout>
            }/>

            <Route path="/contact-us" element={   
              <AppLayout>
                <ContactUs/>
              </AppLayout>
            }/>
            <Route path="/addrecipe" element={ 
              <AppLayout>
                <AddRecipe />
              </AppLayout>
            }/>
            <Route path="/categories" element={ 
              <AppLayout>
                <Categories />
              </AppLayout>
            }/>
            <Route path="/blogs" element={
              <AppLayout>
                <Blogs />
              </AppLayout>
            }/> 


            {/* admin routes */}
            <Route path="/admin" element={
                <LoginAdmin />
            }/>  
            <Route path="/admin/dashboard" element={
                <AdminLayout >
                  <DashboardAdmin />
                </AdminLayout>
            }/> 
            <Route path="/admin/settings" element={
                <AdminLayout title="/ Settings">
                  <SettingsAdmin />
                </AdminLayout>
            }/> 

            <Route path="/admin/slider" element={
                <AdminLayout title="/ Slider">
                  <SliderAdmin />
                </AdminLayout>
            }/> 
            <Route path="/admin/administrator" element={
                <AdminLayout title="/ Users Administrator">
                  <UsersAdministrator />
                </AdminLayout>
            }/> 
            
            <Route path="/admin/normalUsers" element={
                <AdminLayout title="/ Users Normal">
                  <UsersNormal />
                </AdminLayout>
            }/> 
            <Route path="/admin/categories" element={
                <AdminLayout title="/ Categories">
                  <CategoriesAdmin />
                </AdminLayout>
            }/> 
            <Route path="/admin/recipes" element={
                <AdminLayout title="/ Recipes">
                  <RecipesAdmin />
                </AdminLayout>
            }/> 
            <Route path="/admin/blog" element={
                <AdminLayout title="/ Blogs">
                  <BlogsAdmin />
                </AdminLayout>
            }/> 
            <Route path="/admin/advertisement" element={
              <AdminLayout title="/ Advertisement">
                <AdvertisementAdmin />
              </AdminLayout>
          }/> 
          <Route path="/admin/newsletter" element={
                <AdminLayout title="/ Newsletter">
                  <NewsletterAdmin />
                </AdminLayout>
            }/> 
            <Route path="/admin/pages" element={
                <AdminLayout title="/ Pages">
                  <PagesAdmin />
                </AdminLayout>
            }/> 
        </Routes> 
    </BrowserRouter>
  );
}

export default AppRoutes;
