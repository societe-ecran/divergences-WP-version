import React from "react";
import { Link } from "gatsby";
import "../assets/css/main.css";
// import Img from "gatsby-image";

const Livre = ({ article }) => {
 
  return (
    <div>
      <div className="d-block d-sm-none mx-0 text-center">
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
            height="330"
            width="auto"
            loading="lazy"
          />

          {/* <Img
            fluid={article.node.images.localFile.childImageSharp.fluid}
            key={article.node.images.localFile.childImageSharp.fluid.src}
          /> */}
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
            className="pl-4 pr-4 pt-0 pb-4"
            height="auto"
            width="240"
            loading="lazy"
          />
        </Link>
      </div>
    </div>
  );
};

export default Livre;
