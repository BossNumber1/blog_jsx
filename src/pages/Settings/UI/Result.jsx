import React from "react";
import { NavLink } from "react-router-dom";
import s from "../settings.module.css";

export default ({ fileImg, firstName, secondName, age, country }) => {
    return (
        <div className="row">
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image mx-auto d-block pt-3">
                        {fileImg ? (
                            <div className={s.ava}>
                                <img src={fileImg} alt="аватарка" />
                            </div>
                        ) : (
                            <div className={s.avaNoume}>
                                <img
                                    src="https://www.meme-arsenal.com/memes/5b1fb1df3ef1f1b0369618d6a33017d4.jpg"
                                    alt="без аватарки"
                                />
                            </div>
                        )}
                    </div>
                    <div className="card-content">
                        {firstName && secondName && age && country ? (
                            <p>
                                {firstName} {secondName}, {age} лет, {country}
                            </p>
                        ) : (
                            <p>Иван Иванов, 120 лет, London</p>
                        )}
                    </div>
                    <div className="card-action">
                        <NavLink to="/profile">Перейти в профиль</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};
