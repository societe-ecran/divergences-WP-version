import React from "react";
import { Link } from "gatsby";
import "moment/locale/fr";
import "../fonts/fonts.css";
import { Row, Col } from "reactstrap";

const Evenement = ({ evenement }) => {
  let month =new Date(evenement.node.dateevenement.dateEvenement).getMonth()
  let corectMonth=month+=1
  let date = new Date(evenement.node.dateevenement.dateEvenement).getDate() + '.' + corectMonth +'.'+ JSON.stringify(new Date(evenement.node.dateevenement.dateEvenement).getFullYear()).substr(2) 

  return (
    <div>
      <Link
        style={{ textDecoration: "none" }}
        to={`/evenements/${evenement.node.slug}`}
        className="navHover dix"
        state={{ valeur: evenement.node.slug }}
      >
        <Row className="d-flex textFont text-dark textFont border-bottom mr-0 interligne container-presentation">
          <Col sm="2" ><span className="textFont">{date}</span></Col>

          <Col sm="8" className='px-0'>
            <div className="textFont">{evenement.node.title}</div>
          </Col>
          <Col sm="2" className="px-0 mx-0">
            <div className="text-right textFont ">
              {evenement.node.ville.ville}
            </div>
          </Col>
        </Row>
      </Link>
    </div>
  );
};

export default Evenement;
