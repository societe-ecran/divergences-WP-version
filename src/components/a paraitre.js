import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "../fonts/fonts.css";
import LivresComponent from "./livres";
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
                  description
                  name
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
        render={(data) => (
          <di>
            <div className="d-none d-xl-block" >
              <LivresComponent articles={data.allWcProducts.edges} />
            </div>
            <div>
              <div className="d-block d-sm-none">
                <Btcarousel articles={data.allWcProducts.edges} titres="A paraître"/>
              </div>
            </div>
          </di>
        )}
      />
    </>
  );
};

export default AParaitre;
