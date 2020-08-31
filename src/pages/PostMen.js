import React from "react";
import "materialize-css";
import PostForm from "../components/PostForm/PostForm";
import Posts from "../components/Posts";

const PostMen = () => {
    return (
        <div className="container pt-4">
            <h4>Посты</h4>
            <div className="row">
                <div className="col">
                    <PostForm />
                </div>
            </div>
            <div className="row pt-3">
                <div className="col">
                    <Posts />
                </div>
            </div>
        </div>
    );
};

export default PostMen;
