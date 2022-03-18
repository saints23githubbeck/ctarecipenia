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
import ContactUs from "../pages/ContactUs";
import Recipes from "../pages/Recipes";
import Blogs from "../pages/Blogs";
import AppLayout from '../layout/AppLayout'


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
            <Route path="/contact-us" element={   
              <AppLayout>
                <ContactUs />
              </AppLayout>
            }/>
            <Route path="/recipes" element={ 
              <AppLayout>
                <Recipes />
              </AppLayout>
            }/>
            <Route path="/blogs" element={
              <AppLayout>
                <Blogs />
              </AppLayout>
            }/>
            
        </Routes> 
    </BrowserRouter>
  );
}

export default AppRoutes;
