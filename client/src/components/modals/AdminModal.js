import React from "react";
import { Dialog } from "@mui/material";

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
      {addSlider === "addSlider" && <div>addSlider</div>}
      {addAdmin === "addAdmin" && <div>addAdmin</div>}
      {addUser === "addUser" && <div>addUser</div>}
      {addCategory === "addCategory" && <div>addCategory</div>}
      {addRecipe === "addRecipe" && <div>addRecipe</div>}
      {addBlog === "addBlog" && <div>addBlog</div>}
      {addAdvert === "addAdvert" && <div>addAdvert</div>}
      {addPage === "addPage" && <div>addPage</div>}
    </Dialog>
  );
};

export default AdminModal;
