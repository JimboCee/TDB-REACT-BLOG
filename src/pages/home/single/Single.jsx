import Sidebar from "../../../components/sidebar/Sidebar";
import SinglePost from "../../../components/SinglePost/SinglePost";
import "./Single.css"

export default function Single({singlePost}) {
  return (
    <div className="single">
        <SinglePost singlePost = {singlePost}  />
        <Sidebar />
    </div>
  )
}
