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
    <Container fluid className="d-flex centrageCatalogue mx-0 px-0 pb-5 mb-5">
      <Row>
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
  );
};

export default Livres;
