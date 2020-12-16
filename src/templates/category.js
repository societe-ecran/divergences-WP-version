// import React from "react"
// import { graphql } from "gatsby"
// import LivresComponent from "../components/livres"
// import Layout from "../components/layout"
// import Collections from "../components/collections"

// export const query = graphql`
//   query Category($id: Int!) {
//     articles: allStrapiArticle(filter: { category: { id: { eq: $id } } }) {
//       edges {
//         node {
//           strapiId
//           title
//           category {
//             name
//           }
//           image {
//             publicURL
//           }
//         }
//       }
//     }
//     category: strapiCategory(strapiId: { eq: $id }) {
//       name
//     }
//   }
// `

// const Category = ({ data }) => {
//   const articles = data.articles.edges

//   return (
//     <Layout>
//       <Collections />
//          {/* <h1>{category}</h1> */}
//           <LivresComponent articles={articles} />
//     </Layout>
//   )
// }

// export default Category
