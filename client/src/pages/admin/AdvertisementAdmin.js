import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { useEffect, useState } from "react";
// import { advertisement } from "../../components/admin/data";
import ReactPaginate from "react-paginate";
import * as BiIcons from "react-icons/bi";
import AdminModal from "../../components/modals/AdminModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllAds, setAdsError } from "../../appState/actions/advertAction";
import { BASE_URL } from "../../api";
import * as actiontypes from "../../appState/actionTypes";



const PER_PAGE = 10;
// const URL = { advertisement };

const AdvertisementAdmin = () => {
  const navigate = useNavigate();
  const { ads } = useSelector((state) => state.advert);
  const [addAdvert, setAddAdvert] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [advertisementList, setAdvertisementList] = useState(ads);
  const dispatch = useDispatch();


  async function handleDelete(slug) {
    let result = await fetch(`${BASE_URL}/ads/${slug}`, {
      method: "DELETE",
    });
    result = await result.json();
    dispatch(getAllAds());
  }

  useEffect(() => {
    setAdvertisementList(ads);
  }, [ads]);

  useEffect(() => {
    dispatch(getAllAds());
  }, []);

  const convertDate = (date) => {
    return new Date(date)?.toDateString();
  };

  const handleOpen = (item) => {
    setShowModal(true);
    setAddAdvert(item);
  };

  const handleClose = () => {
    setShowModal(false);
    dispatch({
      type: actiontypes.RESET_ADVERT_STATE,
    });
    dispatch(setAdsError(""));
  };


  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(URL)
      .then((res) => res.json())
      .then((ads) => {
        setData(ads);
      });
  }

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;

  const currentPageData = advertisementList
  ?.sort(function (a, b) {
    return new Date(b.updatedAt) - new Date(a.updatedAt);
  })
    .slice(offset, offset + PER_PAGE)
    .map((ads) => (
      <tr key={ads.slug} className="">
        <td className="tdata"> {ads.title}</td>
        <td className="tdata">{ads.type}</td>
        <td className="tdata">{ads.location}</td>
        <td className="tdata">{ads.created}</td>
        <td className="tdata buttonEdit">
          <button
            className="detailsButton"
            onClick={() =>
              navigate("/admin/advert/edit", { state: ads })
            }
            style={{ backgroundColor: "orange" }}
          >
            <BiEdit className="text-white h6" /> Edit
          </button>
          <button
            className="detailsButton"
            style={{ backgroundColor: "red" }}
            onClick={(e) => handleDelete(ads.slug)}
          >
            <BiIcons.BiTrash className="text-white h6" /> Delete
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
            borderRadius: "5px",
          }}
        >
          <p className="text-white m-2">
            {" "}
            <FaPlus /> Add Advert
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
