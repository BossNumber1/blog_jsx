import React from "react";
import Post from "./Post";
import { connect } from "react-redux";

const Posts = ({ syncPosts }) => {
    if (!syncPosts.length) {
        return <p className="text-center">Постов пока нет</p>;
    }
    return (
        <div className="pl-5">
            {syncPosts.map((post) => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        syncPosts: state.posts.posts,
    };
};

export default connect(mapStateToProps, null)(Posts);
