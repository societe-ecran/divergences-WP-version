import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "../fonts/fonts.css";

const Btcarousel = ({ articles, titres }) => {
  const article = articles;
  const titre = titres;

  return (
    <Container>
      <div className="text-center">{titre}</div>
      <Carousel
        controls={false}
        justify-self="end"
        align-self="center"
        control-prev-icon-color="invert(100%)"
        control-next-icon-color="invert(100%)"
        indicators={true}
        touch="true"
      >
        {article.map((livre, i) => {
          return (
            <Carousel.Item>
              <Container clasName="imagescarousel">
                <img
                  className=""
                  src={livre.node.images[0].src}
                  alt="paru recemment"
                  width="150"
                  height="220"
                />
              </Container>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default Btcarousel;
