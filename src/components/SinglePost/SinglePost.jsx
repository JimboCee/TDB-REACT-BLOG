import "./SinglePost.css";

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img
            src="https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Blog Post Header"
            className="singlePostImg"
            img/>
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet consectetur.
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-file-pen"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Name </b></span>
                <span className="singlePostDate">1 Hour ago</span>
            </div>
            <p className="singlePostDescription">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius eum sint totam fugiat,
                 cum odio nemo dolorum illo. Quibusdam dicta vel architecto dolorem eum ipsam ducimus officiis quo 
                 commodi distinctio.
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ea, temporibus adipisci 
                 exercitationem maxime nihil dolor laborum, fugit quaerat quas cum est corporis id assumenda 
                 voluptate a alias nisi laudantium?

                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius eum sint totam fugiat,
                 cum odio nemo dolorum illo. Quibusdam dicta vel architecto dolorem eum ipsam ducimus officiis quo 
                 commodi distinctio.
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ea, temporibus adipisci 
                 exercitationem maxime nihil dolor laborum, fugit quaerat quas cum est corporis id assumenda 
                 voluptate a alias nisi laudantium?

                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius eum sint totam fugiat,
                 cum odio nemo dolorum illo. Quibusdam dicta vel architecto dolorem eum ipsam ducimus officiis quo 
                 commodi distinctio.
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ea, temporibus adipisci 
                 exercitationem maxime nihil dolor laborum, fugit quaerat quas cum est corporis id assumenda 
                 voluptate a alias nisi laudantium?
            </p>
        </div>
    </div>
  )
}
