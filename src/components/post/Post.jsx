import "./Post.css";
import { Link } from "react-router-dom";

export default function Post({ post, setSinglePost }) {
  const PF = "http://localhost:5000/images/";

  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCategories">
          {post.categories.map((c, i) => (
            <span className="postCategories" key={i}>
              {c.name}
            </span>
          ))}
        </div>
        <Link
          onClick={() => {
            setSinglePost(post);
          }}
          to={`/Single/${post._id}`}
          className="link"
        >
          <span className="postTitle">{post.title}</span>
        </Link>
        {/* <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link> */}
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDescription">{post.desc}</p>
    </div>
  );
}
