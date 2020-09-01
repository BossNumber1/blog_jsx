import React from "react";
import "materialize-css";
import { useRoutes } from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./general/navbar/NavBar";

const App = () => {
    const routes = useRoutes(true);
    const isAuthenticated = 1;
    return (
        <Router>
            {isAuthenticated === 1 && <NavBar />}
            <div className="container">{routes}</div>
        </Router>
    );
};

export default App;
