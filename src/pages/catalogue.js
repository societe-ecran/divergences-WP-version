import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "../assets/css/main.css";
import "../fonts/fonts.css";
import Layout2 from "../components/layout2";
import Catalogue from "../components/catalogue";
import { Container } from "reactstrap";

const IndexPage = () => (
  <Layout2>
    <StaticQuery
      query={graphql`
        query {
          allWcProducts {
            edges {
              node {
                categories {
                  name
                }
                description
                wordpress_id
                name
                price
                attributes {
                  name
                  options
                }
                images {
                  src
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <Container fluid className='pb-5 mb-5'>
          <Catalogue />
        </Container>
      )}
    />
  </Layout2>
);

export default IndexPage;
