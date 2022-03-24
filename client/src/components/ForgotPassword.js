
import forgotIcon from "../assets/images/forgot-icon.png"


const ForgotPassword = (props) => {
  return (
    <div>
      <div className="forgotIcon">
          <img src={forgotIcon} alt="forgot Icon" />
        </div>
        <form action="">
          <label htmlFor="email">Email</label>
          <input type="text" placeholder='ayo@gmail.com' />
          <button>LOGIN</button>
        </form>
      <p>Don’t have an account ? <b className='text_primary pointer' onClick={()=> props.handleAuthType("register")}>Register Now</b></p>
    </div>
  )
}

export default ForgotPassword