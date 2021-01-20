import React from "react";
import { Link } from "gatsby";
import "moment/locale/fr";
import "../fonts/fonts.css";
import { Row, Col } from "reactstrap";
import moment from "moment";

const Evenement = ({ evenement }) => {
  // console.log(evenement.node.dateevenement.dateEvenement)
  var dateFormat = moment(evenement.node.dateevenement.dateEvenement).format();

  // var month = new Date(dateFormat).getMonth()
  var month = new Date(dateFormat).getMonth();
  // console.log(month)
  // var month =new Date(evenement.node.dateevenement.dateEvenement).getMonth()
  var corectMonth = (month += 1);
  var date =
    new Date(dateFormat).getDate() +
    "." +
    corectMonth +
    "." +
    JSON.stringify(new Date(dateFormat).getFullYear()).substr(2);
  // var date = new Date(evenement.node.dateevenement.dateEvenement).getDate() + '.' + corectMonth +'.'+ JSON.stringify(new Date(evenement.node.dateevenement.dateEvenement).getFullYear()).substr(2)

  return (
    <div>
      <Link
        style={{ textDecoration: "none" }}
        to={`/evenements/${evenement.node.slug}`}
        className="navHover dix"
        state={{ valeur: evenement.node.slug }}
      >
        <Row className="d-flex textFont text-dark border-bottom mr-0 interligne container-presentation">
          <Col sm="2">
            <span className="textFont">{date}</span>
          </Col>

          <Col sm="8" className="px-0">
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
