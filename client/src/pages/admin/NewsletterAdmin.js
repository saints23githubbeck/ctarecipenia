import { FaShare } from "react-icons/fa";
import { useEffect, useState } from "react";
// import { newsletter } from "../../components/admin/data";
import ReactPaginate from "react-paginate";
import * as BiIcons from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../api";
import { getAllNewsletter } from "../../appState/actions/newsletterAction";
import { useNavigate } from "react-router-dom";

const PER_PAGE = 10;
// const URL = { newsletter };

const NewsletterAdmin = () => {
  const navigate = useNavigate();
  const { newsletters } = useSelector((state) => state.newsletter);
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [newsletterList, setNewsletterList] = useState(newsletters);
  const dispatch = useDispatch();

  async function handleDelete(_id) {
    let result = await fetch(`${BASE_URL}/admin/subs/${_id}`, {
      method: "DELETE",
    });
    result = await result.json();
    dispatch(getAllNewsletter());
  }
  // const handleDelete = (e) => {
  //   const filtered = newsletterList.filter((newsletter) => newsletter !== e);
  //   setNewsletterList(filtered);
  // };

  useEffect(() => {
    setNewsletterList(newsletters);
  }, [newsletters]);

  useEffect(() => {
    dispatch(getAllNewsletter());
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(URL)
      .then((res) => res.json())
      .then((newsletters) => {
        setData(newsletters);
      });
  }

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;

  const currentPageData = newsletterList
  .sort(function (a, b) {
    return new Date(b.createdAt) - new Date(a.createdAt);
  })
    .slice(offset, offset + PER_PAGE)
    .map((newsletters) => (
      <tr key={newsletters._id} className="">
        <td className="tdata">{newsletters.email}</td>
        <td className="tdata">{newsletters.createdAt}</td>
        <td className="tdata buttonEdit">
          <button
            className="detailsButton"
            style={{ backgroundColor: "red" }}
            onClick={(e) => handleDelete(newsletters._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));

  const pageCount = Math.ceil(newsletterList.length / PER_PAGE);

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
            <FaShare /> Export Newsletter
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
