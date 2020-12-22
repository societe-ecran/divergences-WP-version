import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "../fonts/fonts.css";
import LivresComponent from "./livres";
import Btcarousel from "../components/carousel";

const ParuRecementSmart = () => {
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
          <>
            <div className='text-left pt-2  pb-2 ' >
              <Btcarousel articles={data.allWcProducts.edges} titres="Parus recemment"/>
            </div>
          </>
        )}
      />
    </>
  );
};

export default ParuRecementSmart;
