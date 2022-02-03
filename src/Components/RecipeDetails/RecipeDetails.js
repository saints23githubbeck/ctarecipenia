import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const RecipeDetails = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=53053")
      .then((res) => res.json())
      .then((data) => setDetails(data.meals[0]));
  }, []);
  //   console.log(id, url, details);
  console.log(id, url);
  console.log(details);
  return (
    // <div className="container my-5">
    //   <div className="row ">
    //     <div className="col-5">
    //       <div>
    //         {" "}
    //         <img
    //           className="rounded img-fluid"
    //           src={details.strMealThumb}
    //           alt=""
    //         />
    //         <div>
    //           {" "}
    //           <p>{details.strInstructions}</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-7">
    //     <p>{details.strInstructions}</p>
    //     </div>
    //   </div>
    //   <h1>Single Recipe Details Page {id}</h1>
    //   <h1>Ok{details?.strMeal}</h1>

    // </div>
    
  );
};

export default RecipeDetails;
