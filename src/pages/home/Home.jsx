import "./Home.css"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"

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