import React from "react"
import "./Favourite.css"
import { Container } from "react-bootstrap"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import useFavourite from "../../../hooks/useFavourite"
import Favr from "./Favr/Favr"

const Favourite = () => {
  const [favourite] = useFavourite()
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Container fluid className="mt-5 mb-5 over">
      <h3 className="text-center fw-bolder">Most Favourited Recipes</h3>
      <div className="mt-5">
        <Slider {...settings}>
          {favourite.map((fav) => (
            <Favr key={fav.id} fav={fav} />
          ))}
        </Slider>
      </div>
    </Container>
  )
}

export default Favourite
