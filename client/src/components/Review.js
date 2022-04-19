import React from "react";

import "../assets/styles/singleBlog.scss";

import userIcon from "../assets/images/userIcon.svg";
import loveIcon from "../assets/images/loveIcon.svg";
import lockIcon from "../assets/images/lockIcon.svg";

import facebookIcon from "../assets/images/fbIcon.svg";
import twitterIcon from "../assets/images/twIcon.svg";
import instagramIcon from "../assets/images/igIcon.svg";

import dangerIcon from "../assets/images/dangerIcon.svg";
import mailIcon from "../assets/images/mailIcon.svg";

import smileIcon from "../assets/images/smileIcon.svg";
import frownIcon from "../assets/images/frownIcon.svg";
import thumbIcon from "../assets/images/thumbupIcon.svg";

const Review = () => {
  return (
    <div className="review">
      <div className="center">
        <h1>What do you think?</h1>
      </div>
      <div className="left">
        <h1>23 Responses</h1>
      </div>
      <div className="icons flex">
        <img src={frownIcon} alt="" />
        <img src={thumbIcon} alt="" />
        <img src={smileIcon} alt="" />
      </div>

      <div className="comment flex">
        <p>0 Comments</p>
        <p>Bambam</p>
        <p>
          <img src={lockIcon} alt="" /> Disqus’Privacy Policy
        </p>
      </div>
      <div className="favorite flex">
        <img src={loveIcon} alt="" />
        <p>Favorite</p>
        <span className="number">1</span>
      </div>
      <form>
        <div className="log-in flex">
          <div className="user">
            <img src={userIcon} alt="" />
          </div>
          <div className="input">
            <input type="text" placeholder="Start the discussion..." />
            <p>LOG IN WITH</p>
          </div>
        </div>
        <div className="sign-up flex">
          <div className="social flex">
            <div className="fb">
              <img src={facebookIcon} alt="" />
            </div>
            <div className="tw">
              <img src={twitterIcon} alt="" />
            </div>
            <div className="ig">
              <img src={instagramIcon} alt="" />
            </div>
          </div>
          <div className="input">
            <p>OR SIGN UP WITH DISQUS ?</p>
            <input type="text" placeholder="Name" />
          </div>
        </div>
        <div className="center">
          <h1>Be the first to comment.</h1>
        </div>
      </form>
      <div className="prefooter flex">
        <div className="mail">
          <img src={mailIcon} alt="" /> <span>Subscribe</span>
        </div>
        <div className="d">
          <span className="d-img">D</span>
          <span>Add Disqus to your site</span>
        </div>
        <div className="danger">
          <img src={dangerIcon} alt="" /> <span>Do Not Sell My Data</span>
        </div>
      </div>
      <h1 className="right">DISQUS</h1>
    </div>
  );
};

export default Review;
