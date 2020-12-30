import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "../fonts/fonts.css";
import Btcarousel from "../components/carousel";

const AParaitreSmart = () => {
  return (
    <>
      <StaticQuery
        query={graphql`
          query {
            allWcProducts(
              filter: {
                categories: { elemMatch: { name: { eq: "a paraitre" } } }
              }
            ) {
              edges {
                node {
                  categories {
                    name
                  }
                  description
                  name
                  price
                  slug
                  wordpress_id
                  attributes {
                    name
                    options
                  }
        #           images {
        #   localFile {
        #     childImageSharp {
        #       fluid(maxWidth: 240) {
        #         src
        #       }
        #     }
        #   }
        # }

                  images {
                    src
                  }
                }
              }
            }
          }
        `}
        render={(data) => (
         
              <div className="d-block d-sm-none pt-2 pb-2">
                <Btcarousel articles={data.allWcProducts.edges} titres="A paraître"/>
              </div>
          
        )}
      />
    </>
  );
};

export default AParaitreSmart;