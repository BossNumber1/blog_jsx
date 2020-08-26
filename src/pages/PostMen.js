import React from "react";
import "materialize-css";
import PostForm from "../components/PostForm/PostForm";
import Posts from "../components/Posts";
import FetchedPosts from "../components/FetchedPosts";

const PostMen = () => {
    return (
        <div className="container pt-3">
            <div className="row">
                <div className="col">
                    <PostForm />
                </div>
            </div>
            <div className="row pt-3">
                <div className="col">
                    <Posts />
                </div>
                <div className="col">
                    <h2>Асинхронные посты</h2>
                    <FetchedPosts />
                </div>
            </div>
        </div>
    );
};

export default PostMen;