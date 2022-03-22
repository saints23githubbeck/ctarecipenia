import React from 'react'

// import "../../assets/styles/landingPage.scss"
import "../assets/styles/landingPage.scss"
import Blogs from '../components/landingPage/Blogs'
import Categories from '../components/landingPage/Categories'
import Header from '../components/landingPage/Header'
import LatestRecipe from '../components/landingPage/LatestRecipe'
import PopularAuthor from '../components/landingPage/PopularAuthor'
import PopularRecipe from '../components/landingPage/PopularRecipe'
import StayWithUs from '../components/StayWithUs'

const LandingPage = () => {
  return (
    <div>
      <Header />
      <LatestRecipe />
      <PopularRecipe />
      <PopularAuthor />
      <div className='category-blog wrapper'>
        <Categories />
        <Blogs />
      </div>
      <StayWithUs />
    </div>
  )
}

export default LandingPage