import React from "react";
import "../assets/css/main.css";
import { Link } from "gatsby";
import "../fonts/fonts.css";

const style = {
  textDecoration: "none",
  color: "black",
};

const activeStyle = {
  color: "grey",
};



const Navmillieu = () => (
  <div className="d-flex justify-content-between pt-2 navFont dix">
    <div>
     
        <Link
          className=" navHover active medieumSize  "
          to="/"
          style={style}
          activeStyle={activeStyle}

        >
          Actualités
        </Link>
     
    </div>
    <div>
  
        <Link
          className="navHover medieumSize "
          to="/plusDinfos/"
          style={style}
          activeStyle={activeStyle}
        >
          Plus d'infos
        </Link>
     
    </div>

    <div>
    
        <Link
          className="navHover medieumSize"
          to="/about/"
          style={style}
          activeStyle={activeStyle}
        >
          Contact/Newsletter
        </Link>
     
    </div>
  </div>
);

export default Navmillieu;
