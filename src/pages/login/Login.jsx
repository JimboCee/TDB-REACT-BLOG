import "./Login.css"
import {useNavigate} from "react-router-dom"

export default function Login() {
  let navigate = useNavigate();
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
        <form className="loginForm">
            
            <label className="emailLabel">Email</label>
            <input type="text" 
                    className="emailLabel" 
            placeholder="Enter Your Email" />

            <label className="passwordLabel">Password</label>
            <input type="password" 
            className="passwordInput" 
            placeholder="Enter Your Password" />
            <button className="loginButton">Login</button>
        </form>
            <button onClick={() => {
              navigate("/Register")
            }} className="loginRegisterButton">Register</button>
    </div>
  )
}
