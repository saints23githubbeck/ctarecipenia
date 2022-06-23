import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../../appState/actions/blogAction";

const Blogs = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blog);

  // const blogs = [
  //   { title: "Make your own bread" },
  //   { title: "How to decorate cookies" },
  //   { title: "How to decorate cookies" },
  //   { title: "How to make sushi" },
  //   { title: "How to decorate cookies" },
  //   { title: "How to decorate cookies" },
  //   { title: "Make a party" },
  //   { title: "How to be healthy" },
  //   { title: "How to make cup cake" },
  // ];

  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);

  return (
    <div className="blogs">
      <h3>Blogs</h3>
      <div>
        {blogs
          ?.sort(function (a, b) {
            return new Date(b.updatedAt) - new Date(a.updatedAt);
        })
          .map((blog, index) => (
            <p key={index}>{blog.title}</p>
          ))}
      </div>
    </div>
  );
};

export default Blogs;
