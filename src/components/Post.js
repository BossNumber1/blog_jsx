import React from "react";

export default ({ post }) => {
    return (
        <div className="card" style={{ maxWidth: 18 + "rem" }}>
            <img src={post.ye} className="card-img-top" alt={post.ye} />
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">
                    {post.messagePost}
                    <footer className="footer pt-2">
                        <cite title="Source Title">{post.time}</cite>
                    </footer>
                </p>
                <a href="/#" className="btn btn-primary">
                    Читать дальше
                </a>
            </div>
        </div>
    );
};
