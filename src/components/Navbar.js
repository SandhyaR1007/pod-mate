import React from "react";
import "./styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__search">
        <input
          placeholder="Search something..."
          className="navbar__search-input"
        />
        <i className="fa-solid fa-magnifying-glass navbar__search-magnifying-glass"></i>
      </div>
      <div>
        <span>
          <i className="fa-regular fa-heart"></i>
        </span>
        <span>
          {" "}
          <i className="fa-regular fa-bell"></i>
        </span>
        <div>Profile</div>
      </div>
    </div>
  );
};

export default Navbar;
