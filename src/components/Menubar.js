import React from "react";
import "./styles/Menubar.css";

const Menubar = () => {
  return (
    <div className="menubar">
      <div className="menubar__logo">Logo</div>
      <ul className="menubar__list">
        <li>
          <i className="fa-regular fa-compass"></i>
        </li>
        <li>
          <i className="fa-regular fa-heart"></i>
        </li>
        <li>
          <i className="fa-regular fa-star"></i>
        </li>
        <li>
          <i className="fa-regular fa-folder"></i>
        </li>
        <li>
          <i className="fa-regular fa-bell"></i>
        </li>
        <li>
          <i className="fa-sharp fa-solid fa-sliders"></i>
        </li>
      </ul>
    </div>
  );
};

export default Menubar;
