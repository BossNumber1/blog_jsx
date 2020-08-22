import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav>
            <div
                class="nav-wrapper blue darken-1"
                style={{ padding: "0 2rem" }}
            >
                <span class="brand-logo">PostMen</span>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
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
