import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <br></br>
            <span className="sidebarTitle">ABOUT TDB</span>
            <img src="https://pbs.twimg.com/media/FGuvzExXoAEQlH3.jpg" 
            height={150} 
            width={150} 
            alt="Official Logo for The Developer Bootcamp"></img>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Ea earum optio, consectetur neque aliquid commodi consequuntur nemo. 
                Ad veritatis ipsum nam corporis autem!</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Web Development</li>
                <li className="sidebarListItem">Data Analysis</li>
                <li className="sidebarListItem">News & Opportunities</li>
                <li className="sidebarListItem">Your Time @ TDB</li>
            </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW TDB</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook-square"></i>
            <i className="sidebarIcon fa-brands fa-twitter-square"></i>
            <i className="sidebarIcon fa-brands fa-linkedin"></i>
        </div>
        </div>
    </div>
  )
}
