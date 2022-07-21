import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { useEffect, useState } from "react";
// import { blog } from "../../components/admin/data";
import ReactPaginate from "react-paginate";
import * as BiIcons from "react-icons/bi";
import AdminModal from "../../components/modals/AdminModal";
import {
  getAllBlogs,
  setBlogError,
} from "../../appState/actions/blogAction";
import * as actiontypes from "../../appState/actionTypes";
import { BASE_URL } from "../../api";

const PER_PAGE = 10;
// const URL = { blog };

const BlogsAdmin = () => {
  const navigate = useNavigate();
  const { blogs } = useSelector((state) => state.blog);
  const [addBlog, setAddBlog] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [blogList, setBlogList] = useState(blogs);
  const dispatch = useDispatch();

  async function handleDelete(slug) {
    let result = await fetch(`${BASE_URL}/admin/blog/${slug}`, {
      method: "DELETE",
    });
    result = await result.json();
    dispatch(getAllBlogs());
  }

  // const handleDelete = (e) => {
  //   const filtered = blogList.filter((blog) => blog !== e);
  //   setBlogList(filtered);
  // };

  useEffect(() => {
    setBlogList(blogs);
  }, [blogs]);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);

  const convertDate = (date) => {
    return new Date(date)?.toDateString();
  };

  const handleOpen = (item) => {
    setShowModal(true);
    setAddBlog(item);
  };

  const handleClose = () => {
    setShowModal(false);
    dispatch({
      type: actiontypes.RESET_BLOG_STATE,
    });
    dispatch(setBlogError(""));
  };


  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(URL)
      .then((res) => res.json())
      .then((blogs) => {
        setData(blogs);
      });
  }

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;

  const currentPageData = blogList
  .sort(function (a, b) {
    return new Date(b.updatedAt) - new Date(a.updatedAt);
  })
    .slice(offset, offset + PER_PAGE)
    .map((blogs) => (
      <tr key={blogs.id} className="">
        <td className="tdata">{blogs.title}</td>
        <td className="tdata">{blogs.visit}</td>
        <td className="tdata">{convertDate(blogs.createdAt)}</td>
        <td className="tdata buttonEdit">
          <button
            className="detailsButton"
            onClick={() => navigate("/admin/blog/edit", { state: blogs })}
            style={{ backgroundColor: "orange" }}
          >
            <BiEdit className="text-white h6" /> Edit
          </button>
          <button
            className="detailsButton"
            style={{ backgroundColor: "red" }}
            onClick={(e) => handleDelete(blogs._id)}
          >
            <BiIcons.BiTrash className="text-white h6" /> Delete
          </button>
        </td>
      </tr>
    ));

  const pageCount = Math.ceil(blogList.length / PER_PAGE);

  return (
    <div className="fill">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          margin: "10px",
          padding: "20px",
          color: "#fff",
        }}
      >
        <h3>Blog</h3>
        <div
          onClick={() => handleOpen("addBlog")}
          style={{
            display: "flex",
            justifyContent: "end",
            backgroundColor: "green",
            fontSize: "16px",
            cursor: "pointer",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <p className="text-white m-2">
            {" "}
            <FaPlus /> Add Blog
          </p>
        </div>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table className="">
          <tr>
            <th className="thead ">Topic</th>
            <th className="thead">Visit</th>
            <th className="thead">Published Date</th>
            <th className="thead">Operations</th>
          </tr>
          {currentPageData}
        </table>
        <ReactPaginate
          previousLabel={<BiIcons.BiLeftArrowAlt />}
          nextLabel={<BiIcons.BiRightArrowAlt />}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pContainer "}
          previousLinkClassName={"previousP"}
          nextLinkClassName={"nextP"}
          disabledClassName={"disableP"}
          activeClassName={"activeP"}
        />
      </div>
      <AdminModal open={showModal} onclose={handleClose} addBlog={addBlog} />
    </div>
  );
};

export default BlogsAdmin;
