import React from "react";
import "../assets/css/main.css";
import { Link } from "gatsby";
import "../fonts/fonts.css";
import { Row, Col } from "reactstrap";
import ParuRecement from "./paru recement";

const style = {
  color: "black",
  textDecoration: "none",
};

const activeStyle = {
  color: "grey",
};

const Navmillieu = () => (
  <Row className="d-flex justify-content-beetwen pt-2 ">
    <Col md="4">
      <h5>
        <Link
          className=" navHover active medieumSize  "
          to="/"
          style={style}
          activeStyle={activeStyle}
        >
          Actualité
        </Link>
      </h5>
    </Col>

    <Col md="4">
      <h5>
        <Link
          className="navHover medieumSize "
          to="/plusDinfos/"
          style={style}
          activeStyle={activeStyle}
        >
          Plus d'infos
        </Link>
      </h5>
    </Col>

    <Col md="4">
      <h5>
        <Link className="navHover medieumSize" 
        to="/about/" 
        style={style} 
        activeStyle={activeStyle}>
          Contact / Newsletter
        </Link>
      </h5>
    </Col>

    

  </Row>
);

export default Navmillieu;
