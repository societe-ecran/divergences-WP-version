import React from "react";
import Livre from "./livreCatalogue";
import { Container, Row } from "reactstrap";

const Livres = ({ articles }) => {
  const article = articles;

  return (
    <Container fluid className="d-flex justify-content-center ">
      <Row>
        {article.map((livre, i) => {
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
