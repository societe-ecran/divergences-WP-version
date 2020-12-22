import React from "react";
import Layout from "../components/layout";
import "../assets/css/main.css";
import "../fonts/fonts.css";
import { Container, Row, Col } from "reactstrap";

const plusDinfo = () => (
  <Layout>
    <Row className='mx-0'>
      <Col xs="6" className="d-block d-sm-none  "></Col>
    </Row>
    <Container fluid className='mb-5 pb-5'>
      <Row className='mx-0'>
        <div>
          <p className=" pt-2 textFont">
            Fondées en septembre 2016, les éditions divergences s’attachent à
            publier des ouvrages de critique sociale et politique. Quel que soit
            l’angle par lequel ils abordent le réel nos livres cherchent à
            comprendre et à rendre intelligible le monde dans lequel nous
            vivons, à le combattre et en imaginer de nouveaux, plus beaux, plus
            justes et plus désirables
          </p>
        </div>
      </Row>
      <Row className="pt-3 mx-0">
        <Col className="pr-3 borderGeneral-right">
          <p className="textFont">
            Fondateur et directeur éditorial :<br />
            <p className="text-right">Johan Badour</p>
            Éditeur :<br />
            <p className="text-right textFont">
              Alex Taillard
              <br />
            </p>
            Communication et relations presse :<br />
            <p className="text-right textFont">
              Zoé Serafinowicz
              <br />
            </p>
            Graphisme :<br />
            <p className="text-right textFont">
              Morgane Masse,
              <br /> Anouk Rebaud,
              <br />
              Alexandre Mouawad
              <br />
            </p>
            Développement Web:
            <br />
            <p className="text-right textFont">
              Antonin Reigneaud
              <br />
            </p>
          </p>

          <img
            className="cent pt-5"
            alt="divergences"
            src="https://res.cloudinary.com/dc0hoba1w/image/upload/v1607600822/small_depliant_215a65696f.png"
          ></img>
        </Col>

        <Col className="textFont newsMagin">
          <p>
            Diffusion & Distribution
            <br />
            <p className="text-center font-italic textFont">
              Pour la France et la Belgique
              <br />
            </p>
            Diffusion :<br />
            <p className="text-right">
              HOBO DIFFUSION
              <br />
              23 rue Pradier
              <br />
              75019 Paris
              <br />
              Tél. : 06 46 79 40 71
              <br />
            </p>
            Distribution :<br />
            <p className="text-right">
              MAKASSAR DISTRIBUTION
              <br />
              8 rue Pelleport
              <br />
              75020 PARIS
              <br />
              Tél : 01 40 33 69 69
              <br />
              Fax : 01 40 33 91 30
              <br />
              contact@makassar-diffusion.com
              <br />
            </p>
            <p className="text-center font-italic">
              Pour la Suisse
              <br />
            </p>
            Diffusion :<br />
            <p className="text-right">
              AVEC PLAISIR
              <br />
              Phil Berger
              <br />
              Tél. : + 41 22 301 17 74
              <br />
              pberger@servidis.ch
              <br />
              Distribution :<br />
              SERVIDIS
              <br />
              Ch. Des Chalets 7<br />
              1279 Chavennes-de-Bogis | Tél. : + 41 22 960 95 10 |<br />
              commande@servidis.ch
              <br />
            </p>
            <p className="text-center font-italic">
              Pour le Québec : <br />
            </p>
            <p className="text-right">
              Diffusion/Distribution : DIMEDIA
              <br />
            </p>
          </p>
          
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default plusDinfo;
