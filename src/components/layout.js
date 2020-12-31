import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
// import Seo from "./seo";
import Navmillieu from "../components/navmillieu";
import NavBottom from "../components/navBottom";
import "../fonts/fonts.css";
import AParaitre from "./a paraitre";
import ParuRecement from "./paru recement";
import { Row, Col } from "reactstrap";
import NavBar from "../components/navTop";

const Layout = ({ children }) => {
  const aparaitre = "à";
  const e = "é";
  const eMaj = e.toUpperCase();
  return (
    
    <div className="no-scroll scroll-bar-firefox">
      {/* <Seo /> */}

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
                  slug
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
                <Row className="container-presentation d-none d-sm-block">
                  <h4 className=" pl-3 pb-2 pt-2 ">
                    <div className="quatorze">
                      {eMaj}ditions divergences
                      <br />
                      3, rue de l’Asile Popincourt
                      <br />
                      75011 Paris
                      <br />
                      <br />
                      contact@editionsdivergences.com
                      <br />
                    </div>

                    <div className="d-none d-sm-block quatorze">
                      <span className="navHover">
                        <a
                          className="text-dark navFont quatorze"
                          style={{
                            textDecoration: "none",
                          }}
                          href="https://fr-fr.facebook.com/EditionsDivergences/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Facebook /
                        </a>
                      </span>

                      <span className="textFont navHover quatorze">
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
                          Instagram /
                        </a>
                      </span>

                      <span className=" textFont navHover quatorze">
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
                          Twitter /
                        </a>
                      </span>

                      <span className=" textFont navHover quatorze">
                        <a
                          className=" text-dark navFont"
                          style={{
                            textDecoration: "none",
                          }}
                          href="https://www.linkedin.com/in/editions-divergences-5295a91b9/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {" "}
                          Linkedin
                        </a>
                      </span>
                    </div>
                  </h4>
                </Row>

                {/*Nav millieu version ordi */}
                <Row className="d-none d-sm-block">
                  <Col sm="12" className="borderGeneral-bottom ">
                    <Navmillieu />
                  </Col>
                </Row>

                <div className="carre d-none d-sm-block ">
                  <main className="pt-1">{children}</main>
                </div>

                <div className="d-block d-sm-none">
                  <main>{children}</main>
                </div>
              </Col>

              <Col md="4" sm="12" xs="12" className="borderGeneral-right">
                <div className="parution-container-enfant overscroll-behavior">
                  <Row className="pl-2 bg-white pt-1 pb-0 mb-0 sticky-top navFont dix">
                    <span className="pl-3 bg-white pb-0 mb-0 navFont dix interligneAparaitreParuR">
                      Paru récemment
                    </span>
                  </Row>

                  <div className="pl-2 pr-3 mb-0 pb-0 d-none d-sm-block">
                    <ParuRecement />
                  </div>
                </div>
              </Col>

              <Col md="2" className="">
                <div className="parution-container-enfant overscroll-behavior">
                  <Row className=" dix pl-2 bg-white  pb-0 mb-0 sticky-top">
                    <span className=" dix pl-3 bg-white pt-1  pb-0 mb-0 sticky-top navFont interligneAparaitreParuR">
                      {aparaitre.toUpperCase()} paraître
                    </span>
                  </Row>

                  <div className="pl-2">
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
