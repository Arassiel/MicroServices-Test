import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";


export default() => {
    return (
    <div className="container">
        <h1>Post memes</h1>
        <PostCreate/>
        <hr />
        <h1>Post</h1>
        <PostList/>
    </div>
    );
};