import React from "react";

export default ({ post }) => {
    debugger;
    return (
        <div className="card" style={{ maxWidth: 18 + "rem" }} className="pt-3">
            {post.fileImg && (
                <img
                    src={post.fileImg}
                    className="card-img-top"
                    alt="картинка для поста"
                />
            )}
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">
                    {post.messagePost}
                    <footer className="footer pt-2">
                        <cite title="Source Title">{post.time}</cite>
                    </footer>
                </p>
                {post.messagePost && post.messagePost.length > 500 && (
                    <a href="/#" className="btn btn-primary">
                        Читать дальше
                    </a>
                )}
            </div>
        </div>
    );
};
