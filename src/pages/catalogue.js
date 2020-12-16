import React from "react";
import { StaticQuery, graphql } from "gatsby";
// import Layout from "../components/layout"
import "../assets/css/main.css";
import "../fonts/fonts.css";
// import LivresComponent from "../components/catalogue";
import Layout2 from "../components/layout2";
// import Collections from "../components/collections";
// import Livres from "../components/livreCatalogue";
import Catalogue from "../components/catalogue";

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
        <div>
          <Catalogue />
        </div>
      )}
    />
  </Layout2>
);

export default IndexPage;
