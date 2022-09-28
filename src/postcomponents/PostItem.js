import React from "react";


const PostItem = ({post,handleClick}) => {

        return <div>
                <h1 onClick={handleClick} id={post.id}>{post.title}</h1>
        </div>

}

export default PostItem;