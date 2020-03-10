import React from "react";
import "./navbar.css";
import NavbarItem from "./NavbarItem";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-categories">
            <div className="collapse navbar-collapse categories">
                <NavbarItem name={"Snowboard"} />
                <NavbarItem name={"Boots"} />
                <NavbarItem name={"Goggles"} />
                <NavbarItem name={"Gloves"} />
            </div>
        </nav>
    );
}

export default Navbar;
