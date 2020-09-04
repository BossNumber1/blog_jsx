import React from "react";
import PostForm from "../components/PostForm/PostForm";
import Posts from "../components/Posts/Posts";

const PostMen = () => {
    return (
        <div className="container pt-4">
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
