import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { blog } from "../../components/admin/data";
import ReactPaginate from "react-paginate";
import * as BiIcons from "react-icons/bi";
import AdminModal from "../../components/modals/AdminModal";

const PER_PAGE = 10;
const URL = { blog };

const BlogsAdmin = () => {
  const navigate = useNavigate();
  const [addBlog, setAddBlog] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [blogList, setBlogList] = useState(blog)

  const handleDelete = (e) => {
    const filtered = blogList.filter((blog) => blog !== e);
    setBlogList(filtered);
  };
  

  const handleOpen = (item) => {
    setShowModal(true);
    setAddBlog(item);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(URL)
      .then((res) => res.json())
      .then((blog) => {
        setData(blog);
      });
  }

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;

  const currentPageData = blogList
    .slice(offset, offset + PER_PAGE)
    .map((blog) => (
      <tr key={blog.id} className="">
        <td className="tdata">{blog.topic}</td>
        <td className="tdata">{blog.visit}</td>
        <td className="tdata buttonEdit">
        <button
              className="detailsButton"
              onClick={() => navigate("/admin/blog/edit", { state: blog  })}
              style={{ backgroundColor: "orange" }}
            >
              Edit
            </button>
          <button className="detailsButton" style={{ backgroundColor: "red" }}  onClick={(e) => handleDelete(blog)}>
            Delete
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
            height: "20px",
            borderRadius: "5px",
          }}
        >
          <p>
            {" "}
            <FaPlus /> Add New Record
          </p>
        </div>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table className="">
          <tr>
            <th className="thead ">Topic</th>
            <th className="thead">Visit</th>
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
      <AdminModal
    open={showModal}
    onclose={handleClose}
    addBlog={addBlog}
    />
    </div>
  );
};

export default BlogsAdmin;
