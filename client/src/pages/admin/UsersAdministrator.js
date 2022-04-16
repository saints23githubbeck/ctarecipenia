import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { adminUser } from "../../components/admin/data";
import ReactPaginate from "react-paginate";
import * as BiIcons from "react-icons/bi";

const PER_PAGE = 10;
const URL = { adminUser };
const UsersAdministrator = () => {
  const navigate = useNavigate();
  const [addRecord, setAddRecord] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  const status = (status) => {
    switch (status) {
      case "Active":
        return "green";
        break;
      case "Inactive":
        return "red";
        break;
      default:
        return "grey";
    }
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
      .then((adminUser) => {
        setData(adminUser);
      });
  }

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;

  const currentPageData = adminUser
    .slice(offset, offset + PER_PAGE)
    .map((adminUser, index) => (
      <tr key={index} className="">
        <td className="tdata">
          <img
            src={adminUser.image}
            alt={adminUser.username}
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "20px",
            }}
          />{" "}
          {adminUser.username}
        </td>
        <td className="tdata">{adminUser.usergroup}</td>
        <td className="tdata">
          <p
            style={{
              backgroundColor: status(adminUser.status),
              color: "#fff",
              padding: "8px",
              margin: "5px",
            }}
          >
            {adminUser.status}
          </p>
        </td>
        <td className="tdata">{adminUser.date}</td>
        <td className="tdata">{adminUser.view}</td>
        <td className="tdata buttonEdit">
          <button
            className="detailsButton"
            onClick={() => navigate("/admin/administrator/edit", { state: adminUser })}
            style={{ backgroundColor: "orange" }}
          >
            Edit
          </button>
          <button className="detailsButton" style={{ backgroundColor: "red" }}>
            Delete
          </button>
        </td>
      </tr>
    ));

  const pageCount = Math.ceil(adminUser.length / PER_PAGE);

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
        <h3>Users</h3>
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
            <th className="thead ">Username</th>
            <th className="thead">Usergroup</th>
            <th className="thead">Status</th>
            <th className="thead">Created</th>
            <th className="thead">Profile Views</th>
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

export default UsersAdministrator;
