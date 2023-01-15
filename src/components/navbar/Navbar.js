import React from "react";
import "../styles/Navbar.css";
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
      <div className="navbar__info">
        <span className="navbar__info-heart">
          <i className="fa-regular fa-heart"></i>
        </span>
        <span className="navbar__info-bell">
          <i className="fa-regular fa-bell"></i>
        </span>
        <span className="navbar__profile">
          <img
            className="navbar__profile-img"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="profile"
          />
          <span className="navbar__profile-details">
            <span>Michael Rome</span>
            <span>mrome@gmail.com</span>
          </span>
          <span className="navbar__profile-details__arrow">
            <i className="fa-solid fa-angle-down"></i>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
