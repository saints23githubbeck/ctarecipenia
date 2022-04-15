
import UserProfile from './../components/UserProfile';
import Card from './../components/Card';

import "../assets/styles/profile.scss";

import user from "../assets/images/user.png";
import female from "../assets/images/female.png";
import mail from "../assets/images/mail.png";
import calender from "../assets/images/calender.png";
import view from "../assets/images/view.png";
import flag from "../assets/images/flag.png";

import latestRecipe1 from "../assets/images/latest-recipe1.png";
import latestRecipe2 from "../assets/images/latest-recipe2.png";
import ownerImage from "../assets/images/latest-recipe-owner-image.png";



import recipe from "../assets/images/recipe.png";

const Profile = () => {

  const latestData = [
    {
      title: "Chicken",
      recipeImage: latestRecipe1,
      ownerImage: ownerImage,
      ownerName: "Bambam",
    },
    {
      title: "Chicken",
      recipeImage: latestRecipe2,
      ownerImage: ownerImage,
      ownerName: "Bambam",
    },{
      title: "Chicken",
      recipeImage: latestRecipe2,
      ownerImage: ownerImage,
      ownerName: "Bambam",
    },{
      title: "Chicken",
      recipeImage: latestRecipe1,
      ownerImage: ownerImage,
      ownerName: "Bambam",
    },
    {
      title: "Chicken",
      recipeImage: latestRecipe1,
      ownerImage: ownerImage,
      ownerName: "Bambam",
    },
    {
      title: "Chicken",
      recipeImage: latestRecipe2,
      ownerImage: ownerImage,
      ownerName: "Bambam",
    }
];
  const exist = true

  return (
    <section className='profile-page'>
      <div className="sub-nav">
        <div className="flex wrapper">
          <h1>Profile - Bambam</h1>
          <ul className="list">
          <li>Home</li>
            <li>Profile</li>
            <li>Bambam</li>
          </ul>
        </div>
      </div>
      <div className="wrapper">
        <UserProfile 
        first='Bambam'
        secound = 'Female'
        third = 'My Recipes'
        fourth='ayo@gmail.com'
        fifth='7 Recipes'
        sixth='Member Since Febuary 14,2022'
        seventh='120 Profile Views'

        firstImg= {user}
        secoundImg= {female}
        thirdImg = {mail}
        fourthImg={flag}
        fifthImg={recipe}
        sixthImg={calender}
        seventhImg={view}
        exist={exist}/>

        <div className="right">
          <div className='review'>
            <div className='review-comment flex'>
                <span>“</span><h5> I’m Ayo and this is where i share all my recipe, i am a food lover.
                </h5>
            </div>
          </div>

          <Card latestData={latestData}/>
        </div>



      </div>
    </section>

  )
}

export default Profile