import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Album from "./pages/Album";
import PostMen from "./pages/PostMen";
import AuthPage from "./pages/AuthPage";
import Menu from "./pages/Menu";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/settings" exact>
                    <Settings />
                </Route>
                <Route path="/profile" exact>
                    <Profile />
                </Route>
                <Route path="/postmen" exact>
                    <PostMen />
                </Route>
                <Route path="/album" exact>
                    <Album />
                </Route>
                <Route path="/menu" exact>
                    <Menu />
                </Route>

                <Redirect to="/menu" />
            </Switch>
        );
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>

            <Redirect to="/" />
        </Switch>
    );
};
