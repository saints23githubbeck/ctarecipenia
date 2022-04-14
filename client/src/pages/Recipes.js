import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { allRecipe, recipeCat } from "../components/data";
import ReactPaginate from "react-paginate";
import * as BiIcons from "react-icons/bi";

const PER_PAGE = 15;
const URL = { allRecipe };

const Recipes = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(URL)
      .then((res) => res.json())
      .then((allRecipe) => {
        setData(allRecipe);
      });
  }

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;

  const currentPageData = allRecipe
    .slice(offset, offset + PER_PAGE)
    .map((allRecipe, index) => (
      <div key={index} className="recipeCard">
        <div>
          <img src={allRecipe.recipeImage} alt="recipeImage" />
        </div>
        <h3>{allRecipe.title}</h3>
        <div>
          <img src={allRecipe.ownerImage} alt={allRecipe.ownerName} />
          <span>
            <strong>{allRecipe.ownerName}</strong>
          </span>
        </div>
        <div className="rating" style={{ textAlign: "center" }}>
          <span className="rated">&#9733;</span>
          <span className="rated">&#9733;</span>
          <span className="rated">&#9733;</span>
          <span>&#9733;</span>
        </div>
      </div>
    ));

  const pageCount = Math.ceil(allRecipe.length / PER_PAGE);

  return (
    <div className="bodyContainer">
      <div className="topWrap">
        <h2>Browser Recipes</h2>
        <div className="d-flex justify-content-between p-2 ">
          <div className="searchList">
            <input type="text" placeholder="Choose All Categories" />
          </div>
          <div className="searchList1">
            <input type="text" placeholder="Search by Keyword" />
            <button>
              <BiSearch />
            </button>
          </div>
        </div>
      </div>

      <div className="recipeCat">
          {recipeCat.map((recipeCat, index) => (
            <div key={index} className="">
              <p>
                <span>{recipeCat.icon}</span>
                {recipeCat.name}
              </p>
            </div>
          ))}
        </div>

      <div className="cardContainer">
        <h2>All Recipes</h2>
        <div className="recipeContainer">{currentPageData}</div>
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

        {/* {allRecipe.map((allRecipe, index) => (
          <div key={index} className="recipeCard">
            <div>
              <img src={allRecipe.recipeImage} alt="recipeImage" />
            </div>
            <h3>{allRecipe.title}</h3>
            <div>
              <img src={allRecipe.ownerImage} alt={allRecipe.ownerName} />
              <span>
                <strong>{allRecipe.ownerName}</strong>
              </span>
            </div>
            <div className="rating" style={{ textAlign: "center" }}>
              <span className="rated">&#9733;</span>
              <span className="rated">&#9733;</span>
              <span className="rated">&#9733;</span>
              <span>&#9733;</span>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Recipes;
