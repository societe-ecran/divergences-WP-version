import React from "react";
import { graphql, Link } from "gatsby";
import "moment/locale/fr";
// import "../assets/css/fontawesome-free-5.13.1-web/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Layout2 from "../components/layout2";
import { Container, Row, Col } from "reactstrap";
import Carousel from "react-bootstrap/Carousel";
import Seo from "../components/seo";
import moment from "moment";

// const style = {
//   fontWeight: "bold",
//   textDecoration: "none",
// };

// const activestyle = {
//   backgroundColor: "white",
// };

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
      images {
          localFile {
            childImageSharp {
              fixed(width: 240) {
                src
              }
            }
          }
        }
    }
  }
`;

const Livre = ({ data }) => {
  const article = data.wcProducts;

  var description = "";
  var shortDescription = "";
  var titre = "";
  var price = "";
  var auteur = "";
  var nbPages = "";
  var isbn = "";
  var category = "";
  var texteCategory = "";
  var précommande=false

  var affichControls = false;
  if (article.images.length <= 2) {
    affichControls = false;
  } else {
    affichControls = true;
  }

  if (typeof article.categories[0].name !== "undefined") {
    for (let i=0;i<article.categories.length; i++ ){
      if(article.categories[i].name === 'précommande'){
        précommande=true
      }
    }


    category = article.categories[0].name;
  } else {
    category = "";
  }


  if (category === "a paraitre") {
    texteCategory = "A paraitre le";
  } else {
    texteCategory = "Paru le ";
  }

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

  var date = "";
  if (typeof article.acf.date_de_parution !== "undefined") {
    var dateFormat = moment(article.acf.date_de_parution).format();
    var month = new Date(dateFormat).getMonth();

    // var month = new Date(article.acf.date_de_parution).getMonth();
    var corectMonth = (month += 1);
    date =
      new Date(dateFormat).getDate() +
      "." +
      corectMonth +
      "." +
      JSON.stringify(new Date(dateFormat).getFullYear()).substr(2);
  } else {
    date = "";
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

  var affichagePremiereImage = "";
  if (typeof article.images[1] !== "undefined") {
    affichagePremiereImage = article.images[1].src;
  } else {
    affichagePremiereImage = article.images[0].src;
  }

  var affichageTroisiemeImage = "";
  if (typeof article.images[2] !== "undefined") {
    affichageTroisiemeImage = true;
  } else {
    affichageTroisiemeImage = false;
  }

  const choixCategorie=()=>{
     if(précommande){
       return ( 
         <div>
       <div className="textFont font-weight-bold mb-2">
       Ce livre est disponible en précommande.
     </div>
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
     <span className="under">Précommander</span>
   </button>  
   </div>
     )
     }else if(category === "Rupture de stock" || category === "a paraitre"){
       return (
       <div className="textFont font-weight-bold">
       Ce livre n'est pas disponible à la vente
     </div>)
     }else{return( <button
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
    </button>)}
  }
 




  return (
    <Layout2>
      <Seo
        // siteTitle="Editions Divergences"
        title={titre}
        description={description}
      />
      
      <Container fluid className="mt-2 pb-5 mb-5 interligne">
        <Row sm="1" className="text-right d-block d-sm-none">
        <Link to="/catalogue/" style={{ color: "black" }}>
                <FontAwesomeIcon icon={faTimes} className="h4" />
              </Link>
        
          {/* <Link
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
          </Link> */}
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
                  <Container fluid className="text-left pr-0 px-0">
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

                <div>

                  {/* {category === "Rupture de stock" ||
                  category === "a paraitre" ? (
                    <div className="textFont font-weight-bold">
                      Ce livre n'est pas disponible à la vente
                    </div>
                  ) : (
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
                  )} */}

                    {choixCategorie()}

                  <span className="textFont">
                    <br />
                    {texteCategory} {date} <br />
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
          <Col sm="12" className="d-block d-sm-none">
            <div className="text-right mt-4 mb-3 textFont">
              <div>
                {/* {category === "Rupture de stock" ||
                category === "a paraitre" ? (
                  <div className="textFont font-weight-bold">
                    Ce livre n'est pas disponible à la vente
                  </div>
                ) : (
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
                )} */}
                {choixCategorie()}
              </div>
              <span className=" textfont">
                <br />
                {texteCategory} {date}
                <br />
                {nbPages} pages
                <br />
                {price} euros
                <br />
                ISBN : {isbn}
                <br />
              </span>
            </div>
          </Col>

          <Col sm="4" className="textFont  pl-2 pr-0 scrollColonne">
            <div
              className="textFon"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div
              className="textFont text-white d-none d-sm-block"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            {/* <div
              className="textFont text-white d-none d-sm-block"
              dangerouslySetInnerHTML={{ __html: description }}
            /> */}
          </Col>

          <Col sm="2" className="textFont ">
            <div className="text-right py-0 my-0 d-none d-sm-block ">
              <Link to="/catalogue/" style={{ color: "black" }}>
                <FontAwesomeIcon icon={faTimes} />
              </Link>

              {/* <Link
                className="fas fa-times text-dark  "
                to="/catalogue/"
                style={{ textDecoration: "none" }}
              ></Link> */}
            </div>

            <div className=""></div>
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
