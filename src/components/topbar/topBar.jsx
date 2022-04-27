import "./topBar.css";

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
            <li className="topListItem">HOME</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">ABOUT TDA</li>
            <li className="topListItem">LOGIN</li>
          </ul>
        </div>

        <div className="topRight">
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