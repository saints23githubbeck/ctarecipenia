import React from "react";
import "../../assets/styles/adminStyles/module.admin.scss";
import { RiUser2Line  } from "react-icons/ri";
import { HiUserGroup  } from "react-icons/hi";
import { GrCopy, GrView  } from "react-icons/gr";
import { MdOutlineCategory  } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { FaBloggerB } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";

const DashboardCard = (props) => {
  const { icon, title, count, total, bgColor } = props;
  return (
    <>
    <div
      className="dashCard p-2"
      style={{
        margin:"8px",
        backgroundColor: bgColor,
      }}
    >
      <div className="d-flex">
        <h1 style={{
          width:'50%', height:"40%", color: "#fff"
        }}>{icon}</h1>
        <div className="w-75">
          <h3 className="text-start ">{title}</h3>
          <h3>{count}</h3>
        </div>
      </div>
      <hr />
      {/* {progress} */}
      <p className="text-wrap text-center">{total}</p>
    </div>
    {/* <div className="iconShow" >{icon}</div> */}
    </>
  );
};

const DashboardAdmin = () => {
  return (
    <div className="container">
      <div className="fill">
        <div className="fills">
          <DashboardCard
            icon={<RiUser2Line />}
            title={"ADMINISTRATORS"}
            count={2}
            total={"TOTAL ADMINS"}
            bgColor={"#9F7417"}
          />
          <DashboardCard
            icon={<HiUserGroup />}
            title={"NOMAL USERS"}
            count={3}
            total={"TOTAL NORMAL USERS"}
            bgColor={"#FFC42B"}
          />
          <DashboardCard
            icon={<GrView />}
            title={"VISITS"}
            count={3}
            total={"TOTAL VISITS"}
            bgColor={"#BA1EAA"}
          />
          <DashboardCard
            icon={<MdOutlineCategory />}
            title={"CATEGORIES"}
            count={3}
            total={"TOTAL CATEGORIES"}
            bgColor={"#282B30"}
          />
          <DashboardCard
            icon={<ImSpoonKnife />}
            title={"RECIPES"}
            count={3}
            total={"TOTAL RECIPES"}
            bgColor={"#F378A3"}
          />
          <DashboardCard
            icon={<FaBloggerB />}
            title={"BLOGS"}
            count={3}
            total={"TOTAL BLOGS"}
            bgColor={"#235B40"}
          />
          <DashboardCard
            icon={<BsNewspaper />}
            title={"NEWSLETTER"}
            count={3}
            total={"TOTAL GLOBAL NEWSLETTER"}
            bgColor={"#3BE9BF"}
          />
          <DashboardCard
            icon={<GrCopy />}
            title={"PAGES"}
            count={3}
            total={"TOTAL PAGES"}
            bgColor={"#F02020"}
          />
        </div>
      </div>

      <div className="fill w-100 p-2">
        <h5>Recipes Under Review</h5>
        <hr />
        <p> There is no recipes need reviewing</p>
      </div>
    </div>
  );
};
export default DashboardAdmin;
