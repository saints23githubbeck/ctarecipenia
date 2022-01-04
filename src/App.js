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
import ResetLink from "./Components/ResetLink/ResetLink";
import Profile from "./Components/Recipes/Profile";
import Comments from "./Components/Comments/Comments";
import AddAdvertisement from "./Components/Dashboard/AddAdvertisement/AddAdvertisement";
import SubscribersEmail from "./Components/Dashboard/EmailSubscribers/SubscribersEmail";
import AboutForm from "./Components/Dashboard/AboutForm/AboutForm";
import CategoryList from './Components/Dashboard/CategoryList/CategoryList'
import AddBlog from './Components/Dashboard/AddBlog/AddBlog';
import BlogList from './Components/Dashboard/BlogList/BlogList';
import CommentList from './Components/Dashboard/CommentList/CommentList';
import addRecipi from "./Components/AddRecipe/AddRecipe"

import DashboardSlide from './Components/DashboardSlide/DashboardSlide';

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
          <Route exact path="/Categorylist">
            <CategoryList />
          </Route>
          <Route exact path="/Addblog">
            <AddBlog />
          </Route>
          <Route exact path="/Bloglist">
            <BlogList />
          </Route>
          <Route exact path="/Commentlist">
            <CommentList />
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
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/subscribersemail">
            <SubscribersEmail />
          </Route>
          <Route exact path="/about-form">
            <AboutForm />
          </Route>
          <Route exact path="/comments">
            <Comments />
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

          <Route  path="/dashboard">
            <DashboardSlide></DashboardSlide>
        
          </Route>

          <Route exact path="/about-us">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/add-recipi">
            <addRecipi />
          </Route>
          <Route exact path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route exact path="/dashboard">
            <Dashboard></Dashboard>
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
