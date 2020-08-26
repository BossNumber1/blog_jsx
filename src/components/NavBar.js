import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav>
            <div
                className="nav-wrapper blue darken-1"
                style={{ padding: "0 2rem" }}
            >
                <span className="brand-logo">PostMen</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <NavLink to="/settings">Настройки</NavLink>
                    </li>
                    <li>
                        <NavLink to="/postmen">Посты</NavLink>
                    </li>
                    <li>
                        <NavLink to="/album">Альбом</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">Меню</NavLink>
                    </li>
                    <li>
                        <a href="/">Выйти</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
