
import loginIcon from "../assets/images/login-icon.png"

const Login = (props) => {
  return (
    <div>
      <div>
        <div className="loginIcon">
          <img src={loginIcon} alt="login Icon" />
        </div>
        <span className='text_primary'>Welcome</span>
        <h4>Login To Your Account</h4>

        <form action="">
          <label htmlFor="email">Email</label>
          <input type="text" placeholder='ayo@gmail.com' />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='********'/>
          <div className='d-flex align-items-baseline justify-content-between mb-md-2'>
            <h4 
              className='pointer' 
              onClick={()=> props.handleAuthType("forgot-password")}>
              Forgot Password?
            </h4>
            <div>
              <input type="checkbox" name="" id="" />
              <span>Remember me</span>
            </div>
          </div>
          <button>LOGIN</button>
        </form>
        <p>Don’t have an account ? <b className='text_primary pointer' onClick={()=> props.handleAuthType("register")}>Register Now</b></p>
      </div>
    </div>
  )
}

export default Login