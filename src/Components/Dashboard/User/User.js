import React, { useState } from "react";
import ContactInformation from "./ContactInformation";
import Seo from "./Seo";
import Settings from "./Settings";
import ApiKeys from "./ApiKeys";
import SocialMedia from "./SocialMedia";

const User = () => {
  const [component, setComponent] = useState("Settings");
  const handleToggle = (toggle) => {
    setComponent(toggle);
  };
  console.log(component);
  return (
    <div className="container my-5">
      <ul style={{ width: "1000px" }} className="user-ul mx-auto ">
        <li
          onClick={() => handleToggle("Settings")}
          className="user-navlink"
          style={
            component === "Settings"
              ? { backgroundColor: "rgb(253, 253, 253)" }
              : { backgroundColor: "rgb(243, 243, 243)" }
          }
        >
          Settings
        </li>
        <li onClick={() => handleToggle("Seo")} className="user-navlink"
          style={
            component === "Seo"
              ? { backgroundColor: "rgb(253, 253, 253)" }
              : { backgroundColor: "rgb(243, 243, 243)" }
          }>
          Seo
        </li>
        <li
          onClick={() => handleToggle("Contact")}
          className="user-navlink-contact"
          style={
            component === "Contact"
              ? { backgroundColor: "rgb(253, 253, 253)" }
              : { backgroundColor: "rgb(243, 243, 243)" }
          }
        >
          Contact <br /> Information
        </li>
        <li
          onClick={() => handleToggle("SocialMedia")}
          className="user-navlink"
          style={
            component === "SocialMedia"
              ? { backgroundColor: "rgb(253, 253, 253)" }
              : { backgroundColor: "rgb(243, 243, 243)" }
          }
        >
          SocialMedia
        </li>
        <li
          onClick={() => handleToggle("api")}
          className="user-navlink-contact"
          style={
            component === "api"
              ? { backgroundColor: "rgb(253, 253, 253)" }
              : { backgroundColor: "rgb(243, 243, 243)" }
          }
        >
          Api <br /> Keys
        </li>
      </ul>
      <div className="user-components mx-auto p-3">
        {component === "Settings" && <Settings></Settings>}
        {component === "Seo" && <Seo></Seo>}
        {component === "Contact" && <ContactInformation></ContactInformation>}
        {component === "api" && <ApiKeys></ApiKeys>}
        {component === "SocialMedia" && <SocialMedia></SocialMedia>}
      </div>
    </div>
  );
};

export default User;
