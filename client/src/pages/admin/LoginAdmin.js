import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { logIn } from "../../appState/actions/AuthAction.js";
import '../../assets/styles/adminStyles/login.scss'

const LoginAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const history = useLocation();
  const {isLoading, error} = useSelector(state => state.user)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleinput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log('lod,mvc')
    
  };
  const handleLogin = (e) => {
    e.preventDefault();
     dispatch(logIn(formData, navigate, history));
    console.log('logining ')

  };
  return (
    <div className='wrapper loginAdmin'>
      <div>
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
          required
          type="text"
          onChange={handleinput}
          value={formData.email}
          name="email" 
           placeholder='Email'/>
          <input 
          required
          type="password"
          value={formData.password}
          onChange={handleinput}
          name="password"
         placeholder='Password' />
          {/* <Link to="/admin/dashboard"> */}
{error && <p>{error}</p>}
          <button type="submit">{isLoading? "Loading ..." : "LOGIN"}</button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  )
}

export default LoginAdmin