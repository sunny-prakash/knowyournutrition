import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
    return (
        <nav className="nav_bar georgia navy">
            <div className="ml5">
                <span className="f2">
                    <img src={logo} alt="Logo" style={{ maxWidth: "4.8rem", maxHeight: "auto", objectFit: "contain" }} />
                    <span className="ml3 fw6">Know Your Nutrition</span>
                </span>
            </div>
        </nav>
    );
};

export default Navbar;
