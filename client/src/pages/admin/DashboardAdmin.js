import React from "react";
import "../../assets/styles/adminStyles/module.admin.scss";
import { RiUser2Line  } from "react-icons/ri";
import { HiUserGroup  } from "react-icons/hi";
import { GrCopy, GrView  } from "react-icons/gr";
import { MdOutlineCategory  } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { FaBloggerB } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";
import ProgressBar from "../../components/admin/ProgressBar";
import { useSelector } from "react-redux";

const DashboardCard = (props) => {
  const { icon, title, count, total, bgColor, number } = props;
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
          <h3 className="px-3">{count}</h3>
        </div>
      </div>
      <ProgressBar number={number} />
      <p className="text-wrap text-center">{total}</p>
    </div>
    </>
  );
};

const DashboardAdmin = () => {
  const { recipes } = useSelector((state) => state.recipe);
  const { categories} = useSelector((state) => state?.category);
  const { blogs } = useSelector((state) => state.blog);
  const { admins } = useSelector((state) => state?.adminProfile);
  const { subscribers } = useSelector(state => state.adminProfile);
  const { newsletters } = useSelector((state) => state.newsletter);
  const { pages } = useSelector(state => state.page);
  
  console.log("le n", subscribers.length)

  return (
    <div className="container">
      <div className="fill">
        <div className="fills">
          <DashboardCard
            icon={<RiUser2Line />}
            title={"ADMINISTRATORS"}
            count={admins?.length}
            number={admins?.length*2}
            total={"TOTAL ADMINS"}
            bgColor={"#9F7417"}
          />
          <DashboardCard
            icon={<HiUserGroup />}
            title={"NOMAL USERS"}
            number={subscribers?.length}
            count={subscribers?.length*2}
            total={"TOTAL NORMAL USERS"}
            bgColor={"#FFC42B"}
          />
          <DashboardCard
            icon={<GrView />}
            title={"VISITS"}
            number={0}
            count={0}
            total={"TOTAL VISITS"}
            bgColor={"#BA1EAA"}
          />
          <DashboardCard
            icon={<MdOutlineCategory />}
            title={"CATEGORIES"}
            count={categories?.length}
            number={categories?.length*2}
            total={"TOTAL CATEGORIES"}
            bgColor={"#282B30"}
          />
          <DashboardCard
            icon={<ImSpoonKnife />}
            title={"RECIPES"}
            number={recipes?.length*2}
            count={recipes?.length}
            total={"TOTAL RECIPES"}
            bgColor={"#F378A3"}
          />
          <DashboardCard
            icon={<FaBloggerB />}
            title={"BLOGS"}
            number={blogs?.length*2}
            count={blogs?.length}
            total={"TOTAL BLOGS"}
            bgColor={"#235B40"}
          />
          <DashboardCard
            icon={<BsNewspaper />}
            title={"NEWSLETTER"}
            number={newsletters?.length*2}
            count={newsletters?.length}
            total={"TOTAL GLOBAL NEWSLETTER"}
            bgColor={"#3BE9BF"}
          />
          <DashboardCard
            icon={<GrCopy />}
            title={"PAGES"}
            number={pages?.length*2}
            count={pages?.length}
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
