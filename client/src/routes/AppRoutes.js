import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import LandingPage from "../pages/LandingPage";
import { NoAuthRoute } from "./NoAuthRoute";
import { AuthRoute } from "./AuthRoute";
import UserDashboard from "../pages/UserDashboard";
import Profile from "../pages/Profile";

const AppRoutes = (props) => {
  return (
    <BrowserRouter> 
      <div className="wrapper">
      <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/user-dashboard" element={<UserDashboard />}/>
          <Route path="/profile" element={<Profile />}/>
      </Routes>  
      </div>
    </BrowserRouter>
  );
}

export default AppRoutes;
