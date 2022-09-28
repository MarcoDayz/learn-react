import Posts from "./postcomponents/Posts";
import Loading from "./postcomponents/Loading";
import axios from "axios";
import React, {useState, useEffect} from "react";

const App = () => {
    const [post, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getPosts = async () => {
            const data = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            setPosts(data.data)
            setLoading(false)
        }
        getPosts()
    });

    if(!loading){
        return <Posts posts = {post}/>
    }else{
        return <Loading />
    }
}

export default App;