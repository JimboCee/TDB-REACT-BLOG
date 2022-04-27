import "./About.css"
import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
export default function Home() {
  return (
    <div className="About">
        <Header/>
        <div className="aboutText">
            <h1>About The Developer Academy</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Fuga dolorem repellat est eius commodi fugit magnam id possimus doloribus atque pariatur, deleniti dolores quo mollitia alias,
            sequi minus architecto delectus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla nihil sunt maxime adipisci dolorum saepe tenetur id ducimus 
            sed est quae expedita dolore reiciendis, delectus eum ut possimus. Nihil.
            <br></br><br></br>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim et quia vitae libero 
            molestiae similique assumenda nam cupiditate eos, rem eum totam corrupti fugiat, esse dolores molestias. 
            Commodi, quis eos.</p>
            <br></br><br></br>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Fuga dolorem repellat est eius commodi fugit magnam id possimus doloribus atque pariatur, deleniti dolores quo mollitia alias,
            sequi minus architecto delectus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nulla nihil sunt maxime adipisci dolorum saepe tenetur id ducimus 
            sed est quae expedita dolore reiciendis, delectus eum ut possimus. Nihil.
            <br></br><br></br>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim et quia vitae libero 
            molestiae similique assumenda nam cupiditate eos, rem eum totam corrupti fugiat, esse dolores molestias. 
            Commodi, quis eos.</p>
        </div>
        <div className="About">
            <Sidebar />
        </div>
        
    </div>
  )
}
