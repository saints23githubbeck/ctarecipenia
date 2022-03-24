
import popularRecipe from "../../assets/images/popular-recipe.png"

const PopularRecipe = () => {

  const popularRecipes = [
    {
      recipeImage: popularRecipe,
      title: "Garlic Shrimps"
    },
    {
      recipeImage: popularRecipe,
      title: "Garlic Shrimps"
    },
    {
      recipeImage: popularRecipe,
      title: "Garlic Shrimps"
    },
    {
      recipeImage: popularRecipe,
      title: "Garlic Shrimps"
    }
  ]
  return (
    <div className='wrapper popularRecipe'>
        <h2>Most Popular
          <span className='text_primary'>Recipe</span>
        </h2>
        <div className='card_wrapper'>
         {
            popularRecipes.map((recipe, index) => (
              <div key={index} className='popular_card d-flex my-3 justify-content-between'>
                <div>
                  <img src={recipe.recipeImage} alt="recipeImage" />
                </div>
                <div>
                  <h4>{recipe.title}</h4>
                  <p className='text_primary'>View Recipes</p>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default PopularRecipe