import React from "react";
import { NavLink } from "react-router-dom";
import s from "./navbar.module.css";

export const NavBar = () => {
    return (
        <nav>
            <div
                className="nav-wrapper blue darken-1"
                style={{ padding: "0 2rem" }}
            >
                <span className="brand-logo">ВСети</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <NavLink to="/settings" activeClassName={s.activeLink}>
                            Настройки
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile" activeClassName={s.activeLink}>
                            Профиль
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/album" activeClassName={s.activeLink}>
                            Альбом
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu" activeClassName={s.activeLink}>
                            Меню
                        </NavLink>
                    </li>
                    <li>
                        <a href="/">Выйти</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
