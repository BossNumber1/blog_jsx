import React from "react";

export default ({ post }) => {
    return (
        <>
            {/* // <div className="card mb-3"> */}
            {/* <div className="card"> */}
            {/* <div
                className="card"
                style={{
                    maxWidth: 18 + "rem",
                    // backgroundColor: "orange",
                    // width: "300px !important",
                }}
                className="pt-3"
            >
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
            //----------------------------------------------- */}
            {/* <div className="card mb-3" style={{ maxWidth: 540 }}> */}
            {/* ------------------------------------------------------------------------------------------------------- */}
            {/* <div className="row no-gutters">
                    <div className="col-md-4">
                        <img
                            src={post.fileImg}
                            className="card-img"
                            style={{ marginLeft: 11 }}
                            alt="картинка для поста"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.messagePost}</p>
                            <p className="card-text">
                                <small className="text-muted">
                                    {post.time}
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="media">
                <div className="media-body">
                    <h5 className="mt-0 mb-1">{post.title}</h5>
                    <p className="card-text pt-3">{post.messagePost}</p>
                    <p className="card-text">
                        <small className="text-muted">{post.time}</small>
                    </p>
                </div>
                <img
                    src="https://cdnimg.rg.ru/img/content/177/99/72/iStock-10040076101000_d_850.jpg"
                    alt="картинка к посту"
                    style={{ width: 200, borderRadius: 5 }}
                />
            </div>
        </>
    );
};
