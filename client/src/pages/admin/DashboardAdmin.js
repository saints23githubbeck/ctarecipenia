import React from "react";
import "../../assets/styles/adminStyles/module.admin.scss";

const DashboardCard = (props) => {
  const { icon, title, count, total, bgColor } = props;
  return (
    <div
      className="dashCard"
      style={{
        margin: "15px",
        backgroundColor: bgColor,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 10px ",
        }}
      >
        <h1>{icon}</h1>
        <div>
          <p>{title}</p>
          <h3>{count}</h3>
        </div>
      </div>
      <hr />
      {/* {progress} */}
      <p>{total}</p>
    </div>
  );
};

const DashboardAdmin = () => {
  return (
    <div className="container">
      <div className="fill">
        <div className="fills">
          <DashboardCard
            icon={""}
            title={"ADMINISTRATORS"}
            count={2}
            total={"TOTAL ADMINS"}
            bgColor={"#9F7417"}
          />
          <DashboardCard
            icon={""}
            title={"NOMAL USERS"}
            count={3}
            total={"TOTAL NORMAL USERS"}
            bgColor={"#FFC42B"}
          />
          <DashboardCard
            icon={""}
            title={"VISITS"}
            count={3}
            total={"TOTAL VISITS"}
            bgColor={"#BA1EAA"}
          />
          <DashboardCard
            icon={""}
            title={"CATEGORIES"}
            count={3}
            total={"TOTAL CATEGORIES"}
            bgColor={"#282B30"}
          />
          <DashboardCard
            icon={""}
            title={"RECIPES"}
            count={3}
            total={"TOTAL RECIPES"}
            bgColor={"#F378A3"}
          />
          <DashboardCard
            icon={""}
            title={"BLOGS"}
            count={3}
            total={"TOTAL BLOGS"}
            bgColor={"#235B40"}
          />
          <DashboardCard
            icon={""}
            title={"NEWSLETTER"}
            count={3}
            total={"TOTAL GLOBAL NEWSLETTER"}
            bgColor={"#3BE9BF"}
          />
          <DashboardCard
            icon={""}
            title={"PAGES"}
            count={3}
            total={"TOTAL PAGES"}
            bgColor={"#F02020"}
          />
        </div>
      </div>

      <div className="fill">
        <h5>Recipes Under Review</h5>
        <hr />
        <p> There is no recipes need reviewing</p>
      </div>
    </div>
  );
};
export default DashboardAdmin;
