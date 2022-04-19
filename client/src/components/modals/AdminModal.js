import React from "react";
import Dialog from '@mui/material/Dialog';
import { categories } from "../admin/data";


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
      {addCategory === "addCategory" && <div> <div className="d-flex m-3 justify-content-between">
        <h5 className="p-3">Add Category</h5>
      </div>

      <hr className="m-3" />
      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Icon</p>
        <div 
          
          className="grid w-75 h-75 p-1"
        >
          {categories.map((item, index) => (
            <div key={index} className="text-center d-flex align-items-center">
              <input type="radio"  />
              <label className="px-3">{item.icon}</label>
            </div>
          ))}
        </div>
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Title</p>
        <input
          className="w-75 h-75 p-1 border"
          type="email"
          required
          id="email"
          autoComplete="email"
          autoFocus
          placeholder="title"
        />
      </div>
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Permlink</p>
        <input
          className="w-75 h-75 p-1 border"
          type="email"
          required
          id="email"
          autoComplete="email"
          autoFocus
          placeholder="Permlink"
        />
      </div>
      <hr className="m-3" />
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
      {addRecipe === "addRecipe" && <div>      <div className="d-flex m-3 justify-content-between">
        <h5 className="p-3">Add Recipe</h5>
      </div>

      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Category</p>
        <input
          className="w-75 h-75 p-1 border"
          type="email"
          required
          id="email"
          autoComplete="email"
          autoFocus
          placeholder="category"
        />
      </div>
      <hr className="m-3" />

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
      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Permlink</p>
        <input
          className="w-75 h-75 p-1 border"
          type="text"
          required
          id="name"
          autoComplete="name"
          autoFocus
          placeholder="permlink"
        />
      </div>
      <hr className="m-3" />

      <div className="row m-3">
        <p className="w-25 h-75 text-end ptag">Difficulty</p>
        <div className="d-flex justify-content-between   w-75 h-75 p-1">
          <div className="">
            <input type="radio" />
            <label>Easy</label>
          </div>
          <div className="">
            <input type="radio" />
            <label>Medium</label>
          </div>
          <div className="">
            <input type="radio" />
            <label>Hard</label>
          </div>
          <div></div>
        </div>
      </div>
      <hr className="m-3" />

      <div className="d-flex  align-items-center w-80 m-3">
        <div className="w-50 row m-1">
      <p className="w-25 h-75 text-end ptag px-4">Prepare Time</p>
          <input
            className="w-75 h-75 p-1 border"
            type="text"
            required
            id="name"
            autoComplete="name"
            autoFocus
            placeholder="prepareTime"
          />
        </div>
        <div className="w-50 row m-1">
          <p className="w-25 h-75 text-end ptag px-4">Cooking Time</p>
          <input
            className="w-75 h-75 p-1 border"
            type="text"
            required
            id="name"
            autoComplete="name"
            autoFocus
            placeholder="cookingTime"
          />
        </div>
      </div>
      <hr className="m-3" />

      <div className="d-flex  align-items-center w-80 m-3">
        <div className="w-50 row m-1">
      <p className="w-25 h-75 text-end ptag px-4">Serves</p>
          <input
            className="w-75 h-75 p-1 border"
            type="text"
            required
            id="name"
            autoComplete="name"
            autoFocus
            placeholder="serves"
          />
        </div>
        <div className="w-50 row m-1">
          <p className="w-25 h-75 text-end ptag px-4">Calories </p>
          <input
            className="w-75 h-75 p-1 border"
            type="text"
            required
            id="name"
            autoComplete="name"
            autoFocus
            placeholder="calories"
          />
        </div>
      </div>
      <hr className="m-3" />
     

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Description</p>
        <textarea
          className="w-75 h-75 p-1 text-wrap border"
          type="text"
          rows={5}
          placeholder="lggjhdPassw jhhdjfhfhjhf ordlggjhdPasswPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw jhhdjfhfhjhf ordlggjhdPassw"
        />
      </div>

      <hr className="m-3" />

      <div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Direction</p>
        <textarea
          className="w-75 h-75 p-1 text-wrap border"
          type="text"
          rows={5}
          placeholder=""
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
      {addBlog === "addBlog" &&     <div>
            <div className="d-flex m-3 justify-content-between">
      <h5 className="p-3" >Add Blog</h5>
      </div>

      <hr className="m-3" />

      <div className="d-flex  align-items-center w-80 m-3">
        <div className="w-50 row m-1">
      <p className="w-25 h-75 text-end ptag px-4">Prepare Time</p>
          <input
            className="w-75 h-75 p-1 border"
            type="text"
            required
            id="name"
            autoComplete="name"
            autoFocus
            placeholder="prepareTime"
          />
        </div>
        <div className="w-50 row m-1">
          <p className="w-25 h-75 text-end ptag px-4">Cooking Time</p>
          <input
            className="w-75 h-75 p-1 border"
            type="text"
            required
            id="name"
            autoComplete="name"
            autoFocus
            placeholder='cookingTime'
          />
        </div>
      </div>
      <hr className="m-3" />

<div className="row  m-3">
 <p className="w-25 h-75 text-end ptag">Title</p>
 <input className="w-75 h-75 p-1 border"
   type="text"
   required
   id="name"
   autoComplete="name"
   autoFocus
   placeholder="title"
 />
</div>
<hr className="m-3" />

<div className="row  m-3">
 <p className="w-25 h-75 text-end ptag">Permlink</p>
 <input className="w-75 h-75 p-1 border"
   type="text"
   required
   id="name"
   autoComplete="name"
   autoFocus
   placeholder='permlink'
 />
</div>
<hr className="m-3" />

<div className="row  m-3">
 <p className="w-25 h-75 text-end ptag">Short Description</p>
 <textarea className="w-75 h-75 p-1 border"
   type="text"
rows={5}
   id="name"
   autoComplete="name"
   placeholder="shortDesc"
 />
</div>
<hr className="m-3" />

<div className="row  m-3">
 <p className="w-25 h-75 text-end ptag">Description</p>
 <textarea className="w-75 h-75 p-1 border"
   type="text"
rows={10}
   id="name"
   autoComplete="name"
   placeholder="desc"
 />
</div>
<hr className="m-3" />

<div className="row  m-3">
        <p className="w-25 h-75 text-end ptag">Image</p>
        <input
          className="w-50 h-75 p-1 border"
          type="file"
          required
          id="phone"
          autoComplete="number"
          autoFocus
          placeholder="image"
        />
         <img className="w-25 h-75 p-1" src="" alt="image" style={{width: "30px", height:"30px", borderRadius:"10px"}} />
      </div>
      <hr className="m-3" />


      <div className="row  m-3">
 <p className="w-25 h-75 text-end ptag">Meta Description</p>
 <input className="w-75 h-75 p-1 border"
   type="text"
   required
   id="name"
   autoComplete="name"
   autoFocus
   placeholder="metaDesc"
 />
</div>
<hr className="m-3" /> 



    </div>}
      {addAdvert === "addAdvert" && <div>addAdvert</div>}
      {addPage === "addPage" && <div>addPage</div>}
    </Dialog>
  );
};

export default AdminModal;
