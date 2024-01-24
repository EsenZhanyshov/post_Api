import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink className="navLink" to={"/"}>
        Home
      </NavLink>
    </nav>
  );
};

export default Navbar;
