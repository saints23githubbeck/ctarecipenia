  import { useNavigate } from "react-router-dom";
  import { FaPlus } from "react-icons/fa";
  import { useEffect, useState } from "react";
  import { page } from "../../components/admin/data";
  import ReactPaginate from "react-paginate";
  import * as BiIcons from "react-icons/bi";
import AdminModal from "../../components/modals/AdminModal";
  
  const PER_PAGE = 15;
  const URL = { page };
  
  const PagesAdmin = () => {
    const navigate = useNavigate();
    const [addPage, setAddPage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState([]);
    const [pageList, setPageList] = useState(page)

  const handleDelete = (e) => {
    const filtered = pageList.filter((page) => page !== e);
    setPageList(filtered);
  };
  
    const handleOpen = (item) => {
      setShowModal(true);
      setAddPage(item);
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
        .then((record) => {
          setData(record);
        });
    }
  
    const handlePageClick = ({ selected: selectedPage }) => {
      setCurrentPage(selectedPage);
    };
  
    const offset = currentPage * PER_PAGE;
  
    const currentPageData = pageList
      .slice(offset, offset + PER_PAGE)
      .map((page) => (
        <tr key={page.id} className="">
          <td className="tdata">{page.title}</td>
          <td className="tdata buttonEdit">
            <button
              className="detailsButton"
              onClick={() => navigate("/admin/page/edit", { state: page })}
              style={{ backgroundColor: "orange" }}
            >
              Edit
            </button>
            <button className="detailsButton" style={{ backgroundColor: "red" }} onClick={(e) => handleDelete(page)}>
              Delete
            </button>
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
    addPage={addPage}
    />
      </div>
    );
  };
  
  export default PagesAdmin;
  