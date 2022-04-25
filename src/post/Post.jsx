import "./Post.css"

export default function Post() {
  return (
    <div className="post">
      <img 
      className="postImg"
      src="https://i.pinimg.com/474x/54/0d/66/540d664c084dfe50d815876cff5cc31d.jpg"
      alt="test"
      />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategories">Data Analysis</span>
          <span className="postCategories">Web Development</span>
        </div>
        <span className="postTitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia blanditiis consequatur facilis eos dolor omnis maxime cumque unde officiis dolorem!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia blanditiis consequatur facilis eos dolor omnis maxime cumque unde officiis dolorem!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia blanditiis consequatur facilis eos dolor omnis maxime cumque unde officiis dolorem!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia blanditiis consequatur facilis eos dolor omnis maxime cumque unde officiis dolorem!
      </p>
    </div>
  )
}
