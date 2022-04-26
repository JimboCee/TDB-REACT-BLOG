import "./Settings.css"
import Sidebar from "../../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form className="settingsForm">
                <label>User Picture</label>
                <div className="settingsProfilePic">
                    <img src="https://images.pexels.com/photos/942872/pexels-photo-942872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingsProfilePicIcon fa-solid fa-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                </div>
                <label>User Name</label>
                <input type="text" placeholder="user01" />
                <label>Email</label>
                <input type="email" placeholder="user01@thedeveloperacademy.com" />
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
