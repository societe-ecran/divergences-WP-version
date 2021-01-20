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
      illustration {
        illustration {
          localFile {
            url
          }
        }
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

  var adresse = "";
  var complementAdresse = "";
  var content = "";
  var dateEvenement = "";
  var horaire = "";
  var title = "";
  var ville = "";
  var illustration = "";

  if (typeof article.adresse2.prix !== undefined) {
    complementAdresse = article.adresse2.prix;
  } else {
    complementAdresse = "";
  }

  if (typeof article.illustration.illustration.localFile.url !== undefined) {
    illustration = article.illustration.illustration.localFile.url;
  } else {
    illustration = "";
  }

  if (typeof article.content !== undefined) {
    content = article.content;
  } else {
    content = "";
  }

  if (typeof article.adresse.adresse !== undefined) {
    adresse = article.adresse.adresse;
  } else {
    adresse = "";
  }

  if (typeof article.dateevenement.dateEvenement !== undefined) {
    dateEvenement = article.dateevenement.dateEvenement;
  } else {
    dateEvenement = "";
  }

  if (typeof article.horaire.horaire !== undefined) {
    horaire = article.horaire.horaire;
  } else {
    horaire = "";
  }

  if (typeof article.title !== undefined) {
    title = article.title;
  } else {
    title = "";
  }

  if (typeof article.ville.ville !== undefined) {
    ville = article.ville.ville;
  } else {
    ville = "";
  }

  var month = new Date(dateEvenement).getMonth();
  var corectMonth = (month += 1);
  var date =
    new Date(dateEvenement).getDate() +
    "." +
    corectMonth +
    "." +
    JSON.stringify(new Date(dateEvenement).getFullYear()).substr(2);

  return (
    <Layout>
      <Seo siteTitle="Editions Divergences" title={title} description={date} />
      <Container
        fluid
        className="mx-0 px-0 pb-5 mb-5 interligne textFont d-none d-sm-block dix"
      >
        <Row className="d-flex textFont text-dark border-bottom mr-0 interligne container-presentation">
          <Col sm="2">
            <div className="textFont">{date}</div>
          </Col>

          <Col sm="8" className="px-0">
            <div className="textFont dix">{title}</div>
          </Col>
          <Col sm="2" className="px-0 mx-0">
            <div className="text-right textFont ">{ville}</div>
          </Col>
        </Row>

        <Row className="d-flex textFont text-dark mr-0 interligne container-presentation">
          <Col sm="2">
            <div className="text-left">
              <Link
                className="fas fa-times text-dark text-left "
                to="/agenda/"
                style={{ textDecoration: "none" }}
              ></Link>
            </div>
          </Col>
          <Col sm="8" className="px-0">
            <div
              className=" textFont d-none d-sm-block"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </Col>
          <Col sm="2" className="px-0 mx-0">
            <div className="text-right ">
              {horaire} <br />
              <div className="mt-2">
                {adresse} <br />
              </div>
              {complementAdresse}
              <br />
              {ville}
            </div>
          </Col>
        </Row>

        <Row className="d-flex textFont text-dark mr-0 interligne container-presentation">
          <Col sm="2"></Col>
          <Col sm="8" className="px-0">
            <img
              src={illustration}
              alt="illustration"
              width="80%"
              // height="auto"
            />
            <p className="textFont text-white">
              Lecteurs et lectrices, curieuses et curieux, libraires,
              journalistes, si vous souhaitez être tenu au courant de nos
              ouvrages, de nos événements et de nos activités une fois par mois,
              vous pouvez vous inscrire ici.
            </p>
          </Col>
          <Col sm="2" className="px-0 mx-0"></Col>
        </Row>
      </Container>

      {/* Version smartphone */}

      <Container
        fluid
        className=" pb-5 mb-5 interligne textFont d-block d-sm-none"
      >
        <Row>
          <Col sm="12" className="">
            <div className="text-right">
              <Link
                className="fas fa-times text-dark h4 "
                to="/agenda/"
                style={{ textDecoration: "none" }}
              ></Link>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm="12 mb-3">
            <div className="font-weight-bold text-center">{title}</div>
          </Col>
        </Row>

        <Row className="text-right mb-3">
          <Col sm="12" className="dix">
            <div>{date}</div>
            <div>{horaire}</div>
            <div>{adresse}</div>
            <div>{complementAdresse}</div>
            <div>{ville}</div>
          </Col>
        </Row>

        <Row>
          <Col sm="12">
            <div
              className=" textFont"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            <div className="d-flex justify-content-center">
              <img
                src={illustration}
                alt="illustration"
               className='tailleImageEvenement'
              />
            </div>
          </Col>
        </Row>

        {/* <Row>
          <Col sm="12" className="d-flex justify-content-center">
            <img
              src={illustration}
              alt="illustration"
              height="290"
              width="auto"
            />
          </Col>
        </Row> */}
      </Container>
    </Layout>
  );
};

export default Evenement;
