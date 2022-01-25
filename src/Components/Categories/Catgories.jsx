import React from "react"
import Categories from "../Home/Categories/Categories"
import Newsletter from "../Home/Newsletter/Newsletter"
import Search from "../Home/Search/Search"
import Video from "../Home/Video/Video"
import Show from "../Shared/Show/Show"
import Favourite from "./Favourite/Favourite"

const Catgories = () => {
  return (
    <>
      <Search />
      <Categories />
      <Video />
      <Favourite />
      <Newsletter />
      <Show />
    </>
  )
}

export default Catgories
