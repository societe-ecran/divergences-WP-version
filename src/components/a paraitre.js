import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "../fonts/fonts.css";
import Livres from "./livres";
import Btcarousel from "../components/carousel";

const AParaitre = () => {
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
                  acf {
                  date_de_parution
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
        #            images {
        #    localFile {
        #     childImageSharp {
        #        fluid(maxWidth: 240) {
        #          ...GatsbyImageSharpFluid
        #         ...GatsbyImageSharpFluidLimitPresentationSize
        #        }
        #      }
        #    }
        #  }

                  images {
                    src
                  }
                }
              }
            }
          }
        `}
        render={(data) => (
          <div >
            <div className="d-none d-sm-block" >
              <Livres articles={data.allWcProducts.edges} />
            </div>

              <div className="d-block d-sm-none">
                <Btcarousel articles={data.allWcProducts.edges} titres="A paraître"/>
              </div>
            
          </div>
        )}
      />
    </>
  );
};

export default AParaitre;
