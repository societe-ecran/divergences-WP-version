import React from "react";
import "../assets/css/main.css";
import { Link } from "gatsby";
import "../fonts/fonts.css";

const style = {
  color: "black",
  textDecoration: "none",
};

const activeStyle = {
  color: "grey",
};

const Navmillieu = () => (
  <div className="d-flex justify-content-between pt-2 ">
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
      </h5>
    </div>
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
      </h5>
    </div>

    <div>
      <h5>
        <Link
          className="navHover medieumSize"
          to="/about/"
          style={style}
          activeStyle={activeStyle}
        >
          Contact/Newsletter
        </Link>
      </h5>
    </div>
  </div>
);

export default Navmillieu;
