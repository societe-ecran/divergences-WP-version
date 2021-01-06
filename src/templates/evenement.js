import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { Container, Row, Col } from "reactstrap";
import Seo from "../components/seo";

export const query = graphql`
  query EvenementsQuery($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      adresse {
        adresse
      }
      adresse2 {
        prix
      }
      content
      dateevenement {
        dateEvenement
      }
      horaire {
        horaire
      }
      title
      slug
      ville {
        ville
      }
    }
  }
`;

const Evenement = ({ data }) => {
  const article = data.wpPost;

  let adresse = "";
  let prix = "";
  let content = "";
  let dateEvenement = "";
  let horaire = "";
  let title=""
  let ville=''


  if (typeof article.adresse.adresse !== undefined) {
    adresse = article.adresse.adresse
  } else {
    adresse = "";
  }

  if (typeof article.adresse2.prix !== undefined) {
    prix = article.adresse2.prix
  } else {
    prix = "";
  }

  if (typeof article.content !== undefined) {
    content = article.content
  } else {
    content = "";
  }

  if (typeof article.dateevenement.dateEvenement !== undefined) {
    dateEvenement = article.dateevenement.dateEvenement
  } else {
    dateEvenement = "";
  }

  if (typeof article.horaire.horaire !== undefined) {
    horaire = article.horaire.horaire
  } else {
    horaire = "";
  }

  if (typeof article.title !== undefined) {
    title = article.title
  } else {
    title = "";
  }

  if (typeof article.ville.ville !== undefined) {
    ville = article.ville.ville
  } else {
    ville = "";
  }

  let month = new Date(dateEvenement).getMonth();
  let corectMonth = (month += 1);
  let date =
    new Date(dateEvenement).getDate() +
    "/" +
    corectMonth +
    "/" +
    new Date(dateEvenement).getFullYear();

  return (
    <Layout>
      <Seo
        siteTitle="Editions Divergences"
        title={title}
        description={date}
      />
      <Container fluid className="mx-0 px-0 pb-5 mb-5 interligne">
        <Row className="d-block d-sm-none">
          <div className=" text-right pr-2">
            <Link to="/agenda/" style={{ textDecoration: "none" }}>
              <div className="fas h5 fa-times text-dark text-right "></div>
            </Link>
          </div>
        </Row>

        <Row className="">
          <Col sm="3" className="borderGeneral-right"></Col>
          <Col sm="8">
            <div className="textFont font-weight-bold">{title}</div>
          </Col>
          <Col sm="1" className="d-none d-sm-block">
            <div className="text-right">
              <Link
                className="fas fa-times text-dark text-right "
                to="/agenda/"
                style={{ textDecoration: "none" }}
              ></Link>
            </div>
          </Col>
        </Row>

        <Row className="pb-5 pb-5">
          <Col sm="3" className="textFont borderGeneral-right">
            <div className="textFont douze ">
              {date} <br />
              {adresse}
              <br />
              {prix}
              <br />
              {ville}
              <br />
              {horaire}
              <br />
            </div>
          </Col>

          <Col sm="9" className=" textFont">
            <br />
            <div
              className=" textFont"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Evenement;
