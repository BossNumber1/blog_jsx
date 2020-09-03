import React from "react";

export default ({ post }) => {
    return (
        <div className="media pb-4">
            <div className="media-body">
                <h5 className="mb-1">{post.title}</h5>
                <p className="card-text pt-3">{post.messagePost}</p>
                <p className="card-text">
                    <small className="text-muted">{post.time}</small>
                </p>
            </div>
            <img
                src={post.fileImg}
                alt="картинка к посту"
                style={{ width: 200, borderRadius: 5 }}
            />
        </div>
    );
};
