import React from "react";
import { Link, NavLink } from "react-router-dom";
import category1 from "../assets/images/category1.png";
import category2 from "../assets/images/category2.png";
import category3 from "../assets/images/category3.png";
import category4 from "../assets/images/category4.png";
import category5 from "../assets/images/category5.png";
import category6 from "../assets/images/category6.png";
import category7 from "../assets/images/category7.png";
import category8 from "../assets/images/category8.png";
import category9 from "../assets/images/category9.png";
import category10 from "../assets/images/category10.png";
import category11 from "../assets/images/category11.png";
import category12 from "../assets/images/category12.png";
import category13 from "../assets/images/category13.png";

const CategoriesNav = () => {
  const categories = [
    {
      name: "Cake",
      image: category1,
    },
    {
      name: "Snacks",
      image: category2,
    },
    {
      name: "Cake",
      image: category1,
    },
    {
      name: "Pizza",
      image: category3,
    },
    {
      name: "Soup",
      image: category4,
    },
    {
      name: "Pizza",
      image: category3,
    },
    {
      name: "Soup",
      image: category4,
    },
    {
      name: "Pizza",
      image: category3,
    },
    {
      name: "Salad",
      image: category5,
    },
    {
      name: "Fish",
      image: category6,
    },
    {
      name: "Tea",
      image: category7,
    },
    {
      name: "Chicken",
      image: category3,
    },
    {
      name: "Shrimp",
      image: category8,
    },
    {
      name: "Soup",
      image: category4,
    },
    {
      name: "Bread",
      image: category9,
    },
    {
      name: "Fish",
      image: category6,
    },
    {
      name: "Cake",
      image: category1,
    },
    {
      name: "Cookies",
      image: category10,
    },
    {
      name: "Drink",
      image: category11,
    },
    {
      name: "Ice cream",
      image: category12,
    },
    {
      name: "Ice cream",
      image: category13,
    },
    {
      name: "Bread",
      image: category10,
    },
    {
      name: "Pizza",
      image: category3,
    },
    {
      name: "Cookies",
      image: category10,
    },
    {
      name: "Cookies",
      image: category10,
    },
  ];
  return (
    <div className="categorgy_nav">
      {categories.map((category, index) => (
        <Link to="/" key={index} className="category_item">
          <img src={category.image} alt="category image" />
          <p>{category.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesNav;
