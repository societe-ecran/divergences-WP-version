import React from "react";
import { Link } from "gatsby";
import "../assets/css/main.css";

const Livre = ({ article }) => {
  return (
    <div className="smooth">
      <div className="d-block d-sm-none mx-0 ">
        <Link
          to={`/livre/${article.node.slug}`}
          activeStyle={{ textDecoration: "none" }}
          style={{ textDecoration: "none" }}
        >
          <img
            src={
              article.node.images[0] !== undefined
                ? article.node.images[0].src
                : ""
            }
            alt=""
            className="ml-3 mr-3 mb-2 mt-2 carteLivre"
            height="220"
            width="auto"
          />
        </Link>
      </div>

      <div className="d-none d-sm-block">
        <Link
          to={`/livre/${article.node.slug}`}
          activeStyle={{ textDecoration: "none" }}
          style={{ textDecoration: "none" }}
        >
          <img
            src={
              article.node.images[0] !== undefined
                ? article.node.images[0].src
                : ""
            }
            alt=""
            className="pl-4 pr-4 pt-2 pb-3"
            height="auto"
            width="240"
          />
        </Link>
      </div>
    </div>
  );
};

export default Livre;
