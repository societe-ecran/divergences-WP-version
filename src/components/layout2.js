import React from "react";
import PropTypes from "prop-types";
import NavBar from "../components/navTop";
import Seo from "./seo";
import NavBottom from "../components/navBottom";
import Navmillieu from "./navmillieu";
import "../fonts/fonts.css";
import { Row, Col } from "reactstrap";

const Layout2 = ({ children }) => {
  return (
    <>
      <Seo />

      <NavBar />

      <div className="container-fluid no-scroll">
        <Row>
          <Col md="6" className="borderGeneral-right d-none d-sm-block">
            <Row className="container-presentation">
              <h4 className=" pl-3 pb-3 pt-3 ">
                <div className="d-none d-sm-block">
                  Editions divergences
                  <br />
                  3 Rue de l’Asile Popincourt
                  <br />
                  75011 Paris
                  <br />
                  <br />
                  contact@editionsdivergences.com
                  <br />
                </div>
                <div className="d-none d-sm-block">
                  <span className="navHover">
                    <a
                      className=" text-dark navFont medieumSize"
                      style={{
                        textDecoration: "none",
                      }}
                      href="https://fr-fr.facebook.com/EditionsDivergences/"
                      target="_blank" rel="noreferrer"
                    >
                      Facebook /
                    </a>
                  </span>

                  <span className="textFont navHover">
                    <a
                      className=" text-dark navFont medieumSize"
                      style={{
                        textDecoration: "none",
                      }}
                      href="https://www.instagram.com/editionsdivergences/?hl=fr"
                      target="_blank" rel="noreferrer"
                    >
                      {" "}
                      Instagram /
                    </a>
                  </span>

                  <span className=" textFont navHover">
                    <a
                      className=" text-dark navFont medieumSize"
                      style={{
                        textDecoration: "none",
                      }}
                      href="https://twitter.com/EDivergences?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                      target="_blank" rel="noreferrer"
                    >
                      {" "}
                      Twitter /
                    </a>
                  </span>

                  <span className=" textFont navHover">
                    <a
                      className=" text-dark navFont medieumSize"
                      style={{
                        textDecoration: "none",
                      }}
                      href="https://www.linkedin.com/in/editions-divergences-5295a91b9/"
                      target="_blank" rel="noreferrer"
                    >
                      {" "}
                      Linkedin
                    </a>
                  </span>
                </div>
              </h4>
            </Row>
            <Row className=" d-none d-sm-block">
              <Col sm="12">
                <Navmillieu className="" />
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="col-md-12 borderGeneral-top-speciale catalogue d-none d-sm-block">
          <main>{children}</main>
        </div>

        <div className="col-md-12 borderGeneral-top-speciale d-block d-sm-none">
          <main>{children}</main>
        </div>

        <NavBottom />
      </div>
    </>
  );
};

Layout2.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout2;
