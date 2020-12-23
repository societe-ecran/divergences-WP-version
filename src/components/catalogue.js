import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "../fonts/fonts.css";
import LivresCatalogue from "./livresCatalogue";

const Catalogue = () => {
  return (
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
                name
                slug
                price
                wordpress_id
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
      render={(data) => <LivresCatalogue articles={data.allWcProducts.edges} />}
    />
  );
};

export default Catalogue;
