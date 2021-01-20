import React from "react";
import Livre from "./livreCatalogue";
import { Container, Row } from "reactstrap";

const Livres = ({ articles }) => {
  const article = articles;
  const livresTrie = article.sort(function (a, b) {
    return (
      new Date(b.node.acf.date_de_parution) -
      new Date(a.node.acf.date_de_parution)
    );
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
