import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
// import { page } from "../../components/admin/data";
import ReactPaginate from "react-paginate";
import * as BiIcons from "react-icons/bi";
import AdminModal from "../../components/modals/AdminModal";
import { BASE_URL } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { getAllPage, setPageError } from "../../appState/actions/pageAction";
import * as actiontypes from "../../appState/actionTypes";

const PER_PAGE = 15;
// const URL = { page };

const PagesAdmin = () => {
  const navigate = useNavigate();
  const { pages } = useSelector((state) => state.page);
  const [addPage, setAddPage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [pageList, setPageList] = useState(pages);
  const dispatch = useDispatch();

  async function handleDelete(slug) {
    let token =  localStorage.getItem("auth");
  if (token) {
    let result = await fetch(`${BASE_URL}/admin/page/${slug}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    result = await result.json();
    dispatch(getAllPage());
  }
}

  useEffect(() => {
    setPageList(pages);
  }, [pages]);

  useEffect(() => {
    dispatch(getAllPage());
  }, []);

  const convertDate = (date) => {
    return new Date(date)?.toDateString();
  };

  // const handleDelete = (e) => {
  //   const filtered = pageList.filter((page) => page !== e);
  //   setPageList(filtered);
  // };

  const handleOpen = (item) => {
    setShowModal(true);
    setAddPage(item);
  };

  const handleClose = () => {
    setShowModal(false);
    dispatch({
      type: actiontypes.RESET_PAGE_STATE,
    });
    dispatch(setPageError(""));
  };

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(URL)
      .then((res) => res.json())
      .then((pages) => {
        setData(pages);
      });
  }

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;

  const currentPageData = pageList
    ?.sort(function (a, b) {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    })
    .slice(offset, offset + PER_PAGE)
    .map((pages) => (
      <tr key={pages.slug} className="">
        <td className="tdata">{pages.title}</td>
        <td className="tdata">{pages.permalink}</td>
        <td className="tdata buttonEdit">
          <button
            className="detailsButton"
            onClick={() => navigate("/admin/page/edit", { state: pages })}
            style={{ backgroundColor: "orange" }}
          >
            <BiIcons.BiEdit className="text-white h6" /> Edit
          </button>
          <button
            className="detailsButton"
            style={{ backgroundColor: "red" }}
            onClick={(e) => handleDelete(pages.slug)}
          >
            <BiIcons.BiTrash className="text-white h6" /> Delete
          </button>{" "}
        </td>
      </tr>
    ));

  const pageCount = Math.ceil(pageList.length / PER_PAGE);

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
          onClick={() => handleOpen("addPage")}
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
            <FaPlus /> Add Page
          </p>
        </div>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table className="">
          <tr>
            <th className="thead ">Title</th>
            <th className="thead ">Permalink</th>
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
      <AdminModal open={showModal} onclose={handleClose} addPage={addPage} />
    </div>
  );
};

export default PagesAdmin;
