import React from "react";
import Livre from "./livreCatalogue";
import { Container, Row } from "reactstrap";
import moment from "moment";

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
