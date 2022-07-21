import { useNavigate } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
// import { categories } from "../../components/admin/data";
import ReactPaginate from "react-paginate";
import * as BiIcons from "react-icons/bi";
import AdminModal from "../../components/modals/AdminModal";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategories,
  setCategoryError,
} from "../../appState/actions/categoryAction";
import * as actiontypes from "../../appState/actionTypes";
import { BASE_URL } from "../../api";

const PER_PAGE = 15;
// const URL = { categories };

const CategoriesAdmin = () => {
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state?.category);
  const [addCategory, setAddCategory] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [categoriesList, setCategoriesList] = useState(categories);
  const dispatch = useDispatch();


  async function handleDelete(slug) {
    let token = localStorage.getItem("auth");
    if (token) {
      let result = await fetch(`${BASE_URL}/admin/category/${slug}`, {
        method: "DELETE",
        headers: {
        Authorization: `Bearer ${token}`,
      },
      });
    console.log("DELETE", slug , result)
      result = await result.json();
      dispatch(getAllCategories());
    }
  }

  useEffect(() => {
    setCategoriesList(categories);
  }, [categories]);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const handleOpen = (item) => {
    setShowModal(true);
    setAddCategory(item);
  };

  const handleClose = () => {
    setShowModal(false);
    dispatch({
      type: actiontypes.RESET_CATEGORY_STATE,
    });
    dispatch(setCategoryError(""));
  };

  

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(URL)
      .then((res) => res.json())
      .then((record) => {
        setData(record);
      });
  }

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;

  const currentPageData = categoriesList
    ?.sort(function (a, b) {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    })
    .slice(offset, offset + PER_PAGE)
    .map((categories) => (
      <tr key={categories.id} className="">
        <td className="tdata">
          {categories.icon} {categories.name}
        </td>
        <td className="tdata">{categories.title}</td>
        <td className="tdata buttonEdit">
          {/* <button
            className="detailsButton"
            onClick={() =>
              navigate("/admin/categories/edit", { state: categories })
            }
            style={{ backgroundColor: "orange" }}
          >
            <BiEdit className="text-white h6" /> Edit
          </button>{" "} */}
          <button
            className="detailsButton"
            style={{ backgroundColor: "red" }}
            onClick={(e) => handleDelete(categories.slug)}
          >
            <BiIcons.BiTrash className="text-white h6" /> Delete
          </button>
        </td>
      </tr>
    ));

  const pageCount = Math.ceil(categoriesList.length / PER_PAGE);

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
        <h3>Categories</h3>
        <div
          onClick={() => handleOpen("addCategory")}
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
            <FaPlus /> Add Category
          </p>
        </div>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table className="">
          <tr>
            <th className="thead ">Category</th>
            <th className="thead ">Title</th>
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
        addCategory={addCategory}
      />
    </div>
  );
};

export default CategoriesAdmin;
