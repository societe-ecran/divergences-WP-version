import React from "react"
import { StaticQuery, graphql, } from "gatsby"
import "../fonts/fonts.css"
import LivresCatalogue from "./livresCatalogue"

const Catalogue = () => {

  return (
    <>
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
        
  
  <div> 
      {/* <LivresComponent articles={data.allStrapiLivre.edges} /> */}
       <LivresCatalogue articles={data.allWcProducts.edges} />
  </div> 
      )}
    />   
    </>
  )
}

export default Catalogue






// import React from "react"
// import Livre from "./livreCatalogue"


// const Livres = ({ articles }) => {
//   const article = articles
  
//   return (
//       <div>
//           {article.map((livre, i) => {
//             return (
//               <Livre article={livre} key={`evenement__${livre.node.id}`} />
//             )
//           })}
//         </div> 
//   )
// }

// export default Livres
