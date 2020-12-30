import React from "react";
import { Link } from "gatsby";
import "moment/locale/fr";
import "../fonts/fonts.css";
import { Row, Col } from "reactstrap";

const Evenement = ({ evenement }) => {
  let month =new Date(evenement.node.dateevenement.dateEvenement).getMonth()
  let corectMonth=month+=1
  let date = new Date(evenement.node.dateevenement.dateEvenement).getDate() + '/' + corectMonth +'/'+new Date(evenement.node.dateevenement.dateEvenement).getFullYear() 

  return (
    <div>
      <Link
        style={{ textDecoration: "none" }}
        to={`/evenements/${evenement.node.slug}`}
        className="navHover dix"
        state={{ valeur: evenement.node.slug }}
      >
        <Row className="d-flex textFont text-dark navFont border-bottom">
          <Col sm="2"><span className="navFont">{date}</span></Col>

          <Col sm="8">
            <div className="navFont">{evenement.node.title}</div>
          </Col>
          <Col sm="2">
            <div className="text-right navFont">
              {evenement.node.ville.ville}
            </div>
          </Col>
        </Row>
      </Link>
    </div>
  );
};

export default Evenement;
