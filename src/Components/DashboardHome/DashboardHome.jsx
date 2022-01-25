import React from "react";
import DashboardRoot from "../DashboardRoot/DashboardRoot";
import "./DashboardHome.css";
import DashSvg from "./DashSvg";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import GroupsIcon from '@mui/icons-material/Groups';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CategoryIcon from '@mui/icons-material/Category';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import FeedIcon from '@mui/icons-material/Feed';

const DashboardHome = () => {
  const data = [
    { name: "Administrators", value: 5, color: "#0172D5" ,  icon: ManageAccountsIcon},
    { name: "Users", value: 250, color: "#1BD941"  ,  icon: GroupsIcon},
    { name: "Visits", value: 4518, color: "black"  ,  icon: VisibilityIcon},
    { name: "Categories", value: 15, color: "#FDCB2E"  ,  icon: CategoryIcon},
    { name: "Recipes", value: 125, color: "#53B5B4"  ,  icon: RestaurantIcon},
    { name: "Blog Posts", value: 300, color: "#BF01C3"  ,  icon: ChatBubbleIcon},
    { name: "NewsLetters", value: 15, color: "#FE9494"  ,  icon: NewspaperIcon},
    { name: "Pages", value: 21, color: "red"  ,  icon: FeedIcon},
  ];
  return (
    <div className="px-4 w-full h-full pt-2">
      <h2 className="bg-red-50 p-3 font-bold">Dashboard</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-2 md:gap-x-0 grid-rows-4 md:grid-rows-2 w-full h-1/2">
        {data.map((svg) => (
          <DashSvg data={svg} ManageAccountsIcon={ManageAccountsIcon}/>
        ))}
      </div>

      <div className="w-full mt-8 md:mt-20 px-6 py-2 bg-red-200 border rounded">
        <h5 className="capitalize">Recipes Under Review</h5>
        <hr className="w-full md:w-1/3 bg-gray-600 h-2" />
        <div className="flex">
          <ThumbUpAltIcon color="gray"/> 
          <p className="text-gray-600 ml-2 normal-case ">There are no recipes under review</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
