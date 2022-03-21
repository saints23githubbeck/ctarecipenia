import React from 'react'

import latestRecipe1 from "../../assets/images/latest-recipe1.png"
import latestRecipe2 from "../../assets/images/latest-recipe2.png"
import latestRecipe3 from "../../assets/images/latest-recipe3.png"
import latestRecipe4 from "../../assets/images/latest-recipe4.png"
import latestRecipe5 from "../../assets/images/latest-recipe5.png"
import latestRecipe6 from "../../assets/images/latest-recipe6.png"
import ownerImage from "../../assets/images/latest-recipe-owner-image.png"


const LatestRecipe = () => {

  const latestData = [
    {
      title: "Chicken",
      recipeImage: latestRecipe1,
      ownerImage: ownerImage,
      ownerName:"Bambam"
    },
    {
      title: "Chicken",
      recipeImage: latestRecipe2,
      ownerImage: ownerImage,
      ownerName:"Bambam"
    },
    {
      title: "Chicken",
      recipeImage: latestRecipe3,
      ownerImage: ownerImage,
      ownerName:"Bambam"
    },
    {
      title: "Chicken",
      recipeImage: latestRecipe4,
      ownerImage: ownerImage,
      ownerName:"Bambam"
    },
    {
      title: "Chicken",
      recipeImage: latestRecipe5,
      ownerImage: ownerImage,
      ownerName:"Bambam"
    },
    {
      title: "Chicken",
      recipeImage: latestRecipe6,
      ownerImage: ownerImage,
      ownerName:"Bambam"
    }
  ]


  return (
    <div className='latest wrapper'>
      <div>
        <h2>Browse Our Latest <br />
          <span className='text_primary'>Recipe</span>
        </h2>
        <button>
          See all
          <span>&#8594;</span>
        </button>
      </div>

      <div className='card_group'>
        <div className='mobile_none lessThan'> &lt; </div>
        <div className='card_wrapper'>
          {
            latestData.map((recipe, index) => (
              <div key={index} className='card'>
                <div>
                  <img src={recipe.recipeImage} alt="recipeImage" />
                </div>
                <h3>{recipe.title}</h3>
                <div>
                  <img src={recipe.ownerImage} alt={recipe.ownerName} />
                  <span><strong>{recipe.ownerName}</strong></span>
                </div>
                <div className='rating' style={{ textAlign: "center" }}>
                  <span className='rated'>&#9733;</span>
                  <span className='rated'>&#9733;</span>
                  <span className='rated'>&#9733;</span>
                  <span >&#9733;</span>
                </div>
              </div>
            ))
          }
        </div>
        <div className='mobile_none greaterThan'> &gt; </div>
      </div>
    </div>
  )
}

export default LatestRecipe