import React from "react";
import Layout2 from "../components/layout2";
import "../assets/css/main.css";
import "../components/leafletmap.css";
import LeafletMaps from "../components/leafletmaps";
import "../fonts/fonts.css";
import { Container, Row, Col } from "reactstrap";
// import { Map, TileLayer , Marker, Popup } from 'react-leaflet'

const Ounoustrouver = () => {
  return (
    <Layout2>
      <Container fluid>
        <Row className="mt-4">
          <Col sm="9">
            {typeof window !== "undefined" && (
              <LeafletMaps
                position={[46.52863469527167, 2.43896484375]}
                zoom={6}
              />
            )}
          </Col>

          <Col sm="3">
            <p className="textFont textmap mb-5 pb-5">
              Voici certaines des librairies où vous pouvez retrouver nos
              livres. Si le livre que vous recherchez n’est pas en rayon chez
              votre libraire habituel, plutôt que de l’acheter sur une grande
              plateforme d’achat en ligne, vous pouvez demander à votre libraire
              de vous le commander ou passer par
              {""}{" "}
              <a href="https://www.leslibraires.fr/">
                https://www.leslibraires.fr/
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </Layout2>
  );
};

export default Ounoustrouver;
