import React from "react";
import { graphql, Link } from "gatsby";
import "moment/locale/fr";
import "../assets/css/fontawesome-free-5.13.1-web/css/all.css";
import Layout2 from "../components/layout2";
import { Container, Row, Col } from "reactstrap";

// import ReactDOM from "react-dom";
// import Slider from "react-slick";
// import './slide.css'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

const style = {
  color: "black",
  fontWeight: "bold",
};

export const query = graphql`
  query LivreQuery($id: Int!) {
    wcProducts(wordpress_id: { eq: $id }) {
      name
      price
      wordpress_id
      categories {
        name
      }
      description
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

  var settings = {
    dots: true
  };

  const article = data.wcProducts;
  let description = "";
  let shortDescription = "";
  let couv=''
  let titre =''
  let price=''

  if (typeof article.description !== undefined) {
    description = article.description;
  } else {
    description = ''
  }

  if (
    article.short_description !== undefined
  ) {
    shortDescription = article.short_description
  } else {
    description = ''
  }

  if (typeof article.images[0] !== undefined) {
    couv = article.images[0].src;
  } else {
    couv = ''
  }

  if (typeof article.name !== undefined) {
    titre = article.name;
  } else {
    titre = ''
  }

  if (typeof article.price !== undefined) {
    price = article.price;
  } else {
    price = ''
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
      <Container fluid className="mt-3 ml-0 pl-0">
        <Row>
          <Col sm="3" className="ml-0 pl-0 text-center ">
            <img
              className="noHover"
              src={couv}
              alt={"couverture manquante"}
              width="290"
            />
          </Col>

          <Col sm="3" className=" aligner-bas ">
            <h4
              style={style}
              className="text-uppercase text-center textFont text-blackmb-5 d-none d-xl-block"
            >
              {titre} <br />
              {typeof article.attributes[0] !== undefined
                ? article.attributes[0].options
                : ""}
            </h4>

            <div  className="d-none d-xl-block">
              <a
                href=""
                className="snipcart-add-item under mb-5 text-dark"
                data-item-id={article.wordpress_id}
                data-item-price={price}
                data-item-image={couv}
                data-item-url="/"
                data-item-name={titre}
              >
                {"> "}Ajouter au panier
              </a>
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
              {article.attributes[3]!==undefined
                ? article.attributes[3].options
                : ""}
              <br />
            </div>



{/* Version smartphone */}
            <div  className="text-right mt-4 mb-3 d-block d-sm-none" >
             
              <a
                href=""
                className="snipcart-add-item under mb-5 text-dark"
                data-item-id={article.wordpress_id}
                data-item-price={price}
                data-item-image={couv}
                data-item-url="/"
                data-item-name={titre}
              >
                {"> "}Ajouter au panier
              </a>
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
              {article.attributes[3]!==undefined
                ? article.attributes[3].options
                : ""}
              <br />
            </div>


          </Col>

          <Col sm="3" className="textFont pr-0 ">
            <div dangerouslySetInnerHTML={{ __html: description }} />
            {/* <div>{affichageRevuePress()}</div> */}
          </Col>

          <Col sm="2" className="textFont pr-0">
            <div
              dangerouslySetInnerHTML={{ __html: shortDescription }}
            />
          </Col>

          <Col sm="1" className="text-right">
            <Link
              className="fas fa-times text-dark  "
              to="/catalogue/"
              style={{ textDecoration: "none" }}
            ></Link>
          </Col>
        </Row>
      </Container>
    </Layout2>
  );
};

export default Livre;
