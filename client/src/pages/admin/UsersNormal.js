import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { user } from "../../components/admin/data";

const UsersNormal = () => {
  const navigate = useNavigate();
  const [addRecord, setAddRecord] = useState("");
  const [showModal, setShowModal] = useState(false);

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
          {user.map((item, index) => {
            return (
              <tr key={index} className="">
                <td className="tdata">
                  <img
                    src={item.image}
                    alt={item.username}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "20px",
                    }}
                  />{" "}
                  {item.username}
                </td>
                <td className="tdata">{item.usergroup}</td>
                <td className="tdata"><p style={{backgroundColor: status(item.status), color:'#fff', padding:'8px', margin:'5px',}}>{item.status}</p></td>
                <td className="tdata">{item.date}</td>
                <td className="tdata">{item.view}</td>
                <td className="tdata buttonEdit">
                  <button
                    className="detailsButton"
                    onClick={() =>
                      navigate("/admin/slider/edit", { state: item })
                    }
                    style={{ backgroundColor: "orange" }}
                  >
                    Edit
                  </button>
                  <button
                    className="detailsButton"
                    style={{ backgroundColor: "red" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default UsersNormal;
