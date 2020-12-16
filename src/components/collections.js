// import React from "react"
// import { Link, StaticQuery, graphql } from "gatsby"

// const Collections = () => (

// <div>
//           <ul className>
//             <StaticQuery
//               query={graphql`
//                 query {
//                   fileName: file(relativePath: { eq: "images/Logo-Divergences.png" }) {
//                     childImageSharp {
//                       fluid(maxWidth: 400, maxHeight: 250) {
//                         ...GatsbyImageSharpFluid
//                       }
//                     }
//                   }
//                   allStrapiCategory {
//                     edges {
//                       node {
//                         strapiId
//                         name
//                       }
//                     }
//                   }
//                 }
//               `}
//               render={data =>
//                 data.allStrapiCategory.edges.map((category, i) => {
//                   return (
//                     <li key={category.node.strapiId}>
//                       <Link to={`/category/${category.node.strapiId}`}>
//                         {category.node.name}
//                       </Link>
//                     </li>
//                   )
//                 })
//               }
//             />
//           </ul>
//         </div>
// )

// export default Collections