import React, {useState}  from "react";
import PostItem from "./PostItem"
import axios from "axios";
import BodyPost from "./BodyPost";

const Posts = ({posts}) => {

    const [clicked, setClicked] = useState(false)
    const [poems, setPoems] = useState([])

    const handleClick = (e) => {
        const getPoem = async () => {
            const poems = await axios.get(`https://jsonplaceholder.typicode.com/posts/${e.target.id}`)
            console.log(poems.data.body)
            setPoems(poems)
            setClicked(true)
        }
        getPoem()
    }
    
    if(clicked){
        return <BodyPost poems={poems} state={setClicked}/>
    }else{
        return posts.map(post => (
                <PostItem post={post} key={post.id} handleClick={handleClick}/>
            
        ))
    }
    
}

export default Posts;