import React from "react";
import s from "./profile.module.css";

export default ({ icon, text }) => {
    return (
        <div className={s.block}>
            <div className={s.icon}>
                <ul className="left hide-on-med-and-down">
                    <li>
                        <i className="material-icons brown-text">{icon}</i>
                    </li>
                </ul>
            </div>
            <div className={s.text}>{text}</div>
        </div>
    );
};
