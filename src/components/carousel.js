import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "../fonts/fonts.css";
import { Link } from "gatsby";

const Btcarousel = ({ articles }) => {
  const article = articles;

  return (
    <Container>
      <Carousel
        controls={true}
        justify-self="end"
        align-self="center"
        control-prev-icon-color="invert(100%)"
        control-next-icon-color="invert(100%)"
        indicators={false}
        touch="true"
      >
        {article.map((livre, i) => {
          return (
            <Carousel.Item>
              <Container clasName="imagescarousel">
                <Link
                  to={`/livre/${livre.node.wordpress_id}`}
                  activeStyle={{ textDecoration: "none" }}
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={livre.node.images[0].src}
                    alt="paru recemment"
                    width="150"
                    height="220"
                    className="carteLivre"
                  />
                </Link>
              </Container>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default Btcarousel;
