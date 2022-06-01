import React from "react";
import { Link, NavLink } from "react-router-dom";
import { iconData } from "./admin/data";


const CategoriesNav = () => {
  
  return (
    <div className="categorgy_nav">
      {
        iconData.map((category, index) => (
        <Link to="/recipes" key={index} className="category_item">
          <p className="img">{category.icon}</p> 
          <span>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesNav;
