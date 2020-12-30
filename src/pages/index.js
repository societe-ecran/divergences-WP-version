import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import "../assets/css/main.css";
import EvenementsComponent from "../components/evenements";
import "../fonts/fonts.css";
import { Container, Row, Col } from "reactstrap";
import ParuRecementSmart from "../components/parurecemmentSmartPhone";
import AParaitreSmart from "../components/aparaitreSmart";


const IndexPage = () => (
  <Layout>
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
          <span className="d-block d-sm-none">
            {/* Paru Recemment Smartphone */}

            <Row className="borderGeneral-bottom dix">
              <Container
                fluid
                className="d-flex flex-row justify-content-between"
              >
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

            <Row className="">
              {/* <Col xs="2"></Col> */}
              <Col xs="1" className="d-block d-sm-none px-2">
                <div className="ecritureVericale text-center mt-5 d-block d-sm-none dix px-0 mx-0">
                  Paru recemment
                </div>
              </Col>
              <Col xs="10" className="pl-2">
                <div className=" borderGeneral-left d-block d-sm-none  ">
                  <ParuRecementSmart />
                </div>
              </Col>
            </Row>

            {/* A paraitre Smartphone */}
            <Row className=" ">
              <Col xs="1" className="d-block d-sm-none px-2">
                <div className="ecritureVericale maginSpecial dix">
                  A paraître{" "}
                </div>
              </Col>
              <Col xs="10" className="pl-2">
                <div className=" borderGeneral-left d-block d-sm-none">
                  <AParaitreSmart />
                </div>
              </Col>
            </Row>

            {/* <Row className=" pt-1 pb-1 pl-2 navFont d-block d-sm-none dix">
              <Row className='borderGeneral-bottom pl-3'>
                 <Link
                className="navFont text-dark navHover text-decoration-none"
                to="/agenda"
              >
                Actualité {">"}<br/>
              </Link>
              </Row>
             
              <Row className='borderGeneral-bottom pl-3 navFont  pt-1 pb-1'>
 Où nous trouver {">"} <br />
              </Row>
              <Row className='borderGeneral-bottom pl-3 navFont  pt-1 pb-1'>
                 Plus d'infos {">"} <br />
              </Row>
              <Row className='borderGeneral-bottom pl-3 navFont  pt-1 pb-1'>
                 Contact / Newsletter {">"} <br />
              </Row>
             
             
             
            </Row> */}
          </span>
          {/* <Row className='' >
                  <Col xs="6" className="d-block d-sm-none  ">
                  <div className="mt-2"><ParuRecement /></div>
               </Col>  */}
          {/* <Col xs="6" className=" d-block d-sm-none borderGeneral-bottom pb-3">
                  <div className="mt-2"><AParaitre /></div>
               </Col>  */}
          {/* </Row> */}
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
