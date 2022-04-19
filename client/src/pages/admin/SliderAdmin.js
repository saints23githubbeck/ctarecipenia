import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { record } from "../../components/admin/data";
import ReactPaginate from "react-paginate";
import * as BiIcons from "react-icons/bi";

const PER_PAGE = 10;
const URL = { record };

const SliderAdmin = () => {
  const navigate = useNavigate();
  const [addRecord, setAddRecord] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [recordList, setRecordList] = useState(record)

  const handleDelete = (e) => {
    const filtered = recordList.filter((record) => record !== e);
    setRecordList(filtered);
  };

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
      .then((record) => {
        setData(record);
      });
  }

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;

  const currentPageData = recordList
    .slice(offset, offset + PER_PAGE)
    .map((record) => (
      <tr key={record.id} className="">
        <td className="tdata">{record.title}</td>
        <td className="tdata"><img src={record.image} alt={record.image} style={{width: "50px", height:"20px", borderRadius:"150px 150px 40px 40px"}} /></td>
        <td className="tdata buttonEdit">
          <button
            className="detailsButton"
            onClick={() => navigate("/admin/slider/edit", { state: record })}
            style={{ backgroundColor: "orange" }}
          >
            Edit
          </button>
          <button className="detailsButton" style={{ backgroundColor: "red" }}  onClick={(e) => handleDelete(record)}>
            Delete
          </button>
        </td>
      </tr>
    ));

  const pageCount = Math.ceil(record.length / PER_PAGE);

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
        <h3>Slider</h3>
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
            <th className="thead ">Title</th>
            <th className="thead">Image</th>
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

export default SliderAdmin;
