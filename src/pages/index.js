import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import "../assets/css/main.css";
import EvenementsComponent from "../components/evenements";
import "../fonts/fonts.css";
import { Container, Row, Col } from "reactstrap";
import ParuRecementSmart from "../components/parurecemmentSmartPhone";
import AParaitreSmart from "../components/aparaitreSmart";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Seo
      // siteTitle="Editions Divergences"
      title="Editions Divergences"
      description="Editions Divergences. Critique sociale et politique. Bienvenue sur notre site."
      keywords={[`Editions divergences`, `home`, `index`]}
    />
    <StaticQuery
      query={graphql`
        query {
          allWpPost {
            edges {
              node {
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
          }
        }
      `}
      render={(data) => (
        <span>
          <span className="d-block d-sm-none pb-5">
            {/* Paru Recemment Smartphone */}

            <Row className="borderGeneral-bottom dix">
              <Container fluid className="d-flex justify-content-between">
                <span className="">
                  <a
                    className="text-dark navFont"
                    style={{
                      textDecoration: "none",
                    }}
                    href="https://fr-fr.facebook.com/EditionsDivergences/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </span>

                <span className="">
                  <a
                    className=" text-dark navFont"
                    style={{
                      textDecoration: "none",
                    }}
                    href="https://www.instagram.com/editionsdivergences/?hl=fr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Instagram
                  </a>
                </span>

                <span className="">
                  <a
                    className=" text-dark navFont"
                    style={{
                      textDecoration: "none",
                    }}
                    href="https://twitter.com/EDivergences?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Twitter
                  </a>
                </span>
              </Container>
            </Row>

            <Container fluid className="px-0 d-block d-sm-none pb-5">
              <Row className="borderGeneral-bottom ">
              
                <div className="text-center mt-1 pl-3 d-block d-sm-none dix px-0 mx-0">
                  Paru recemment
                </div>
             
                <Col xs="10" className="px-0 pb-1">
                  <div className=" d-block d-sm-none ">
                    <ParuRecementSmart />
                  </div>
                </Col>
              </Row>

              {/* A paraitre Smartphone */}
              <Row className='mb-5 pb-5'>

                <Col xs="10" className="px-0">
                  <div className=" pl-3  mt-1 dix">A paraître </div>
                  <div className="d-block d-sm-none px-0">
                    <AParaitreSmart />
                  </div>
                 
                </Col>
              </Row>
            </Container>
          </span>

          <span className="d-none d-sm-block">
            <EvenementsComponent
              className="navFont pb-5 mb-5"
              articles={data.allWpPost.edges}
            />
          </span>
        </span>
      )}
    />
  </Layout>
);

export default IndexPage;
