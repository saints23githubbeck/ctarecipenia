import React from 'react'

const Card = ({latestData}) => {

  return (
    <div className="cards">
    {latestData.map((recipe, index) => (
      <div key={index} className="card">
        <div>
          <img src={recipe.recipeImage} alt="recipeImage" />
        </div>
        <h3>{recipe.title}</h3>
        <div>
          <img src={recipe.ownerImage} alt={recipe.ownerName} />
          <span>
            <strong>{recipe.ownerName}</strong>
          </span>
        </div>
        <div className="rating" style={{ textAlign: "center" }}>
          <span className="rated">&#9733;</span>
          <span className="rated">&#9733;</span>
          <span className="rated">&#9733;</span>
          <span>&#9733;</span>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Card