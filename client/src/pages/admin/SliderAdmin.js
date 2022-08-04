import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
// import { slider } from "../../components/admin/data";
import ReactPaginate from "react-paginate";
import * as BiIcons from "react-icons/bi";
import AdminModal from "../../components/modals/AdminModal";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllSlider,
  setSliderError,
} from "../../appState/actions/sliderAction";
import * as actiontypes from "../../appState/actionTypes";
import { BASE_URL } from "../../api";

const PER_PAGE = 10;
// const URL = { slider };

const SliderAdmin = () => {
  const navigate = useNavigate();
  const { sliders } = useSelector((state) => state.slider);
  const [addSlider, setAddSlider] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [sliderList, setSliderList] = useState(sliders);
  const dispatch = useDispatch();

  async function handleDelete(slug) {
    let token = localStorage.getItem("auth");
    if (token) {
      let result = await fetch(`${BASE_URL}/admin/slider/${slug}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("DELETE", slug, result);
      result = await result.json();
      dispatch(getAllSlider());
    }
  }

  // const handleDelete = (e) => {
  //   const filtered = sliderList.filter((record) => record !== e);
  //   setsliderList(filtered);
  // };

  useEffect(() => {
    setSliderList(sliders);
  }, [sliders]);

  useEffect(() => {
    dispatch(getAllSlider());
  }, []);

  const convertDate = (date) => {
    return new Date(date)?.toDateString();
  };

  const handleOpen = (item) => {
    setShowModal(true);
    setAddSlider(item);
  };

  const handleClose = () => {
    setShowModal(false);
    dispatch({
      type: actiontypes.RESET_SLIDER_STATE,
    });
    dispatch(setSliderError(""));
  };

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(URL)
      .then((res) => res.json())
      .then((sliders) => {
        setData(sliders);
      });
  }

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;

  const currentPageData = sliderList
    .sort(function (a, b) {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    })
    .slice(offset, offset + PER_PAGE)
    .map((sliders) => (
      <tr key={sliders.slug} className="">
        <td className="tdata">{sliders.title}</td>
        <td className="tdata">
          <img
            src={sliders.image}
            alt={sliders.title}
            style={{
              width: "50px",
              height: "20px",
              borderRadius: "150px 150px 40px 40px",
            }}
          />
        </td>
        <td className="tdata buttonEdit">
          <button
            className="detailsButton"
            onClick={() => navigate("/admin/slider/edit", { state: sliders })}
            style={{ backgroundColor: "orange" }}
            
          >
            <BiIcons.BiEdit className="text-white h6" /> Edit
          </button>
          <button
            className="detailsButton"
            style={{ backgroundColor: "red" }}
            onClick={(e) => handleDelete(sliders.slug)}
          >
            <BiIcons.BiTrash className="text-white h6" /> Delete
          </button>
        </td>
      </tr>
    ));

  const pageCount = Math.ceil(sliderList.length / PER_PAGE);

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
          onClick={() => handleOpen("addSlider")}
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
            <FaPlus /> Add Slider
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
      <AdminModal
        open={showModal}
        onclose={handleClose}
        addSlider={addSlider}
      />
    </div>
  );
};

export default SliderAdmin;
