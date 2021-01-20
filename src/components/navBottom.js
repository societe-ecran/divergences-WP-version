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
  <ul className="nav bg-white fixed-bottom borderGeneral-top justify-content-between  mt-1 ml-3 mr-3 mb-1 ">
    <Link
      className=" navFont navHover dix"
      to="/catalogue/"
      style={style}
      activeStyle={activeStyle}
    >
      <li>Catalogue </li>
    </Link>

    <Link
      className=" navFont navHover dix"
      to="/ounoustrouver/"
      style={style}
      activeStyle={activeStyle}
    >
      {" "}
      <li>Où nous trouver </li>
    </Link>
  </ul>
);

export default NavBottom;
