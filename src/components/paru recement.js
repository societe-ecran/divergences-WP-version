import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "../fonts/fonts.css";
import LivresComponent from "./livres";

const ParuRecement = () => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query {
            allWcProducts(
              filter: {
                categories: { elemMatch: { name: { eq: "recemment paru" } } }
              }
            ) {
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
            <LivresComponent articles={data.allWcProducts.edges} />
          </div>
        )}
      />
    </>
  );
};

export default ParuRecement;
