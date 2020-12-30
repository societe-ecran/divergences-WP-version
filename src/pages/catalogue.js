import React from "react";
import "../assets/css/main.css";
// import "../fonts/fonts.css";
import Layout2 from "../components/layout2";
import Catalogue from "../components/catalogue";
import { Container } from "reactstrap";

const IndexPage = () => (
  <Layout2>
    <Container fluid className="pb-5 mb-5 mx-0 px-0  ">
      <Catalogue className="mx-0 px-0" />
    </Container>
  </Layout2>
);

export default IndexPage;
