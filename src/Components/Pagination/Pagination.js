import React from "react";

const Pagination = ({ pageNumber, setPageNumber,pagesVisited }) => {
    
    const handleNext=()=>{
         setPageNumber(pageNumber + 1)
         console.log(pageNumber,"pagenumber");
         console.log(pagesVisited,"visited");
    }
    const handlePrev =()=>{
        setPageNumber(pageNumber - 1)
        console.log(pageNumber,"pagenumber");
        console.log(pagesVisited,"visited");
    }
  return (
    <nav aria-label="Page navigation example ">
      <ul className="pagination">
        <li className="page-item">
          <button  onClick={handlePrev} className="page-link">Previous</button>
        </li>

        <li className="page-item">
          <button
            onClick={handleNext}
            className="page-link"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
