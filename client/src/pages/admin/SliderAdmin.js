import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { record } from "../../components/admin/data";

const SliderAdmin = () => {
  const navigate = useNavigate();
  const [addRecord, setAddRecord] = useState("");
  const [showModal, setShowModal] = useState(false);

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
          alignItems: 'center',
          textAlign: 'center',
          margin: '10px',
          padding: '20px',
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
            height: '20px',
            borderRadius: '5px'
          }}
        >
          <p> <FaPlus /> Add New Record</p>
        </div>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table className="">
          <tr>
            <th className="thead ">Title</th>
            <th className="thead">Image</th>
            <th className="thead">Operations</th>
          </tr>
          {record.map((item, index) => {
            return (
              <tr key={index} className="">
                <td className="tdata">{item.title}</td>
                <td className="tdata">{item.image}</td>
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

export default SliderAdmin;
