import React from "react";
import { Link } from "gatsby";
import "../assets/css/main.css";
import "moment/locale/fr";
import "../fonts/fonts.css";
import ReactCardFlipper from "react-card-flipper";
import { Col } from "reactstrap";

const Livre = ({ article }) => {
  let titre = article.node.name.toUpperCase();
  let auteur = "";
  console.log(article.node.attributes[0]);
  if (typeof article.node.attributes[0] !== undefined) {
    auteur = article.node.attributes[0].options;
  } else {
    auteur = "";
  }

  return (
    <div className="smooth">

<div className="d-block d-sm-none">
<Link
            to={`/livre/${article.node.slug}`}
            activeStyle={{ textDecoration: "none" }}
            style={{ textDecoration: "none" }}
          >
      <img
        src={
          article.node.images[0] !== undefined ? article.node.images[0].src : ""
        }
        alt=""
        className="ml-3 mr-3 mb-3 mt-3 tailleLivreCatalogue carteLivre"
        width="250"
        height="380"
      />
       </Link>
</div>


      <ReactCardFlipper className="d-none d-sm-block" width="250px" height="380px" behavior="hover">
        <div>
          <img
            src={
              article.node.images[0] !== undefined
                ? article.node.images[0].src
                : ""
            }
            alt=""
            className="pl-3 pr-3 pb-3 pt-3 tailleLivreCatalogue"
            width="250"
            height="380"
          />
        </div>
        <Col className="text-center text-dark decoration-non containerlivre">
          <Link
            to={`/livre/${article.node.slug}`}
            activeStyle={{ textDecoration: "none" }}
            style={{ textDecoration: "none" }}
          >
            <div class="contenant">
              <img
                src=""
                alt=""
                className="pl-3 pr-3 pb-3 pt-3"
                width="250"
                height="380"
              />
              <div class="texte_centrer">
                <div className="text-dark decoration-non font-weight-bolder ">
                  {titre}
                </div>
                <div className="text-dark decoration-non font-weight-bolder mt-5 ">
                  {auteur}
                </div>
              </div>
            </div>
          </Link>
        </Col>
      </ReactCardFlipper>
    </div>
  );
};

export default Livre;
