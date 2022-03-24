import { Link } from 'react-router-dom'

import '../../assets/styles/adminStyles/login.scss'

const LoginAdmin = () => {
  return (
    <div className='wrapper loginAdmin'>
      <div>
        <h2>Admin Login</h2>
        <form>
          <input type="text" placeholder='Email'/>
          <input type="password" placeholder='Password' />
          <Link to="/admin/dashboard">
          <button>Login</button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default LoginAdmin