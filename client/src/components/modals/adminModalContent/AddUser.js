import React, { useEffect } from 'react'
import { RiCloseFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { handleState, registerUserByAdmin, setUserError } from '../../../appState/actions/AdminAuthAction';

const AddUser = ({ onclose }) => {
  const dispatch = useDispatch();
  const {
    username,
    firstName,
    lastName,
    country,
    userGroup,
    image,
    description,
    password,
    email,
    secret,
    error

  } = useSelector((state) => state.user);

  const handleSubmit = () => {
    const payload = {
      username:username,
    firstName:firstName,
    lastName:lastName,
    country:country,
    userGroup:userGroup,
    image:image,
    description:description,
    password:password,
    email:email,
    secret:secret
    };
    dispatch(registerUserByAdmin(payload, onclose));
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(setUserError(""));
    }, 8000);
  }, [error]);


  return (
    <div>
    <div className="d-flex m-3 justify-content-between align-items-center">
      <h5 className="p-3">Add User</h5>
      <h5 onClick={onclose} style={{ cursor: "pointer" }}>
        {" "}
        <RiCloseFill className="h3 text-danger" />
      </h5>
    </div>

    <div className="row  m-3">
      <p className="w-25 h-75 text-end ptag">Usergroup</p>
      <input 
      onChange={(e) =>
              dispatch(handleState("userGroup", e.target.value))
            }
            value={userGroup}
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
      onChange={(e) =>
              dispatch(handleState("username", e.target.value))
            }
            value={username}
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
      onChange={(e) =>
              dispatch(handleState("firstName", e.target.value))
            }
            value={firstName}
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
      onChange={(e) =>
              dispatch(handleState("lastName", e.target.value))
            }
            value={lastName}
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
      onChange={(e) =>
              dispatch(handleState("email", e.target.value))
            }
            value={email}
        className="w-75 h-75 p-1 border"
        type="email"
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
      onChange={(e) =>
              dispatch(handleState("country", e.target.value))
            }
            value={country}
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
      onChange={(e) =>
              dispatch(handleState("image", e.target.value))
             }
          value={image}
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
      onChange={(e) =>
              dispatch(handleState("password", e.target.value))
            }
            value={password}
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
      // onChange={(e) =>
      //         dispatch(handleState("category", e.target.value))
      //       }
      //       value={category}
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
      <p className="w-25 h-75 text-end ptag">Secret</p>
      <input 
      onChange={(e) =>
              dispatch(handleState("secret", e.target.value))
            }
            value={secret}
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
      <p className="w-25 h-75 text-end ptag">Description</p>
      <textarea
      onChange={(e) =>
        dispatch(handleState("description", e.target.value))
      }
      value={description}
        className="w-75 h-75 p-1 text-wrap border"
        type="text"
        rows={4}
        placeholder="Description"
      />
    </div>

    <div className="m-3">
      <button
      onClick={handleSubmit}
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
        Create
      </button>

      <button
        onClick={onclose}
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
        }}
      >
        Cancel
      </button>
    </div>
  </div>
  )
}

export default AddUser