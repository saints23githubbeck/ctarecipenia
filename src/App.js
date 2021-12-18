
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/css/global.css';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import Communities from './Components/CommunityContainer/Communities/Communities';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import Catgories from './Components/Categories/Catgories';
import ResetLink from './Components/ResetLink/ResetLink.js';
import Profile from './Components/Recipes/Profile.js';
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
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/about-us">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/contact">
            <ContactUs></ContactUs>

          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
