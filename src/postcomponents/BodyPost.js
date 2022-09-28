import React from "react";

const BodyPost = ({poems, state}) => {

    const handleReturn = () => {
        state()
    }

    return <div>
        <h1>{poems.data.body}</h1>
        <button onClick={handleReturn}>Return</button>
    </div>
}

export default BodyPost;