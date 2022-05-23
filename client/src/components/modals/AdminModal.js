import React from "react";
import Dialog from "@mui/material/Dialog";
import AddRecipe from "./adminModalContent/AddRecipe.js";
import AddUser from "./adminModalContent/AddUser.js";
import AddAdmin from "./adminModalContent/AddAdmin.js";
import AddSlider from "./adminModalContent/AddSlider.js";
import AddAdvert from "./adminModalContent/AddAdvert.js";
import AddBlog from "./adminModalContent/AddBlog.js";
import AddCategory from "./adminModalContent/AddCategory.js";
import AddPage from "./adminModalContent/AddPage.js";

const AdminModal = (props) => {
  const {
    open,
    onclose,
    addSlider,
    addAdmin,
    addUser,
    addCategory,
    addRecipe,
    addBlog,
    addAdvert,
    addPage,
  } = props;
 


  return (
    <Dialog open={open} onClose={onclose}>
      {addSlider === "addSlider" && (
      <AddSlider onclose={onclose} />
      )}
      {addAdmin === "addAdmin" && (
        <AddAdmin onclose={onclose} />
      )}
      {addUser === "addUser" && (
      <AddUser onclose={onclose} />
      )}
      {addCategory === "addCategory" && (
      <AddCategory onclose={onclose} />
      )}
      {addRecipe === "addRecipe" && (
      <AddRecipe onclose={onclose} />
      )}
      {addBlog === "addBlog" && (
      <AddBlog onclose={onclose} />
      )}
      {addAdvert === "addAdvert" && (
      <AddAdvert onclose={onclose} />
      )}
      {addPage === "addPage" && (
      <AddPage onclose={onclose} />
      )}
    </Dialog>
  );
};

export default AdminModal;
