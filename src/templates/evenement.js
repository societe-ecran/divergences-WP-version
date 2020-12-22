import React from "react";
import { graphql, Link } from "gatsby";
import Moment from "react-moment";
import "moment/locale/fr";
import Layout from "../components/layout";
import "../assets/css/fontawesome-free-5.13.1-web/css/all.css";
import { Container, Row, Col } from "reactstrap";

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

  //    const illustration = article.image.publicURL

  //    const afficherIllustration = ()=>{
  //      if(illustration != null){
  //        return (
  //        <img class="pb-3"
  //        src={article.image.publicURL}
  //        srcset={article.image.publicURL}
  //        alt=""
  //        width="290"
  //        />
  //        )
  //      }
  //    }

  return (
    <Layout>
      <Container fluid className="mx-0 pt-1 px-0 pb-5 mb-5">
        <Row className="d-block d-sm-none">
          <div className=" h5 text-right pr-3 pt-2">
            <Link
              className="fas fa-times text-dark text-right "
              to="/agenda/"
              style={{ textDecoration: "none" }}
            ></Link>
          </div>
        </Row>

        <Row className="">
          <Col sm="3" className="borderGeneral-right"></Col>
          <Col sm="8" className="">
            <div className="textFont font-weight-bold">{article.title}</div>
          </Col>
          <Col sm="1" className="d-none d-xl-block">
            <div className="text-right">
              <Link
                className="fas fa-times text-dark text-right "
                to="/agenda/"
                style={{ textDecoration: "none" }}
              ></Link>
            </div>
          </Col>
        </Row>

        <Row className="">
          {/* <img
    src={article.Illustration.url}
    srcset={article.Illustration.url}
    alt="" 
    width="330"
    /> */}

          <Col sm="3" className="textFont borderGeneral-right">
            <div>
              {article.dateDeLevenement} <br />
              {article.adresse.adresse}
              <br />
              {article.adresse2.prix}
              <br />
              {article.ville.ville}
              <br />
              {article.horaire.horaire}
              <br />
            </div>
          </Col>

          <Col sm="9" className=" textFont">
            {/* {afficherIllustration()} */}
            <br />

            <div className="">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Evenement;
