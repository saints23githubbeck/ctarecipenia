import React, { useEffect, useState } from "react";

import eyeColor from "../assets/images/eyeColor.png";
import clockColor from "../assets/images/clockColor.png";
import calenderColor from "../assets/images/calenderColor.png";

import user from "../assets/images/user.png";
import love from "../assets/images/love.png";
import lock from "../assets/images/lock.png";

import facebook from "../assets/images/fb.png";
import twitter from "../assets/images/tw.png";
import instagram from "../assets/images/ig.png";

import danger from "../assets/images/danger.png";
import mail from "../assets/images/mail.png";
import d from "../assets/images/d.png";

import "../assets/styles/singleBlog.scss";
import blog1 from "../assets/images/blog1.png";
import blog2 from "../assets/images/blog2.png";
import blog3 from "../assets/images/blog3.png";
import blog4 from "../assets/images/blog4.png";
import blog5 from "../assets/images/blog5.png";
import blog6 from "../assets/images/blog6.png";

import latestRecipe1 from "../assets/images/latest-recipe1.png";
import latestRecipe2 from "../assets/images/latest-recipe2.png";
import ownerImage from "../assets/images/latest-recipe-owner-image.png";

import { useParams } from "react-router-dom";

import smile from "../assets/images/smileEmoji.png";
import frown from "../assets/images/frownEmoji.png";
import thumb from "../assets/images/thumbEmoji.png";

const SingleBlog = () => {
  const single = [
    {
      id: "1",
      img: blog1,
      title: "Make your own chicken",
      view: "500",
      lastUpdate: "Feb 07,2022",
      created: "Feb 05,  2022",
      text: "This is a chicken Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt amet, porta morbi mauris. Turpis eget in sce.",
    },
    {
      id: "2",
      img: blog2,
      title: "Make your own Ice Cream",
      view: "500",
      lastUpdate: "Feb 07,2022",
      created: "Feb 05,  2022",
      text: "This is a chicken Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt amet, porta morbi mauris. Turpis eget in sce. This is a chicken Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt amet, porta morbi mauris. Turpis eget in sce.",
    },
    {
      id: "3",
      img: blog3,
      title: "Make your own chicken",
      view: "500",
      lastUpdate: "Feb 07,2022",
      created: "Feb 05,  2022",
      text: "This is a chicken Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt amet, porta morbi mauris. Turpis eget in sce. This is a chicken Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt amet, porta morbi mauris. Turpis eget in sce.",
    },
    {
      id: "4",
      img: blog4,
      title: "Make your own Shrimp",
      view: "500",
      lastUpdate: "Feb 07,2022",
      created: "Feb 05,  2022",
      text: "This is a chicken Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt amet, porta morbi mauris. Turpis eget in sce. This is a chicken Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt amet, porta morbi mauris. Turpis eget in sce.",
    },
    {
      id: "5",
      img: blog5,
      title: "Make your own Soup",
      view: "500",
      lastUpdate: "Feb 07,2022",
      created: "Feb 05,  2022",
      text: "This is a chicken Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt amet, porta morbi mauris. Turpis eget in sce. This is a chicken Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt amet, porta morbi mauris. Turpis eget in sce.",
    },
    {
      id: "6",
      img: blog6,
      title: "Make your own Shrimp Sauce",
      view: "500",
      lastUpdate: "Feb 07,2022",
      created: "Feb 05,  2022",
      text: "This is a chicken Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt amet, porta morbi mauris. Turpis eget in sce. This is a chicken Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt amet, porta morbi mauris. Turpis eget in sce.",
    },
  ];

  const latestData = [
    {
      title: "Chicken",
      recipeImage: latestRecipe1,
      ownerImage: ownerImage,
      ownerName: "Bambam",
    },
    {
      title: "Chicken",
      recipeImage: latestRecipe2,
      ownerImage: ownerImage,
      ownerName: "Bambam",
    },{
      title: "Chicken",
      recipeImage: latestRecipe2,
      ownerImage: ownerImage,
      ownerName: "Bambam",
    }
  ];

  const [data, setData] = useState([{}]);

  const { id } = useParams();

  useEffect(() => {
    const filtered = single.filter((card) => card.id === id);
    setData(filtered);
    console.log(data, "ata");
  }, []);

  const [{ title, view, lastUpdate, created, img, text }] = data;

  return (
    <section className="single-blog">
       <div className="sub-nav">
        <div className="flex wrapper">
          <h1>{title}</h1>
          <ul className="list flex">
            <li>Home</li>
            <li>Blogs</li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
      <div className="wrapper">
        <div className="max-width">
          <div className="single">
            <div className="single-item">
              <div className="text">
                <h3>{title}</h3>
                <div className="info flex">
                  <div className="view flex">
                    <img src={eyeColor} alt="" /> <span>{view}</span>
                  </div>
                  <div className="clock flex">
                    <img src={clockColor} alt="" />
                    <span>Last Update : {lastUpdate}</span>
                  </div>
                  <div className="calender flex">
                    <img src={calenderColor} alt="" />
                    <span>Created : {created}</span>
                  </div>
                </div>
              </div>
              <div className="img">
                <img src={img} alt="" />
              </div>
              <p>{text}</p>
            </div>
          </div>
        </div>
        <h3 className="left-h3">You may also like</h3>
        <div className="card_wrapper">
          {latestData.map((recipe, index) => (
            <div key={index} className="card">
              <div>
                <img src={recipe.recipeImage} alt="recipeImage" />
              </div>
              <h3>{recipe.title}</h3>
              <div>
                <img src={recipe.ownerImage} alt={recipe.ownerName} />
                <span>
                  <strong>{recipe.ownerName}</strong>
                </span>
              </div>
              <div className="rating" style={{ textAlign: "center" }}>
                <span className="rated">&#9733;</span>
                <span className="rated">&#9733;</span>
                <span className="rated">&#9733;</span>
                <span>&#9733;</span>
              </div>
            </div>
          ))}
        </div>
        <div className="max-width">
          <div className="center">
            <h1>What do you think?</h1>
          </div>
          <div className="left">
            <h1>23 Responses</h1>
          </div>
          <div className="icons flex">
            <img src={frown} alt="" />
            <img src={thumb} alt="" />
            <img src={smile} alt="" />
          </div>

          <div className="comment flex">
            <p>0 Comments</p>
            <p>Bambam</p>
            <p>
              <img src={lock} alt="" /> Disqus’Privacy Policy
            </p>
          </div>
          <div className="favorite flex">
            <img src={love} alt="" />
            <p>Favorite</p>
            <span className="number">1</span>
          </div>
          <form>
            <div className="log-in flex">
              <div className="user">
                <img src={user} alt="" />
              </div>
              <div className="input">
                <input type="text" placeholder="Start the discussion..." />
                <p>LOG IN WITH</p>
              </div>
            </div>
            <div className="sign-up flex">
              <div className="social flex">
                <div className="fb">
                  <img src={facebook} alt="" />
                </div>
                <div className="tw">
                  <img src={twitter} alt="" />
                </div>
                <div className="ig">
                  <img src={instagram} alt="" />
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
              <img src={mail} alt="" /> <span>Subscribe</span>
            </div>
            <div className="d">
              <span className="d-img">D</span>
              <span>Add Disqus to your site</span>
            </div>
            <div className="danger">
              <img src={danger} alt="" /> <span>Do Not Sell My Data</span>
            </div>
          </div>
          <h1 className="right">DISQUS</h1>
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;
