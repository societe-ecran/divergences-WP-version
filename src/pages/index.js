import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import "../assets/css/main.css";
import EvenementsComponent from "../components/evenements";
import "../fonts/fonts.css";
import { Row, Col } from "reactstrap";
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

          <Row className="borderGeneral-bottom ">
            <Col xs="2"></Col>
            <Col xs="1" className="d-block d-sm-none">
              <div className="ecritureVericale text-center mt-5 d-block d-sm-none">
                Paru recemment
              </div>
            </Col>
            <Col xs="8" className="">
              <div className=" borderGeneral-left d-block d-sm-none ">
                <ParuRecementSmart />
              </div>
            </Col>
          </Row>

          {/* A paraitre Smartphone */}
          <Row className="borderGeneral-bottom ">
            <Col xs="1" className="d-block d-sm-none">
              <div className="ecritureVericale maginSpecial ">A paraître </div>
            </Col>
            <Col xs="10">
              <div className=" borderGeneral-left d-block d-sm-none">
                <AParaitreSmart />
              </div>
            </Col>
          </Row>

          <Row className="borderGeneral-bottom pt-1 pb-1 pl-2 navFont d-block d-sm-none ">
            <div>Actualités</div>
          </Row>
  </span>
          {/* <Row className='' >
                  <Col xs="6" className="d-block d-sm-none  ">
                  <div className="mt-2"><ParuRecement /></div>
               </Col>  */}
          {/* <Col xs="6" className=" d-block d-sm-none borderGeneral-bottom pb-3">
                  <div className="mt-2"><AParaitre /></div>
               </Col>  */}
          {/* </Row> */}

          <EvenementsComponent
            className="navFont pb-5 mb-5"
            articles={data.allWpPost.edges}
          />
      
        </span>
      )}
    />
  </Layout>

);

export default IndexPage;
