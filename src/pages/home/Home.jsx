import "./Home.css"
import Header from "../../header/Header"
import Posts from "../../posts/Posts"
import Sidebar from "../../sidebar/Sidebar"

export default function Home() {
  return (
    <div className="Home">
        <Header/>
        <div className="home">
          <Posts />
          <Sidebar />
        </div>
    </div>
  )
}
