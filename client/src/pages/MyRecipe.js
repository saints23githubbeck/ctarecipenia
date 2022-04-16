import React from 'react'

import "../assets/styles/myRecipe.scss";

import ownerImage from "../assets/images/latest-recipe-owner-image.png";




import UserProfile from "../components/UserProfile";

import view from "../assets/images/view.png";
import edit from "../assets/images/edit.png";

import dashboard from "../assets/images/dashboard.png";
import user from "../assets/images/user.png";
import recipe from "../assets/images/recipe.png";
import logout from "../assets/images/logout.png";


const MyRecipe = () => {
    const recipesList = [
        {
            id : 1,
            photo : ownerImage,
            title : 'Garlic Chicken',
            category : 'Food'
        },
        {
            id : 2,
            photo : ownerImage,
            title : 'Garlic Chicken',
            category : 'Food'
        },
        {
            id : 3,
            photo : ownerImage,
            title : 'Garlic Chicken',
            category : 'Food'
        },
        {
            id : 4,
            photo : ownerImage,
            title : 'Garlic Chicken',
            category : 'Food'
        },
        {
            id : 5,
            photo : ownerImage,
            title : 'Garlic Chicken',
            category : 'Food'
        },
        {
            id : 6,
            photo : ownerImage,
            title : 'Garlic Chicken',
            category : 'Food'
        }
    ]

  return (
    <section className='myrecipe'>
        <div className="sub-nav">
            <div className="flex wrapper">
                <h1>My Recipes</h1>
                <ul className="list flex">
                    <li>Home</li>
                    <li>My Recipe</li>
                </ul>
            </div>
      </div>
      <div className="wrapper">
      <UserProfile 
        first='Dashboard'
        secound = 'My Profile'
        third = 'My Recipes'
        fourth='Logout'

        firstImg= {dashboard}
        secoundImg= {user}
        thirdImg = {recipe}
        fourthImg={logout}
        />
          <div className="right">
              <div className="recipe-list">
                  <div className="heading">
                  <h3>My Recipes</h3>
                  </div>
                  <div className="caption">
                      <ul className="head grid">
                          <li className='row1'>Photo</li>
                          <li className='row2'>Title</li>
                          <li className='row3'>Category</li>
                          <li className='row4'>Status</li>
                          <li className='row5'>Action</li>
                      </ul>
                  </div>
                  <div className="recipes flex">
                    {
                        recipesList.map(recipe => (
                            <div key={recipe.id} className='recipe grid'>
                                <div className="row1">
                                    <img src={recipe.photo} alt="" />
                                </div>
                                <div className="row2">
                                    <h5>{recipe.title}</h5>
                                </div>
                                <div className="row3">
                                    <h5>{recipe.category}</h5>
                                </div>
                                <div className="row5 flex">
                                    <div className="view"><img src={view} alt="" /></div>
                                    <div className="edit"><img src={edit} alt="" /></div>
                                    <div className="delete"><img src={view} alt="" /></div>
                                </div>
                            </div>
                        ))
                    }
                  </div>
              </div>
          </div>
      </div>
    </section>
  )
}

export default MyRecipe