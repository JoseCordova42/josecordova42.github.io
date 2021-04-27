import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="row">
            <div className="col-md-12">
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Jose Cordova</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav justify-content-end">
                                <Link
                                    className={window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                                    to="/about">About</Link>
                                <Link
                                    className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                                    to="/portfolio">Portfolio</Link>
                                {/* <Link
                                    className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                                    to="/contact">Contact</Link> */}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

    );
};

export default Navbar;
