import React from "react";
import Post from "../Post";
import { connect } from "react-redux";
import s from "./posts.module.css";

const Posts = ({ syncPosts }) => {
    if (!syncPosts.length) {
        return (
            <div className={s.noPosts}>
                <p className="text-center">Постов пока нет</p>
            </div>
        );
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
