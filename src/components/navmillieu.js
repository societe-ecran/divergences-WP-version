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
  <div className="d-flex justify-content-between pt-2 ">
    {/* <Col md="3"> */}
      
      <div>
      <h5>
        <Link
          className=" navHover active medieumSize  "
          to="/"
          style={style}
          activeStyle={activeStyle}
        >
          Actualités
        </Link>
      </h5></div>
    {/* </Col> */}

    {/* <Col md="3"> */}
    <div>

    
      <h5>
        <Link
          className="navHover medieumSize "
          to="/plusDinfos/"
          style={style}
          activeStyle={activeStyle}
        >
          Plus d'infos
        </Link>
      </h5></div>
    {/* </Col> */}

    {/* <Col md="6"> */}
     
     <div>
       <h5>
        <Link className="navHover medieumSize" 
        to="/about/" 
        style={style} 
        activeStyle={activeStyle}>
          Contact/Newsletter
        </Link>
      </h5></div> 
    {/* </Col> */}

    

  </div>
);

export default Navmillieu;
