import "../assets/styles/userDashBoard.scss";

import profilerec from "../assets/images/userdashboardprofileRec.png";
import UserProfile from "../components/UserProfile";

import dashboard from "../assets/images/dashboard.png";
import user from "../assets/images/user.png";
import recipe from "../assets/images/recipe.png";
import logout from "../assets/images/logout.png";

const UserDashboard = () => {
  return (
    <section className="user-dash-board">
      <div className="sub-nav">
        <div className="flex wrapper">
          <h1>Dashboard - Bambam</h1>
          <ul className="list">
          <li>Home</li>
            <li>Dashboard</li>
            <li>Bambam</li>
          </ul>
        </div>
      </div>
      <div className="wrapper">
        <UserProfile 
        first='Dashboard'
        secound = 'My Profile'
        third = 'My Recipes'
        fourth='Logout'

        firstImg= {dashboard}
        secoundImg= {user}
        thirdImg = {recipe}
        fourthImg={logout}
        />
        <div className="form">
          <form>
            <h2>Profile</h2>
            <div className="inputs flex">
              <div className="left flex">
                <div className="input">
                  <h5>First Name</h5>
                  <input type="text" placeholder="Ayo" />
                </div>
                <div className="input">
                  <h5>Username</h5>
                  <input type="text" placeholder="Bambam" />
                </div>
                <div className="input">
                  <h5>Country</h5>
                  <input type="text" placeholder="Nigeria" />
                </div>
              </div>
              <div className="right flex">
                <div className="input">
                  <h5>Last Name</h5>
                  <input type="text" placeholder="Ayo" />
                </div>
                <div className="input">
                  <h5>Email</h5>
                  <input type="text" placeholder="Ayo@gmail.com" />
                </div>
                <div className="input">
                  <h5>Password</h5>
                  <input type="text" placeholder="******" />
                </div>
              </div>
            </div>
            <div className="textarea">
              <h5>Description</h5>
              <textarea placeholder=""></textarea>
            </div>
            <h5 className="center">Gender</h5>
            <div className="checkbox">
              <div className="check flex">
                <input type="radio" name="Female" id="Female" />
                <h5>Female</h5>
              </div>
              <div className="check flex">
                <input type="radio" name="Male" id="Male" />
                <h5>Male</h5>
              </div>
              <div className="upload-sec">
                <div className="upload flex">
                  <div className="upload-div">
                    <h5>UPLOAD IMAGE</h5>
                  </div>
                  <div className="upload-img">
                    <img src={profilerec} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="upload-btn">
              <button>SAVE</button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
