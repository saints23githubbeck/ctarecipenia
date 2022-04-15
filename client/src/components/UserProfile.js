import "../assets/styles/userDashBoard.scss";

import profilecircle from "../assets/images/userdashboardprofilecircle.png";


import { Link } from "react-router-dom";

const UserProfile = ({
  first,
  secound,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  exist,

  firstImg,
  secoundImg,
  thirdImg,
  fourthImg,
  fifthImg,
  sixthImg,
  seventhImg
}) => {
  return (
    <div className="user-menu flex">
      <div className="profile flex">
        <div className="img">
          <img src={profilecircle} alt="" />
        </div>
        <div className="name">
          <h5>Bambam</h5>
          <h5>User</h5>
        </div>
      </div>
      <div className="menu-list flex">
        <div className="flex">
          <img src={firstImg} alt="" />{" "}
          <Link to="/user-dashboard">
            <h5>{first}</h5>
          </Link>
        </div>
        <div className="flex">
          <img src={secoundImg} alt="" />{" "}
          <Link to="/profile">
            <h5>{secound}</h5>
          </Link>
        </div>
        <div className="flex">
          <img src={thirdImg} alt="" />
          <Link to="/addrecipe">
            <h5>{third}</h5>
          </Link>
        </div>
        <div className="flex">
          <img src={fourthImg} alt="" />
          <Link to="">
            <h5>{fourth}</h5>
          </Link>
        </div>

        {exist ? (
          <div className="flex">
            <img src={fifthImg} alt="" />
            <Link to="">
              <h5>{fifth}</h5>
            </Link>
          </div>
        ) : (
          ""
        )}
        {exist ? (
          <div className="flex">
            <img src={sixthImg} alt="" />
            <Link to="">
              <h5>{sixth}</h5>
            </Link>
          </div>
        ) : (
          ""
        )}
        {exist ? (
          <div className="flex">
            <img src={seventhImg} alt="" />
            <Link to="">
              <h5>{seventh}</h5>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default UserProfile;
