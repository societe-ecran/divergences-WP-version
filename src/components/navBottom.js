import React from "react";
import "../assets/css/main.css";
import { Link } from "gatsby";
import "../fonts/fonts.css";
import "../images/panier.png";

const style = {
  color: "black",
  textDecoration: "none",
};

const activeStyle = {
  color: "grey",
};

const NavBottom = () => (
  <ul className="nav bg-white fixed-bottom borderGeneral-top justify-content-between  pl-3 pr-3">
    <Link
      className=" navFont navHover dix"
      to="/catalogue/"
      style={style}
      activeStyle={activeStyle}
    >
      <li className='pt-1 pb-1'>Catalogue </li>
    </Link>

    <Link
      className=" navFont navHover dix"
      to="/ounoustrouver/"
      style={style}
      activeStyle={activeStyle}
    >
      {" "}
      <li className='pt-1 pb-1'>Où nous trouver </li>
    </Link>
  </ul>
);

export default NavBottom;
