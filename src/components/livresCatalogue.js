import React from "react";
import Livre from "./livreCatalogue";
import { Container, Row, Col } from "reactstrap";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

const Livres = ({ articles }) => {
  const article = articles;

  const livresTrie = article.sort(function (a, b) {
    var AdateFormat = moment(a.node.acf.date_de_parution).format();
    var BdateFormat = moment(b.node.acf.date_de_parution).format();

    return new Date(BdateFormat) - new Date(AdateFormat);
  });

  return (
    <span>
      <Container fluid className="mx-0 px-0 pb-5 mb-5 d-none d-sm-block">
      <div className="text-right pr-3 my-0 d-none d-sm-block ">
              <Link to="/" style={{ color: "black" }}>
                <FontAwesomeIcon icon={faTimes} />
              </Link>
            </div>
        <Row className="d-flex justify-content-start">
          {livresTrie.map((livre) => {
            return (
              <Livre
                article={livre}
                key={`evenement__${livre.node.wordpress_id}`}
              />
            );
          })}
        </Row>
      
      </Container>

      {/* Version smartphone */}
      <Container fluid className=" mx-0 px-0 pb-5 mb-5 d-block d-sm-none">
        <Row className="d-flex justify-content-center">
          {livresTrie.map((livre) => {
            return (
              <Livre
                article={livre}
                key={`evenement__${livre.node.wordpress_id}`}
              />
            );
          })}
        </Row>
      </Container>
    </span>
  );
};

export default Livres;
