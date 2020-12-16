import React from "react";
import PropTypes from "prop-types";
import NavTop from "./navTop";
import Seo from "./seo";
import NavBottom from "../components/navBottom";
// import LivresComponent from "../components/livres";
import Navmillieu from "./navmillieu";
import "../fonts/fonts.css";
// import AParaitre from "./a paraitre";
// import ParuRecement from "./paru recement";
// import Catalogue from "../components/catalogue";
import { Row, Col } from "reactstrap";

const Layout2 = ({ children }) => {
  return (
    <>
      <Seo />

    
      <NavTop />

      <div className="container-fluid borderGeneral-top">
        <Row>
          <Col md="6" className="borderGeneral-right ">
            <Row className="container-presentation">
              <h3 className=" pl-3 pb-3 pt-3 ">
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
                <div>
                  <span className="navHover">
                    <a
                      className=" text-dark navFont"
                      style={{
                        textDecoration: "none",
                      }}
                      href="https://fr-fr.facebook.com/EditionsDivergences/"
                    >
                      Facebook /
                    </a>
                  </span>

                  <span className="textFont navHover">
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

                  <span className=" textFont navHover">
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

                  <span className=" textFont navHover">
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
              </h3>
            </Row>
            <Navmillieu />
          </Col>
        </Row>

        <div className="col-md-12 borderGeneral-top catalogue">
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
