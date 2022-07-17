import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
// import { user } from "../../components/admin/data";
import ReactPaginate from "react-paginate";
import * as BiIcons from "react-icons/bi";
import AdminModal from "../../components/modals/AdminModal";
import {
  getAllSubscribers,
  setUserError,
} from "../../appState/actions/AdminAuthAction";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../api";
import * as actiontypes from "../../appState/actionTypes";
import { Avatar } from "@mui/material";

const PER_PAGE = 10;
// const URL = { user };

const UsersNormal = () => {
  const navigate = useNavigate();
  const { subscribers } = useSelector(state => state.adminProfile);
  const [addUser, setAddUser] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [userList, setUserList] = useState(subscribers);
  const dispatch = useDispatch();

  async function handleDelete(slug) {
    let result = await fetch(`${BASE_URL}/admin/user/:${slug}`, {
      method: "DELETE",
    });
    console.log("deleting normalUser", result);
    result = await result.json();
    dispatch(getAllSubscribers());
  }

  useEffect(() => {
    setUserList(subscribers);
  }, [subscribers]);

  useEffect(() => {
    dispatch(getAllSubscribers());
  }, []);

  const status = (status) => {
    switch (status) {
      case "active":
        return "green";
      case "inactive":
        return "red";
      default:
        return "grey";
    }
  };

  const convertDate = (date) => {
    return new Date(date)?.toDateString();
  };

  const handleOpen = (item) => {
    setShowModal(true);
    setAddUser(item);
  };

  const handleClose = () => {
    setShowModal(false);
    dispatch({
      type: actiontypes.RESET_USER_STATE,
    });
    dispatch(setUserError(""));
  };

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(URL)
      .then((res) => res.json())
      .then((subscribers) => {
        setData(subscribers);
      });
  }

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;

  const currentPageData = userList
  ?.sort(function (a, b) {
    return new Date(b.updatedAt) - new Date(a.updatedAt);
  })
    ?.slice(offset, offset + PER_PAGE)
    .map((subscribers) => (
      <tr key={subscribers.slug} className="">
        <td className="tdata d-flex">
          <Avatar
            src={`data:image/*;base64,${subscribers.image}`}
            alt={subscribers.username}
            sx={{
              width: "30px",
              height: "30px",
              borderRadius: "20px",
            }}
          />{" "}
          {subscribers.username}
        </td>
        <td className="tdata">{subscribers.userGroup}</td>
        <td className="tdata">
          <p
            style={{
              backgroundColor: status(subscribers.status),
              color: "#fff",
              padding: "8px",
              margin: "5px",
            }}
          >
            {subscribers.status}
          </p>
        </td>
        <td className="tdata">{convertDate(subscribers.createdAt)}</td>
        <td className="tdata">{subscribers.view}</td>
        <td className="tdata buttonEdit">
          <button
            className="detailsButton"
            onClick={() => navigate("/admin/normaluser/edit", { state: subscribers })}
            style={{ backgroundColor: "orange" }}
          >
            <BiIcons.BiEdit className="text-white h6" /> Edit
          </button>
          <button
            className="detailsButton"
            style={{ backgroundColor: "red" }}
            onClick={(e) => handleDelete(subscribers.slug)}
          >
            <BiIcons.BiTrash className="text-white h6" /> Delete
          </button>
        </td>
      </tr>
    ));

  const pageCount = Math.ceil(userList?.length / PER_PAGE);

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
          onClick={() => handleOpen("addUser")}
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
            <FaPlus /> Add User
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
      <AdminModal open={showModal} onclose={handleClose} addUser={addUser} />
    </div>
  );
};

export default UsersNormal;
