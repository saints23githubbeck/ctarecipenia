import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { newsletter } from "../../components/admin/data";
import ReactPaginate from "react-paginate";
import * as BiIcons from "react-icons/bi";

const PER_PAGE = 10;
const URL = { newsletter };

const NewsletterAdmin = () => {
  const navigate = useNavigate();
  const [addRecord, setAddRecord] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  const handleOpen = (item) => {
    setShowModal(true);
    setAddRecord(item);
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
      .then((newsletter) => {
        setData(newsletter);
      });
  }

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;

  const currentPageData = newsletter
    .slice(offset, offset + PER_PAGE)
    .map((newsletter, index) => (
      <tr key={index} className="">
        <td className="tdata">{newsletter.ti}</td>
        <td className="tdata">{newsletter.created}</td>
        <td className="tdata buttonEdit">
          <button className="detailsButton" style={{ backgroundColor: "red" }}>
            Delete
          </button>
        </td>
      </tr>
    ));

  const pageCount = Math.ceil(newsletter.length / PER_PAGE);

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
        <h3>Newsletter</h3>
        <div
          onClick={() => handleOpen("addRecord")}
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
            <th className="thead ">Email</th>
            <th className="thead">Created</th>
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
    </div>
  );
};

export default NewsletterAdmin;
