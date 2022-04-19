import blog1 from "../assets/images/blog1.svg";
import blog2 from "../assets/images/blog2.svg";
import blog3 from "../assets/images/blog3.svg";
import blog4 from "../assets/images/blog4.svg";
import blog5 from "../assets/images/blog5.svg";
import blog6 from "../assets/images/blog6.svg";


import eyeIcon from "../assets/images/eyeIcon.svg";
import clockIcon from "../assets/images/clockIcon.svg";
import calenderIcon from "../assets/images/calenderIcon.svg";

import Blogs from "../components/landingPage/Blogs";

import "../assets/styles/blog.scss";
import { Link } from "react-router-dom";
import StayWithUs from "../components/StayWithUs";

const BlogsPage = () => {
  const blogList = [
    {
      id: 1,
      img: blog1,
      title: "Make your own chicken",
      view: "500",
      lastUpdate: "Feb 07,2022",
      created: "Feb 05,  2022",
      text: "You should follow this steps carefully and be sure doing it the right way.",
      button: "READ MORE",
    },
    {
      id: 2,
      img: blog2,
      title: "Make your own Ice Cream",
      view: "500",
      lastUpdate: "Feb 07,2022",
      created: "Feb 05,  2022",
      text: "You should follow this steps carefully and be sure doing it the right way.",
      button: "READ MORE",
    },
    {
      id: 3,
      img: blog3,
      title: "Make your own chicken",
      view: "500",
      lastUpdate: "Feb 07,2022",
      created: "Feb 05,  2022",
      text: "You should follow this steps carefully and be sure doing it the right way.",
      button: "READ MORE",
    },
    {
      id: 4,
      img: blog4,
      title: "Make your own Shrimp",
      view: "500",
      lastUpdate: "Feb 07,2022",
      created: "Feb 05,  2022",
      text: "You should follow this steps carefully and be sure doing it the right way.",
      button: "READ MORE",
    },
    {
      id: 5,
      img: blog5,
      title: "Make your own Soup",
      view: "500",
      lastUpdate: "Feb 07,2022",
      created: "Feb 05,  2022",
      text: "You should follow this steps carefully and be sure doing it the right way.",
      button: "READ MORE",
    },
    {
      id: 6,
      img: blog6,
      title: "Make your own Shrimp Sauce",
      view: "500",
      lastUpdate: "Feb 07,2022",
      created: "Feb 05,  2022",
      text: "You should follow this steps carefully and be sure doing it the right way.",
      button: "READ MORE",
    },
  ];
  return (
    <section className="blog-page">
      <div className="sub-nav">
        <div className="flex wrapper">
          <h1>Blogs</h1>
          <ul className="list">
            <li>Home</li>
            <li>Blogs</li>
          </ul>
        </div>
      </div>
      <div className="wrapper blog-wrap flex">
        <div className="left">
          <div className="blog-lists flex">
            {blogList.map((blog) => (
              <div className="blog-list flex" key={blog.id}>
                <div className="img">
                  <img src={blog.img} alt="" />
                </div>
                <div className="text">
                  <h3>{blog.title}</h3>
                  <div className="info flex">
                    <div className="view flex">
                      <img src={eyeIcon} alt="" /> <span>{blog.view}</span>
                    </div>
                    <div className="clock flex">
                      <img src={clockIcon} alt="" />
                      <span>Last Update : {blog.lastUpdate}</span>
                    </div>
                    <div className="calender flex">
                      <img src={calenderIcon} alt="" />
                      <span>Created : {blog.created}</span>
                    </div>
                  </div>
                  <p>{blog.text}</p>
                  <Link to={`/blogs/${blog.id}`}>
                    <button>{blog.button}</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination">
            <div className="numbers flex">
              <div className="number">
                <h3>1</h3>
              </div>
              <div className="number">
                <h3>2</h3>
              </div>
              <div className="number">
                <h3>3</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Blogs />
        </div>
      </div>
      <StayWithUs/>
    </section>
  );
};

export default BlogsPage;
