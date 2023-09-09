import { Link } from 'react-router-dom'
import '../styles/landingpage.css'

export default function Landingpage({handleLogout}) {
    return(
        <div className='landingpage-main-div'>
            <h1>Welcome to Expedition</h1>
            <div className='register-login-div'>
            <form className='register-form' action="">
                <label htmlFor="register">Create a Profile</label>
                <input type="text" placeholder='username' />
                <input type="text" placeholder='email' />
                <input type="password" placeholder='password' />
                <button type='submit'>Register</button>
            </form>
            <p>or</p>
            <form className='register-form' action="">
                <label htmlFor="login">Login</label>
                <input type="text" placeholder='username' />
                <input type="password" placeholder='password' />
                <button type='submit'>Register</button>
            </form>
            </div>
            <Link to='/home'>Begin</Link>
        </div>
    )
}