import React from "react";
import s from "./album.module.css";
import photo1 from "./img/photo1.png";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";

class Album extends React.Component {
    constructor() {
        super();
        this.state = {
            images: [photo1, img2, img3],
            currentImageIndex: 0,
            isCycleMode: false,
            canGoPrev: false,
            canGoNext: true,
        };
    }

    _makeNextStep = (currentIndex) => {
        let newIndex = currentIndex;

        if (currentIndex < this.state.images.length - 1) {
            newIndex = this.state.currentImageIndex + 1;
            this.setState({ canGoPrev: true });
        }

        if (newIndex === this.state.images.length - 1) {
            this.setState({ canGoNext: false });
        }

        return newIndex;
    };

    _makePrevStep = (currentIndex) => {
        let newIndex = currentIndex;

        if (currentIndex > 0) {
            newIndex = this.state.currentImageIndex - 1;
            this.setState({ canGoNext: true });
        }

        if (newIndex === 0) {
            this.setState({ canGoPrev: false });
        }

        return newIndex;
    };

    nextSlideHandler = (e) => {
        let currentIndex = this.state.currentImageIndex;
        let newIndex = currentIndex;

        if (e.currentTarget.dataset.direction === "next") {
            newIndex = this._makeNextStep(currentIndex);
        } else {
            newIndex = this._makePrevStep(currentIndex);
        }

        this.setState({
            currentImageIndex: newIndex,
        });
    };

    render() {
        return (
            <div className="container">
                <div className={s.body}>
                    <div>
                        <button
                            disabled={!this.state.canGoPrev}
                            data-direction="prev"
                            onClick={this.nextSlideHandler}
                        >
                            PREV
                        </button>
                    </div>
                    <div>
                        <img
                            src={
                                this.state.images[this.state.currentImageIndex]
                            }
                            alt="photo"
                        />
                    </div>
                    <div>
                        <button
                            disabled={!this.state.canGoNext}
                            data-direction="next"
                            onClick={this.nextSlideHandler}
                        >
                            NEXT
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Album;
