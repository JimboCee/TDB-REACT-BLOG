import "./Register.css"
import { useState } from "react"
import axios from "axios"


export default function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError(false);
    try{
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
     res.data && window.location.replace("/login");
     //login page redirect 
    }catch(err){
      setError(true)
    }
    
    
  }
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
            
            <label 
            className="emailLabel">Username</label>
            <input 
            type="text" 
            className="registerInput" 
            placeholder="Enter Your Username" 
            onChange={e=>setUsername(e.target.value)}
            />
            <label 
            className="registerInput">Email</label>
            <input 
            type="text" 
            className="registerInput" 
            placeholder="Enter Your Email" 
            onChange={e=>setEmail(e.target.value)}
            />

            

            <label className="passwordLabel">Password</label>
            <input type="password" 
            className="passwordInput" 
            placeholder="Enter Your Password" onChange={e=>setPassword(e.target.value)} />
            
            <button className="registerButton" type="submit">Register</button>
        </form>
            <button className="registerLoginButton">Login</button>
            {error &&  <span style={{color:"red", marginTop:"10px"}}>Something Went Wrong :/</span>}
    </div>
  )
}
