import React from "react";
import "../assets/css/main.css";
import "../fonts/fonts.css";
import { Link } from "gatsby";
import "../images/panier.png";
import Panier from "./panier";
import { Col } from "reactstrap";

const NavTop = () => {
    let edition = "éditions divergences";

    return (
        <div className="nav bg-white sticky-top ">
            <Col md="6" >
                <Link
                    className="text-dark font-weight-bold logoDivergences  ml-2  pt-5 navfont"
                    style={{ textDecoration: "none" }}
                    activeStyle={{ textDecoration: "none" }}
                    to="/"
                >
                    {edition.toUpperCase()}
                </Link>
            </Col>

            <Col md="4" >
                <li className="navFont pt-2 d-none d-xl-block">
                    <Link
                        className=" text-dark navFont logoDivergences2"
                        style={{ textDecoration: "none" }}
                        activeStyle={{ textDecoration: "none" }}
                        to="/"
                    >
                        critique sociale et politique
                    </Link>
                </li>
            </Col>

            <Col md="2" className="d-flex justify-content-end">
                <li className=" pt-1 d-none d-xl-block">
                    <button className="snipcart-checkout panier ">
                        <Panier />
                    </button>
                </li>
            </Col>
        </div>
    );
};

export default NavTop;
