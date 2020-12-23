import React from "react";
import { Link } from "gatsby";
import "moment/locale/fr";
import "../fonts/fonts.css";
import { Row, Col } from "reactstrap";

const Evenement = ({ evenement }) => {
  let date2 = Date(evenement.node.dateevenement.dateEvenement)
  console.log(date2)
  return (
    <div>
      <Link
        style={{ textDecoration: "none" }}
        to={`/evenements/${evenement.node.slug}`}
        className="navHover"
        state={{ valeur: evenement.node.slug }}
      >
        <Row className="d-flex textFont text-dark navFont border-bottom">
          <Col sm="2">{evenement.node.dateevenement.dateEvenement}</Col>

          <Col sm="8">
            <div className="textFont">{evenement.node.title}</div>
          </Col>
          <Col sm="2">
            <div className="text-right textFont">
              {evenement.node.ville.ville}
            </div>
          </Col>
        </Row>
      </Link>
    </div>
  );
};

export default Evenement;
