import "./Register.css"


export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
        <form className="registerForm">
            
            <label 
            className="emailLabel">Username</label>
            <input 
            type="text" 
            className="emailLabel" 
            placeholder="Enter Your Username" 
            />
            <label 
            className="emailLabel">Email</label>
            <input 
            type="text" 
            className="emailLabel" 
            placeholder="Enter Your Email" 
            />

            

            <label className="passwordLabel">Password</label>
            <input type="password" 
            className="passwordInput" 
            placeholder="Enter Your Password" />
            <button className="registerButton">Register</button>
        </form>
            <button className="registerLoginButton">Login</button>
    </div>
  )
}
