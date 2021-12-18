import React from "react";
import ContactInformation from "./User/ContactInformation";
import Seo from "./User/Seo";
import Settings from "./User/Settings";
import ApiKeys from "./User/ApiKeys";
import SocialMedia from "./User/SocialMedia";

const Dashboard = () => {
  return (
    <div className="container my-5">
      <Settings></Settings>
      <Seo></Seo>
      <ContactInformation></ContactInformation>
      <ApiKeys></ApiKeys>
      <SocialMedia></SocialMedia>
    </div>
  );
};

export default Dashboard;
