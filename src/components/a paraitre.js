import React from "react"
import { StaticQuery, graphql, } from "gatsby"
import "../fonts/fonts.css"
import LivresComponent from "./livres"

const AParaitre = () => {

  return (
    <>
      <StaticQuery
      query={graphql`
        query {
        allWcProducts (filter: {categories: {elemMatch: {name: {eq: "a paraitre"}}}}){
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
      render={data => (
        
  
  <div class="row">
      
      <LivresComponent articles={data.allWcProducts.edges} />
       
  </div> 
      )}
    />   
    </>
  )
}

export default AParaitre

