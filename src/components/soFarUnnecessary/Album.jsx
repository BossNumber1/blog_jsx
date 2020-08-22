import React from "react";

export default () => {
    return (
        <div>
            <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-ride="carousel"
            >
                <div className="carousel-inner display: inline-block + float: none">
                    <div className="carousel-item active">
                        <img
                            src="https://lh3.googleusercontent.com/proxy/ApV-ydrvAjhdc19hHI61LOr_d_JrOmhYrRnrlGlOiqsfGDtKYAmGYYlvjFttCKUqafJytpTzAlFw1IcbSstkIeWRej9JQoq_FtDGg395EBKVqIEE-kj0ig"
                            className="d-block w-100 text-center "
                            style={{ maxWidth: 512, maxHeight: 385 }}
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleFade"
                    role="button"
                    data-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleFade"
                    role="button"
                    data-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};
