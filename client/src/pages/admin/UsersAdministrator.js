import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
// import { adminUser } from "../../components/admin/data";
import ReactPaginate from "react-paginate";
import * as BiIcons from "react-icons/bi";
import AdminModal from "../../components/modals/AdminModal";
import {
  getAllAdmin,
  setUserError,
} from "../../appState/actions/AdminAuthAction";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../api";
import * as actiontypes from "../../appState/actionTypes";

const PER_PAGE = 10;
// const URL = { adminUser };
const UsersAdministrator = () => {
  const navigate = useNavigate();
  const { admins } = useSelector((state) => state?.adminProfile);
  console.log(admins)
  const [addAdmin, setAddAdmin] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [adminUserList, setAdminUserList] = useState(admins);
  const dispatch = useDispatch();

  async function handleDelete(slug) {
    let token =  localStorage.getItem("auth");
  if (token) {
    let result = await fetch(`${BASE_URL}/admin/${slug}`, {
      method: "DELETE",
    });
    console.log("slug", result)
    console.log("deleting adminuser", result);
    result = await result.json();
    dispatch(getAllAdmin());
  }
  }

  useEffect(() => {
    setAdminUserList(admins);
  }, [admins]);

  useEffect(() => {
    dispatch(getAllAdmin());
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
    setAddAdmin(item);
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
      .then((admins) => {
        setData(admins);
      });
  }

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;

  const currentPageData = adminUserList
    ?.sort(function (a, b) {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    })
    .slice(offset, offset + PER_PAGE)
    .map((admins) => (
      <tr key={admins.slug} className="">
        <td className="tdata">
          <img
            src={`data:image/*;base64,${admins.image}`}
            alt={admins.username}
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "20px",
            }}
          />{" "}
          {admins.username}
        </td>
        <td className="tdata">{admins.userGroup}</td>
        <td className="tdata">
          <p
            style={{
              backgroundColor: status(admins.status),
              color: "#fff",
              padding: "8px",
              margin: "5px",
            }}
          >
            {admins.status}
          </p>
        </td>
        <td className="tdata">{convertDate(admins.createdAt)}</td>
        <td className="tdata">{admins.view}</td>
        <td className="tdata buttonEdit">
          <button
            className="detailsButton"
            onClick={() =>
              navigate("/admin/administrator/edit", { state: admins })
            }
            style={{ backgroundColor: "orange" }}
          >
            <BiIcons.BiEdit className="text-white h6" /> Edit
          </button>
          <button
            className="detailsButton"
            style={{ backgroundColor: "red" }}
            onClick={(e) => handleDelete(admins.slug)}
          >
            <BiIcons.BiTrash className="text-white h6" /> Delete
          </button>
        </td>
      </tr>
    ));

  const pageCount = Math.ceil(adminUserList?.length / PER_PAGE);

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
          onClick={() => handleOpen("addAdmin")}
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
            <FaPlus /> Add Admin
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
      <AdminModal open={showModal} onclose={handleClose} addAdmin={addAdmin} />
    </div>
  );
};

export default UsersAdministrator;
