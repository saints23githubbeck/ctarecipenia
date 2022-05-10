import {AiFillEye, AiOutlineClockCircle, AiOutlineCalendar} from "react-icons/ai";
import Blogs from "../components/landingPage/Blogs";
import "../assets/styles/blog.scss";
import { Link } from "react-router-dom";
import StayWithUs from "../components/StayWithUs";

const BlogsPage = () => {
  const blogList = [
    {
      id: 1,
      img: "https://media.istockphoto.com/photos/brazilian-fish-stew-moqueca-picture-id1320857678?b=1&k=20&m=1320857678&s=170667a&w=0&h=vCOmZnpA2SVhaypcER4WrhfLna_JpmhL0ldC_OTHd58=",
      title: "Make your own chicken",
      view: "500",
      lastUpdate: "Feb 07,2022",
      created: "Feb 05,  2022",
      text: "You should follow this steps carefully and be sure doing it the right way.",
      button: "READ MORE",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlY2lwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Make your own Ice Cream",
      view: "500",
      lastUpdate: "Feb 07,2022",
      created: "Feb 05,  2022",
      text: "You should follow this steps carefully and be sure doing it the right way.",
      button: "READ MORE",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1627907228175-2bf846a303b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJlY2lwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Make your own chicken",
      view: "500",
      lastUpdate: "Feb 07,2022",
      created: "Feb 05,  2022",
      text: "You should follow this steps carefully and be sure doing it the right way.",
      button: "READ MORE",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1540660290370-8aa90e451e8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlY2lwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Make your own Shrimp",
      view: "500",
      lastUpdate: "Feb 07,2022",
      created: "Feb 05,  2022",
      text: "You should follow this steps carefully and be sure doing it the right way.",
      button: "READ MORE",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlY2lwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Make your own Soup",
      view: "500",
      lastUpdate: "Feb 07,2022",
      created: "Feb 05,  2022",
      text: "You should follow this steps carefully and be sure doing it the right way.",
      button: "READ MORE",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1623691752472-a6d33855e5de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJlY2lwZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
                      <AiFillEye alt="" /> <span>{blog.view}</span>
                    </div>
                    <div className="clock flex">
                      <AiOutlineClockCircle alt="" />
                      <span>Last Update : {blog.lastUpdate}</span>
                    </div>
                    <div className="calender flex">
                      <AiOutlineCalendar  alt="" />
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
