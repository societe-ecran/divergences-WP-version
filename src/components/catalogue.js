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
                acf {
                  date_de_parution
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
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 240) {
                        src
                      }
                    }
                  }
                }

                # images {
                #   src
                # }
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
