import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import NavTop from "./navTop";
import Seo from "./seo";
import Navmillieu from "../components/navmillieu";
import NavBottom from "../components/navBottom";
import "../fonts/fonts.css";
import AParaitre from "./a paraitre";
import ParuRecement from "./paru recement";
import { Row, Col } from "reactstrap";
import NavBar from "../components/navTop";



const Layout = ({ children }) => {
  let aparaitre = "à";

  return (
    <div className="no-scroll">
      <Seo />

      <NavBar />

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
                  ville {
                    ville
                  }
                }
              }
            }
          }
        `}
        render={(data) => (
          <div className="container-fluid no-scroll ">
            <Row>
              <Col md="6" className="borderGeneral-right colonne">
                <Row className="container-presentation d-none d-xl-block">
                  <h4 className=" pl-3 pb-3 pt-3 ">
                    <div className="">
                      Editions divergences
                      <br />
                      3 Rue de l’Asile Popincourt
                      <br />
                      75011 Paris
                      <br />
                      <br />
                      contact@editionsdivergences.com
                      <br />
                      06 69 77 08 14
                      <br />
                    </div>

                    <div className="d-none d-xl-block">
                      <span className="navHover">
                        <a
                          className=" text-dark navFont medieumSize"
                          style={{
                            textDecoration: "none",
                          }}
                          href="https://fr-fr.facebook.com/EditionsDivergences/"
                        >
                          Facebook /
                        </a>
                      </span>

                      <span className="textFont navHover medieumSize">
                        <a
                          className=" text-dark navFont"
                          style={{
                            textDecoration: "none",
                          }}
                          href="https://www.instagram.com/editionsdivergences/?hl=fr"
                        >
                          {" "}
                          Instagram /
                        </a>
                      </span>

                      <span className=" textFont navHover medieumSize">
                        <a
                          className=" text-dark navFont"
                          style={{
                            textDecoration: "none",
                          }}
                          href="https://twitter.com/EDivergences?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                        >
                          {" "}
                          Twitter /
                        </a>
                      </span>

                      <span className=" textFont navHover medieumSize">
                        <a
                          className=" text-dark navFont"
                          style={{
                            textDecoration: "none",
                          }}
                          href="https://www.linkedin.com/in/editions-divergences-5295a91b9/"
                        >
                          {" "}
                          Linkedin
                        </a>
                      </span>
                    </div>
                  </h4>
                </Row>

{/* version ordi */}
                <Row className="d-none d-xl-block">
                  <Col sm="12" className="borderGeneral-bottom ">
                    <Navmillieu className="" />
                  </Col>
                </Row>
                
{/*  version smartphone */}
                <Row className="">
                  <Col xs="3" className="d-block d-sm-none"></Col>
                  <Col xs="9" className="borderGeneral-left d-block d-sm-none">
                    <Navmillieu className="" />
                  </Col>
                </Row>





                <div className="carre">
                  <main>{children}</main>
                </div>


              </Col>

              <Col md="4" className="borderGeneral-right">
                <div className="parution-container-enfant overscroll-behavior">
                  <h4 className="pl-3 bg-white pt-2 sticky-top">
                    Parus récemment
                  </h4>

                  <div className="pl-3 pr-3">
                    <ParuRecement />
                  </div>
                </div>
              </Col>

              <Col md="2" className="">
                <div className="parution-container-enfant overscroll-behavior">
                  <h4 className=" pl-3 bg-white pt-2 sticky-top">
                    {aparaitre.toUpperCase()} paraître
                  </h4>
                  <div className="pl-4">
                    <AParaitre />
                  </div>
                </div>
              </Col>
            </Row>
            <NavBottom />
          </div>
        )}
      />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
