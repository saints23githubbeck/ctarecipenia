
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/css/global.css";
import Home from "./Components/Home/Home";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import Communities from "./Components/CommunityContainer/Communities/Communities";
import LoginRegister from "./Components/users/LoginRegister";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Catgories from "./Components/Categories/Catgories";
import Dashboard from "./Components/Dashboard/Dashboard";
import ResetLink from './Components/ResetLink/ResetLink.js';
import Profile from './Components/Recipes/Profile.js';
import Comments from "./Components/Comments/Comments.js";
import AddAdvertisement from "./Components/Dashboard/AddAdvertisement/AddAdvertisement.jsx"
import SubscribersEmail from "./Components/Dashboard/EmailSubscribers/SubscribersEmail.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/categories">
            <Catgories />
          </Route>
          <Route exact path="/community">
            <Communities />
          </Route>

          <Route exact path="/resetlink">
            <ResetLink />
          </Route>
          <Route exact path="/login">
          </Route>


          <Route exact path="/resetlink">
            <ResetLink />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/subscribersemail">
            <SubscribersEmail />
          </Route>
          <Route exact path="/addAdvertisement">
            <AddAdvertisement />
          </Route>
          
          <Route exact path="/login">
            <LoginRegister></LoginRegister>
          </Route>

          <Route exact path="/about-us">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/contact">
            <ContactUs></ContactUs>



          </Route>
          <Route exact path="/about-us">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/contact">
            <ContactUs></ContactUs>

          </Route>
          {/* <Route exact path="/dashboard">
            <Dashboard></Dashboard>
          </Route> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
