import React from "react";
import { graphql, Link } from "gatsby";
import "moment/locale/fr";
import "../assets/css/fontawesome-free-5.13.1-web/css/all.css";
import Layout2 from "../components/layout2";
import { Container, Row, Col } from "reactstrap";
import Carousel from "react-bootstrap/Carousel";
import Seo from "../components/seo";

const style = {
  fontWeight: "bold",
  textDecoration: "none",
};

const activestyle = {
  backgroundColor: "grey",
};

export const query = graphql`
  query LivreQuery($slug: String!) {
    wcProducts(slug: { eq: $slug }) {
      name
      price
      wordpress_id
      categories {
        name
      }
      description
      slug
      short_description
      attributes {
        name
        options
      }
      images {
        src
      }
    }
  }
`;

const Livre = ({ data }) => {
  const article = data.wcProducts;
  let description = "";
  let shortDescription = "";
  let couv = "";
  let titre = "";
  let price = "";

  if (typeof article.description !== undefined) {
    description = article.description;
  } else {
    description = "";
  }

  if (article.short_description !== undefined) {
    shortDescription = article.short_description;
  } else {
    shortDescription = "";
  }

  if (typeof article.images[0] !== undefined) {
    // couv = article.images[0].src;
    couv = article.images;
  } else {
    couv = "";
  }


  if (typeof article.name !== undefined) {
    titre = article.name;
  } else {
    titre = "";
  }

  if (typeof article.price !== undefined) {
    price = article.price;
  } else {
    price = "";
  }

  // const revue = article.attributes[4].options;
  // const affichageRevuePress = () => {
  //   if (revue != null) {
  //     return (
  //       <div>
  //         <p>_______________</p>
  //         <p style={style}>Revue de presse</p>
  //         <div dangerouslySetInnerHTML={{ __html: article.attributes[4].options }}/>
  //       </div>
  //     );
  //   }
  // };

  return (
    <Layout2>
       <Seo siteTitle="Editions Divergences" title={titre} description={description}  />
      <Container fluid className="mt-2 pb-5 mb-5 interligne ">
        <Row sm="1" className="text-right d-block d-sm-none">
          <Link
            className=""
            to="/catalogue/"
            style={style}
            activestyle={activestyle}
          >
            <div
              className="fas fa-times text-dark h4 navHover"
              style={style}
              activestyle={activestyle}
            ></div>
          </Link>
        </Row>

        <Row>
          <Col sm="3" className="ml-0 pl-0 text-left ">
            <Carousel
              controls={false}
              justify-self="end"
              align-self="center"
              // control-prev-icon-color="invert(100%)"
              // control-next-icon-color="invert(100%)"
              indicators={true}
              touch={true}
              interval={null}
              nextLabel="next"
              className="text-left"
            >
              {couv.map((couv, i) => {
                return (
                  <Carousel.Item key={i}>
                    <Container fluid className="imagescarousel text-left pr-0 px-0">
                      <img
                        src={article.images[i].src}
                        alt="couverture"
                        width="80%"
                        height="auto"
                        className=""
                      />
                    </Container>
                  </Carousel.Item>
                );
              })}
            </Carousel>

            {/* <img
              className="noHover tailleLivreTemplate"
              src={couv}
              alt={"couverture manquante"}
              // width="290"
            
            /> */}
          </Col>

          <Col sm="3" className="livretemplate">
            <span
              style={style}
              className="text-uppercase text-center textFont text-blackmb-5 d-none d-sm-block douze"
            >
              {titre} <br />
              {typeof article.attributes[0] !== undefined
                ? article.attributes[0].options
                : ""}
            </span>

            <div className="d-none d-sm-block mt-5 pt-5">
              <div>
                <button
                  href=""
                  className="snipcart-add-item text-dark textFont douze"
                  data-item-id={article.wordpress_id}
                  data-item-price={price}
                  data-item-image={couv}
                  data-item-url={"/livre/" + article.slug}
                  data-item-name={titre}
                >
                 <span className="douze">  {"> "} </span> 
                  <span className="under">Ajouter au panier</span>
                </button>
              </div>
              <span className="textFont">
                <br />
                Paru le{" "}
                {typeof article.attributes[1] !== undefined
                  ? article.attributes[1].options
                  : ""}{" "}
                <br />
                {article.attributes[2] !== undefined
                  ? article.attributes[2].options
                  : ""}
                <br />
                {price} euros
                <br />
                {article.attributes[3] !== undefined
                  ? article.attributes[3].options
                  : ""}
                <br />{" "}
              </span>
            </div>

            {/* Version smartphone */}
            <div className="text-right mt-4 mb-3 d-block d-sm-none textFont">
              <div>
                <button
                  href=""
                  className="snipcart-add-item  mb-5 text-dark textFont"
                  data-item-id={article.wordpress_id}
                  data-item-price={price}
                  data-item-image={couv}
                  data-item-url="/"
                  data-item-name={titre}
                >
                  {"> "}
                  <span className="under">Ajouter au panier</span>
                </button>
              </div>
              <span className=" textfont">
                <br />
                Paru le{" "}
                {article.attributes[1] !== undefined
                  ? article.attributes[1].options
                  : ""}{" "}
                <br />
                {article.attributes[2] !== undefined
                  ? article.attributes[2].options
                  : ""}
                <br />
                {price} euros
                <br />
                {article.attributes[3] !== undefined
                  ? article.attributes[3].options
                  : ""}
                <br />
              </span>
            </div>
          </Col>

          <Col sm="4" className="textFont pr-0 ">
            <div
              className="textFont"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            {/* <div>{affichageRevuePress()}</div> */}
          </Col>

          <Col sm="2" className="textFont pr-0 pb-5 mb-5">
            
            <div
              className="textFont"
              dangerouslySetInnerHTML={{ __html: shortDescription }}
            />
          </Col>

          {/* <Col sm="1" className="text-right d-none d-sm-block ">
            <Link
              className="fas fa-times text-dark  "
              to="/catalogue/"
              style={{ textDecoration: "none" }}
            ></Link>
          </Col> */}
        </Row>
      </Container>
    </Layout2>
  );
};

export default Livre;
