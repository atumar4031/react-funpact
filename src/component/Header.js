import React from "react";
import logo from "../logo.svg"
export default function Header() {
    return (
        <nav className="nav-bar">
            <div className="brand">
                <img src={logo} className="logo" />
                <h1 className="brand">attech</h1>
            </div>
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}