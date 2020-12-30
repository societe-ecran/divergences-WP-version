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
  <ul className="nav bg-white fixed-bottom borderGeneral-top justify-content-between  pb-1 pt-1 pl-3 pr-3">
    <li className="">
      <Link
        className=" navFont navHover dix"
        to="/catalogue/"
        style={style}
        activeStyle={activeStyle}
      >
        Catalogue
      </Link>
    </li>

    

    <li className="">
      <Link
        className=" navFont navHover dix"
        to="/ounoustrouver/"
        style={style}
        activeStyle={activeStyle}
      >
        Où nous trouver
      </Link>
      
    </li>
   
  </ul>
);

export default NavBottom;
