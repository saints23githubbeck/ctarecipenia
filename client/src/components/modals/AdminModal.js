import React from "react";
import Dialog from '@mui/material/Dialog';


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
      {addSlider === "addSlider" && <div>
      <div className="d-flex m-3 justify-content-between">
        <h5 className="p-3">Add Slider</h5>
      </div>


      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Recipe</p>
        <input
          className="w-75 h-75 p-1 border"
          type="email"
          required
          id="email"
          autoComplete="email"
          autoFocus
          placeholder="recipe"
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Title</p>
        <input
          className="w-75 h-75 p-1 border"
          type="tel"
          required
          id="phone"
          autoComplete="number"
          autoFocus
          placeholder="title"
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Image</p>
        <input
          className="w-50 h-75 p-1 border"
          type="file"
          required
          id="phone"
          autoComplete="number"
          autoFocus
          placeholder="upload picture"
        />
         <img className="w-25 h-75 p-1" src={""} alt={""} style={{width: "30px", height:"30px", borderRadius:"10px"}} />
      </div>
      <div className="m-3">
    
          <button
            style={{
              marginRight: "50px",
              backgroundColor: "blue",
              border: "none",
              borderRadius: "5px",
              padding: 10,
              color: "#fff",
              width: "100px",
              fontSize: 16,
              marginBottom: "40px",
            }}
          >
            Save
          </button>

        <button
          style={{
            marginRight: "50px",
            backgroundColor: "Red",
            border: "none",
            borderRadius: "5px",
            padding: 10,
            color: "#fff",
            width: "100px",
            fontSize: 16,
            marginBottom: "40px",
          }}
        >
          Cancel
        </button>
      </div>
        </div>}
      {addAdmin === "addAdmin" && <div><div className="d-flex m-3 justify-content-between">
        <h5 className="p-3">Add Admin</h5>
      </div>


      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Usergroup</p>
        <input
          className="w-75 h-75 p-1 border"
          type="email"
          required
          id="email"
          autoComplete="email"
          autoFocus
          placeholder="select user group"
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Username</p>
        <input
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="enter userName"
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">First Name</p>
        <input
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="enter your first name"
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Last Name</p>
        <input
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="enter your last name"
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Email</p>
        <input
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="enter email address"
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Country</p>
        <input
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="select your country"
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Image</p>
        <input
          className="w-50 h-75 p-1 border"
          type="file"
          required
          id="phone"
          autoComplete="number"
          autoFocus
          placeholder="Choose image " 
        />
        <img
          className="w-25 h-75 p-1"
          src=""
          alt=""
          style={{ width: "30px", height: "30px", borderRadius: "10px" }}
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Password</p>
        <input
          className="w-75 h-75 p-1 border"
          type="password"
          required
          id=""
          autoComplete="password"
          autoFocus
          placeholder="password"
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Comfirm Password</p>
        <input
          className="w-75 h-75 p-1 border"
          type="password"
          required
          id=""
          autoComplete="password"
          autoFocus
          placeholder=" re-enter your password"
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Description</p>
        <textarea
          className="w-75 h-75 p-1 text-wrap border"
          type="text"
          rows={4}
          placeholder="Description"
        />
      </div>

      <div className="m-3">
        
          <button
            style={{
              marginRight: "50px",
              backgroundColor: "blue",
              border: "none",
              borderRadius: "5px",
              padding: 10,
              color: "#fff",
              width: "100px",
              fontSize: 16,
              marginBottom: "40px",
            }}
          >
            Save
          </button>
        
        <button
          style={{
            marginRight: "50px",
            backgroundColor: "red",
            border: "none",
            borderRadius: "5px",
            padding: 10,
            color: "#fff",
            width: "100px",
            fontSize: 16,
            marginBottom: "40px",
          }}>
          Cancel
        </button>
      </div></div>}
      {addUser === "addUser" && <div><div className="d-flex m-3 justify-content-between">
        <h5 className="p-3">Add User</h5>
      </div>


      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Usergroup</p>
        <input
          className="w-75 h-75 p-1 border"
          type="email"
          required
          id="email"
          autoComplete="email"
          autoFocus
          placeholder="select user group"
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Username</p>
        <input
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="enter userName"
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">First Name</p>
        <input
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="enter your first name"
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Last Name</p>
        <input
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="enter your last name"
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Email</p>
        <input
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="enter email address"
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Country</p>
        <input
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="select your country"
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Image</p>
        <input
          className="w-50 h-75 p-1 border"
          type="file"
          required
          id="phone"
          autoComplete="number"
          autoFocus
          placeholder="Choose image " 
        />
        <img
          className="w-25 h-75 p-1"
          src=""
          alt=""
          style={{ width: "30px", height: "30px", borderRadius: "10px" }}
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Password</p>
        <input
          className="w-75 h-75 p-1 border"
          type="password"
          required
          id=""
          autoComplete="password"
          autoFocus
          placeholder="password"
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Comfirm Password</p>
        <input
          className="w-75 h-75 p-1 border"
          type="password"
          required
          id=""
          autoComplete="password"
          autoFocus
          placeholder=" re-enter your password"
        />
      </div>

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Description</p>
        <textarea
          className="w-75 h-75 p-1 text-wrap border"
          type="text"
          rows={4}
          placeholder="Description"
        />
      </div>

      <div className="m-3">
        
          <button
            style={{
              marginRight: "50px",
              backgroundColor: "blue",
              border: "none",
              borderRadius: "5px",
              padding: 10,
              color: "#fff",
              width: "100px",
              fontSize: 16,
              marginBottom: "40px",
            }}
          >
            Save
          </button>
        
        <button
          style={{
            marginRight: "50px",
            backgroundColor: "red",
            border: "none",
            borderRadius: "5px",
            padding: 10,
            color: "#fff",
            width: "100px",
            fontSize: 16,
            marginBottom: "40px",
          }}>
          Cancel
        </button>
      </div></div>}
      {addCategory === "addCategory" && <div>addCategory</div>}
      {addRecipe === "addRecipe" && <div>addRecipe</div>}
      {addBlog === "addBlog" && <div>addBlog</div>}
      {addAdvert === "addAdvert" && <div>addAdvert</div>}
      {addPage === "addPage" && <div>addPage</div>}
    </Dialog>
  );
};

export default AdminModal;
