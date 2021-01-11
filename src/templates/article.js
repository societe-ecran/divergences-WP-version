import React from "react";
import { graphql, Link } from "gatsby";
import "moment/locale/fr";
import "../assets/css/fontawesome-free-5.13.1-web/css/all.css";
import Layout2 from "../components/layout2";
import { Container, Row, Col } from "reactstrap";
import Carousel from "react-bootstrap/Carousel";
import Seo from "../components/seo";
import Img from "gatsby-image"

const style = {
  fontWeight: "bold",
  textDecoration: "none",
};

const activestyle = {
  backgroundColor: "white",
};

export const query = graphql`
  query LivreQuery($slug: String!) {
    wcProducts(slug: { eq: $slug }) {
      acf {
        auteur
        date_de_parution
        isbn
        nombre_de_page
      }
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
      # images {
      #     localFile {
      #       childImageSharp {
      #         fixed(width: 240) {
      #           src
      #         }
      #       }
      #     }
      #   }
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
  let auteur = "";
  let dateDeParution = "";
  let nbPages = "";
  let isbn = "";

let affichControls=false

  if(article.images.length<=2){
    affichControls=false
  }else{affichControls=true}

console.log( article.images)

  if (typeof article.acf.isbn !== "undefined") {
    isbn = article.acf.isbn;
  } else {
    isbn = "";
  }

  if (typeof article.acf.nombre_de_page !== "undefined") {
    nbPages = article.acf.nombre_de_page;
  } else {
    nbPages = "";
  }

  if (typeof article.acf.auteur !== "undefined") {
    auteur = article.acf.auteur;
  } else {
    auteur = "";
  }


  let date =""
  if (typeof article.acf.date_de_parution !== "undefined") {
    let month = new Date(article.acf.date_de_parution).getMonth();
  let corectMonth = (month += 1);
   date = new Date(article.acf.date_de_parution).getDate() +
    "." +
    corectMonth +
    "." +
    JSON.stringify(new Date(article.acf.date_de_parution).getFullYear()).substr(
      2
    );
  } else {
    dateDeParution = "";
  }

 

  if (typeof article.description !== "undefined") {
    description = article.description;
  } else {
    description = "";
  }

  if (typeof article.short_description !== "undefined") {
    shortDescription = article.short_description;
  } else {
    shortDescription = "";
  }

  if (typeof article.images[0] !== "undefined") {
    couv = article.images;
  } else {
    couv = "";
  }

  if (typeof article.name !== "undefined") {
    titre = article.name;
  } else {
    titre = "";
  }

  if (typeof article.price !== "undefined") {
    price = article.price;
  } else {
    price = "";
  }

  let affichagePremiereImage = "";
  if (typeof article.images[1] !== "undefined") {
    affichagePremiereImage = article.images[1].src;
  } else {
    affichagePremiereImage = article.images[0].src;
  }

  let affichageTroisiemeImage = "";
  if (typeof article.images[2] !== "undefined") {
    affichageTroisiemeImage = true;
  } else {
    affichageTroisiemeImage = false;
  }
  console.log(affichageTroisiemeImage);

  return (
    <Layout2>
      <Seo
        siteTitle="Editions Divergences"
        title={titre}
        description={description}
      />
      <Container fluid className="mt-2 pb-5 mb-5 interligne">
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
          <Col sm="6" className="d-flex px-0 ">
            <Col sm="7" className="ml-0 pl-0 pr-0 text-left ">
              <Carousel
                controls={affichControls}
                justify-self="end"
                align-self="left"
                // control-prev-icon-color="invert(100%)"
                // control-next-icon-color="invert(100%)"
                indicators={false}
                touch={true}
                interval={null}
                nextLabel="next"
                className=""
              >
                <Carousel.Item>
                  <Container
                    fluid
                    className="text-left pr-0 px-0"
                  >
                     {/* <Img fixed={article.images[0].localFile.childImageSharp.fixed} /> */}
                    <img
                      src={affichagePremiereImage}
                      alt="couverture"
                      className="tailleImageTemplate"
                    />
                  </Container>
                </Carousel.Item>

                {affichageTroisiemeImage && (
                  <Carousel.Item>
                    <Container
                      fluid
                      className="imagescarousel text-left pr-0 px-0"
                    >
                      <img
                        src={article.images[2].src}
                        alt="couverture"
                        className="tailleImageTemplate"
                      />
                    </Container>
                  </Carousel.Item>
                )}
              </Carousel>
            </Col>
           

            <Col sm="5" className="d-none d-sm-block ">
              <div className="containerQuatriem ">
                <div className="block text-uppercase text-center textFont">
                  {titre} <br />
                  {auteur}
                </div>

                <div className="">
                  <button
                    href=""
                    className="snipcart-add-item text-dark textFont douze px-0 bg-white douze mb-3"
                    data-item-id={article.wordpress_id}
                    data-item-price={price}
                    data-item-image={article.images[0].src}
                    data-item-url={"/livre/" + article.slug}
                    data-item-name={titre}
                    data-item-weight="100"
                  >
                    <span className="douze"> {"> "} </span>
                    <span className="under">Ajouter au panier</span>
                  </button>
                  <span className="textFont">
                    <br />
                    Paru le {date} <br />
                    {nbPages} pages
                    <br />
                    {price} euros
                    <br />
                    ISBN : {isbn}
                    <br />{" "}
                  </span>
                </div>
              </div>
            </Col>
          </Col>

           {/* Version smartphone */}
          <Col sm="12"className="d-block d-sm-none"> 
            <div className="text-right mt-4 mb-3 textFont">
              <div>
                <button
                  href=""
                  className="snipcart-add-item  text-dark textFont px-0 bg-white"
                  data-item-id={article.wordpress_id}
                  data-item-price={price}
                  data-item-image={article.images[0].src}
                  data-item-url="/"
                  data-item-name={titre}
                >
                  {"> "}
                  <span className="under">Ajouter au panier</span>
                </button>
              </div>
              <span className=" textfont">
                <br />
                Paru le {date} <br />
                {nbPages} pages
                <br />
                {price} euros
                <br />
                ISBN : {isbn}
                <br />
              </span>
            </div>
            </Col>


          <Col sm="4" className="textFont mb-5 pb-5 pl-2 pr-0 scrollColonne">
            <div
              className="textFon"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div
              className="textFont text-white"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div
              className="textFont text-white"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            
          </Col>

          <Col sm="2" className="textFont ">
            <div className="text-right py-0 my-0 d-none d-sm-block ">
              <Link
                className="fas fa-times text-dark  "
                to="/catalogue/"
                style={{ textDecoration: "none" }}
              ></Link>
            </div>

            <div className="pb-5 mb-5"></div>
            <div
              className="textFont"
              dangerouslySetInnerHTML={{ __html: shortDescription }}
            />
          </Col>
        </Row>
      </Container>
    </Layout2>
  );
};

export default Livre;
