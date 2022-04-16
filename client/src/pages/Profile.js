
import UserProfile from './../components/UserProfile';
import Card from './../components/Card';

import "../assets/styles/profile.scss";



import latestRecipe1 from "../assets/images/latest-recipe1.png";
import latestRecipe2 from "../assets/images/latest-recipe2.png";
import ownerImage from "../assets/images/latest-recipe-owner-image.png";
import { Link } from 'react-router-dom';



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
  

  return (
    <section className="profile-page">
      <div className="sub-nav">
        <div className="flex wrapper">
          <h1>Profile - Bambam</h1>
          <ul className="list">
            <li><Link to='/'>Home</Link></li>
            <li>Profile</li>
            <li>Bambam</li>
          </ul>
        </div>
      </div>
      <div className="wrapper">
        <UserProfile isProfile={true} />

        <div className="right">
          <div className="review">
            <div className="review-comment flex">
              <span>“</span>
              <h5>
                
                I’m Ayo and this is where i share all my recipe, i am a food
                lover.
              </h5>
            </div>
          </div>

          <Card latestData={latestData} />
        </div>
      </div>
    </section>
  );
}

export default Profile