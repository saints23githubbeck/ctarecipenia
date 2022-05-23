import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { logIn } from "../../appState/actions/AuthAction.js";
import '../../assets/styles/adminStyles/login.scss'

const LoginAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const history = useLocation();
  const {isLoading, error} = useSelector((state) => state.user)
  console.log(error)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [validationFired, setValidationFired] = useState(false);
  const [errors, setErrors] = useState({});
   
   
   function validate() {
     setValidationFired(true);
     let validated = true;
     let errors = {};
     Object.keys(formData).forEach((field) => {
       if (formData[field] === "") {
         errors[field] = `${field} is required`;
         validated = false;
       }
       if (field === "email") {
         const test =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(formData.email);
       if (!test) {
           errors["email"] = "Email Doesn't match";
           validated = false;
         }
       }
     });
     setErrors(errors);
     return validated;
   }
 
   useEffect(() => {
     if (validationFired) {
       validate();
     }
   }, [validationFired, formData]);


  const handleinput = (e) => { 
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    let test = validate();
    if (test) {
     dispatch(logIn(formData, navigate, history));
    console.log('loged in', formData)
    }
  };
  return (
    <div className='wrapper loginAdmin'>
      <div>
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            onChange={handleinput}
            value={formData?.email}
            name="email" 
            placeholder='Email'
          />

{errors?.email && <p style={{fontSize:"12px", color:"red", textAlign:"center", margin:"-10px 10px 5px 10px" }}>{errors.email}</p>}

          <input 
            type="password"
            value={formData?.password}
            onChange={handleinput}
            name="password"
            placeholder='Password' 
          />

{errors?.password && <p style={{fontSize:"12px", color:"red", textAlign:"center", margin:"-10px 10px 5px 10px" }}>{errors.password}</p>}

          {/* <Link to="/admin/dashboard"> */}
{error && <p>{error}</p>}
          <button type="submit">{isLoading? "Loading ..." : "LOGIN"}</button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  )
}

export default LoginAdmin;