import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { advertisement } from "../../components/admin/data";
import ReactPaginate from "react-paginate";
import * as BiIcons from "react-icons/bi";
import AdminModal from "../../components/modals/AdminModal";

const PER_PAGE = 10;
const URL = { advertisement };
const AdvertisementAdmin = () => {
  const navigate = useNavigate();
  const [addAdvert, setAddAdvert] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [advertisementList, setAdvertisementList] = useState(advertisement);

  const handleDelete = (e) => {
    const filtered = advertisementList.filter(
      (advertisement) => advertisement !== e
    );
    setAdvertisementList(filtered);
  };

  const handleOpen = (item) => {
    setShowModal(true);
    setAddAdvert(item);
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
      .then((advertisement) => {
        setData(advertisement);
      });
  }

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;

  const currentPageData = advertisementList
    .slice(offset, offset + PER_PAGE)
    .map((advertisement) => (
      <tr key={advertisement.id} className="">
        <td className="tdata"> {advertisement.title}</td>
        <td className="tdata">{advertisement.type}</td>
        <td className="tdata">{advertisement.location}</td>
        <td className="tdata">{advertisement.created}</td>
        <td className="tdata buttonEdit">
          <button
            className="detailsButton"
            onClick={() =>
              navigate("/admin/advert/edit", { state: advertisement })
            }
            style={{ backgroundColor: "orange" }}
          >
            Edit
          </button>
          <button
            className="detailsButton"
            style={{ backgroundColor: "red" }}
            onClick={(e) => handleDelete(advertisement)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));

  const pageCount = Math.ceil(advertisementList.length / PER_PAGE);

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
          onClick={() => handleOpen("addAdvert")}
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
            <th className="thead">Type</th>
            <th className="thead">Location</th>
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
      <AdminModal
        open={showModal}
        onclose={handleClose}
        addAdvert={addAdvert}
      />
    </div>
  );
};

export default AdvertisementAdmin;
