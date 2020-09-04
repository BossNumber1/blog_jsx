import React from "react";
import s from "./album.module.css";
import photo1 from "./img/photo1.png";

function Album() {
    return (
        <div className="container">
            <div className={s.body}>
                <img src={photo1} />
            </div>
        </div>
    );
}

export default Album;
