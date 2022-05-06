import Post from "../post/Post";
import "./Posts.css";

export default function Posts({ posts, setSinglePost }) {
  return (
    <div className="posts">
      {posts.map((p, i) => (
        <Post key={i}post={p} setSinglePost = {setSinglePost} />
      ))}
    </div>
  );
}