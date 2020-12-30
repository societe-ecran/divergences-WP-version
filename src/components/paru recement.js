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
                  slug
                  price
                  attributes {
                    name
                    options
                  }
        #           images {
        #   localFile {
        #     childImageSharp {
        #       fluid(maxWidth: 350) {
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
          <>
            <div className="d-none d-sm-block">
              <LivresComponent articles={data.allWcProducts.edges} className=' d-none d-sm-block' />
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
