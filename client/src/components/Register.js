
import loginIcon from "../assets/images/login-icon.png"

const Register = (props) => {
  return (
    <div>
      <div className="loginIcon">
        <img src={loginIcon} alt="login Icon" />
      </div>
      <span className='text_primary'>Welcome</span>
      <form action="">
        <label htmlFor="text">Username</label>
        <input type="text" placeholder='Username' />
        <label htmlFor="email">Email</label>
        <input type="text" placeholder='Email' />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='Password'/>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" placeholder='Password'/>
   
        <button>REGISTER NOW</button>
      </form>

    <p>Already a Member? <b className='text_primary pointer' onClick={()=> props.handleAuthType("login")}>Login</b></p>
    </div>
  )
}

export default Register