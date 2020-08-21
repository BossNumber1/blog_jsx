import React from "react";

export default ({ post }) => {
    return (
        <div className="card" style={{ maxWidth: 18 + "rem" }}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Vladimir_Putin_%282017-07-08%29.jpg/250px-Vladimir_Putin_%282017-07-08%29.jpg"
                className="card-img-top"
                alt="..."
            />
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
