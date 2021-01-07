import React from "react";
import Layout2 from "../components/layout2";
import "../assets/css/main.css";
import "../components/leafletmap.css";
import LeafletMaps from "../components/leafletmaps";
import "../fonts/fonts.css";
import { Container, Row, Col } from "reactstrap";
// import { Map, TileLayer , Marker, Popup } from 'react-leaflet'
import Seo from "../components/seo";

const Ounoustrouver = () => {
  return (
    <Layout2>
      <Seo siteTitle="Editions Divergences"
          title="Librairies"
          description="Voici certaines des librairies où vous pouvez retrouver nos
          livres."
          keywords={[`Ou nous trouver`, `librairies`, `carte`]}
        />
      <Container fluid className='mb-5 pb-5'>
        <Row className="mt-2">
          <Col sm="9" className="pl-0">
            {typeof window !== "undefined" && (
              <LeafletMaps
                position={[46.52863469527167, 2.43896484375]}
                // zoom={5}
              />
            )}
          </Col>

          <Col sm="3">
            <span className="textFont interligne">
              Voici certaines des librairies où vous pouvez retrouver nos
              livres. Si le livre que vous recherchez n’est pas en rayon chez
              votre libraire habituel, plutôt que de l’acheter sur une grande
              plateforme d’achat en ligne, vous pouvez demander à votre libraire
              de vous le commander ou passer par 
              {""}{" "}
              <a href="https://www.leslibraires.fr/"
              target="_blank" rel="noreferrer"
              >les libraires.fr
              </a>
            </span>
          </Col>
        </Row>
      </Container>
    </Layout2>
  );
};

export default Ounoustrouver;
