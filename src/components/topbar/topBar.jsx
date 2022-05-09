import "./topBar.css";
import { Link } from "react-router-dom";
export default function topBar() {
  
  return (
      <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        </div>

        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem"><Link to='/'>HOME</Link></li>
            <li className="topListItem"><Link to='/write'>WRITE</Link></li>
            <li className="topListItem"><Link to='/about'>ABOUT</Link></li>            
          </ul>
        </div>

        <div className="topRight">
          <ul className="rightList">
            <li><Link to='/Login'>LOGIN</Link></li>
            <li><Link to='/Register'>REGISTER</Link></li>
          </ul>
          <img
          className="topImg" 
          src="https://images.pexels.com/photos/942872/pexels-photo-942872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="An Open Book, placeholder for UserIcons"
          />
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
  );
}