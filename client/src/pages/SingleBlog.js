import React, { useEffect, useState } from "react";


import "../assets/styles/singleBlog.scss";

import eyeColorIcon from "../assets/images/viewColouredIcon.svg";
import clockColorIcon from "../assets/images/clockColouredIcon.svg";
import calenderColorIcon from "../assets/images/calenderColouredColor.svg";


import blog1 from "../assets/images/blog1.svg";
import blog2 from "../assets/images/blog2.svg";
import blog3 from "../assets/images/blog3.svg";
import blog4 from "../assets/images/blog4.svg";
import blog5 from "../assets/images/blog5.svg";
import blog6 from "../assets/images/blog6.svg";


import { useParams } from "react-router-dom";

import Card from "../components/Card";

import latestRecipe1 from "../assets/images/latest-recipe1.png";
import latestRecipe2 from "../assets/images/latest-recipe2.png";
import ownerImage from "../assets/images/latest-recipe-owner-image.png";

import Review from './../components/Review';


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
                    <img src={eyeColorIcon} alt="" /> <span>{view}</span>
                  </div>
                  <div className="clock flex">
                    <img src={clockColorIcon} alt="" />
                    <span>Last Update : {lastUpdate}</span>
                  </div>
                  <div className="calender flex">
                    <img src={calenderColorIcon} alt="" />
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
        <Card latestData={latestData}/>
        
        <Review/>

      </div>
    </section>
  );
};

export default SingleBlog;
