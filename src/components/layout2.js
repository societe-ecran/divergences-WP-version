import React from "react";
import PropTypes from "prop-types";
import NavBar from "../components/navTop";
// import Seo from "./seo";
import NavBottom from "../components/navBottom";
import Navmillieu from "./navmillieu";
import "../fonts/fonts.css";
import { Row, Col } from "reactstrap";
import AParaitre from "./a paraitre";
import ParuRecement from "./paru recement";

const Layout2 = ({ children }) => {
  const aparaitre = "à";
  const e = "é";
  const eMaj = e.toUpperCase();
  return (
    <div>
      {/* <Seo /> */}
      <NavBar />
      <div className="container-fluid no-scroll">
        <Row>
          <Col md="6" className="borderGeneral-right d-none d-sm-block">
            <Row className="container-presentation">
              <h4 className=" pl-3 pb-2 pt-2 ">
                <div className="d-none d-sm-block quatorze">
                  {eMaj}ditions divergences
                  <br />
                  <span className="interligne">
                    3, rue de l’Asile Popincourt
                  </span>
                  <br />
                  75011 Paris
                  <br />
                  <br />
                  contact@editionsdivergences.com
                  <br />
                </div>
                <div className="d-none d-sm-block quatorze">
                  <span className="navHover ">
                    <a
                      className=" text-dark navFont quatorze"
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

                  <span className="textFont navHover">
                    <a
                      className=" text-dark navFont quatorze"
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

                  <span className=" textFont navHover">
                    <a
                      className=" text-dark navFont quatorze"
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

                  <span className=" textFont navHover">
                    <a
                      className=" text-dark navFont quatorze"
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

            <Row className="d-none d-sm-block">
              <Col sm="12">
                <Navmillieu className="" />
              </Col>
            </Row>
          </Col>

          <Col md="4" sm="12" xs="12" className="borderGeneral-right">
            <div className="parution-container-enfant overscroll-behavior">
              <Row className="pl-3 bg-white pt-1 pb-0 mb-0  navFont dix">
              {/* sticky-top */}
                <span className="pl-2 bg-white pb-0 mb-0 navFont dix">
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
              <Row className=" dix pl-2 bg-white  pb-0 mb-0">
                <span className=" dix pl-3 bg-white  pb-0 mb-0  navFont pt-1">
                {/* sticky-top */}
                  {aparaitre.toUpperCase()} paraître
                </span>
              </Row>

              <div className="pl-2">
                <AParaitre />
              </div>
            </div>
          </Col>
        </Row>

        <div className="col-md-12 borderGeneral-top-speciale catalogue d-none d-sm-block mx-0 px-0">
          <main>{children}</main>
        </div>

        <div className="col-md-12 borderGeneral-top-speciale d-block d-sm-none">
          <main>{children}</main>
        </div>

        <NavBottom />
      </div>{" "}
    </div>
  );
};

Layout2.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout2;
