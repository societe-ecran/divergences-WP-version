import React from "react";
import "../assets/css/main.css";
import { Link } from "gatsby";
import "../fonts/fonts.css";
import "../images/panier.png";
import Panier from "./panier";

const style = {
  color: "black",
  textDecoration: "none",
};

const activeStyle = {
  color: "grey",
};

const NavBottom = () => (
  <ul className="nav bg-white fixed-bottom borderGeneral-top justify-content-between pt-2 pb-2 ">
    <li className="h5">
      <Link
        className=" navFont pl-2 navHover medieumSize"
        to="/catalogue/"
        style={style}
        activeStyle={activeStyle}
      >
        Catalogue
      </Link>
    </li>

    

    <li className="h5">
      <Link
        className=" navFont navHover medieumSize"
        to="/ounoustrouver/"
        style={style}
        activeStyle={activeStyle}
      >
        Où nous trouver?
      </Link>
      
    </li>
    <li className="d-block d-sm-none">
      <button className="snipcart-checkout panier ">
        <Panier />
      </button>
    </li>
  </ul>
);

export default NavBottom;
