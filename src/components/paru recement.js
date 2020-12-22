import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "../fonts/fonts.css";
import LivresComponent from "./livres";
import Btcarousel from "../components/carousel";

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
          <>
            <div className="d-none d-xl-block">
              <LivresComponent articles={data.allWcProducts.edges} className=' d-none d-xl-block' />
            </div>
            {/* <div className=''>
              <Btcarousel articles={data.allWcProducts.edges} titres="Parus recemment"/>
            </div> */}
          </>
        )}
      />
    </>
  );
};

export default ParuRecement;
