import Sidebar from "../../../components/sidebar/Sidebar";
import SinglePost from "../../../components/SinglePost/SinglePost";
import "./Single.css";
import { useParams } from "react-router-dom";

// console.log(useParams());
export default function Single() {
  const { id } = useParams();
  return (
    <div className="single">
      <SinglePost id={id} />
      <Sidebar />
    </div>
  );
}