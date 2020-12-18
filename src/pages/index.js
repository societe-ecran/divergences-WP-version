import React from "react"
import { StaticQuery, graphql, } from "gatsby"
import Layout from "../components/layout"
import "../assets/css/main.css"
import EvenementsComponent from "../components/evenements"
import "../fonts/fonts.css"
import {Container, Row, Col } from "reactstrap";
import AParaitre from "../components/a paraitre";
import ParuRecement from "../components/paru recement";

const IndexPage = () => (
  
  
  <Layout>
  
    <StaticQuery
      query={graphql`
        query {
          allWpPost {
          edges {
            node {
              adresse {
                adresse
              }
              adresse2{
                  prix
                }
              content
              dateevenement {
                dateEvenement
              }
              horaire {
                horaire
              }
              title
              ville {
                ville
              }
            }
          }
        }
        }
      `}
      render={data => (
        <span>
           {/* <Container  className=" pl-0 ml-0 borderGeneral-bottom d-block d-sm-none"> */}
        {/* <h5 className="navFont" >
          Actualité
        </h5> */}
        {/* </Container> */}
        {/* paru recemment smartphone */}

        <Row className='' >
                  <Col xs="6" className="d-block d-sm-none  ">
                  <div className="mt-2"><ParuRecement /></div>
               </Col> 
               <Col xs="6" className=" d-block d-sm-none borderGeneral-bottom pb-3">
                  <div className="mt-2"><AParaitre /></div>
               </Col> 
                </Row>

    <EvenementsComponent articles={data.allWpPost.edges} />
        </span>
       
      )}
    />
    

  </Layout>
)

export default IndexPage


























// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/layout"
// import SEO from "../components/seo"

// export default ({ data }) => {



//   return (
//     <Layout>
//       <SEO title="home" />
//       <h4>Posts</h4>
//       {data.allWcProducts.edges.map(({ node }) => (
//         <div>
//           <p dangerouslySetInnerHTML={{ __html: node.name }}/>

//           <div dangerouslySetInnerHTML={{ __html: node.description }} />
//           <p>{node.price}</p>
//         {/* <p>
//           {auteur}
//         </p> */}



//           <p>
//             {node.attributes[0].options}
//               </p> 
//             <p>
//               {node.attributes[1].options}
//             </p>
//             <p>
//               {node.attributes[2].options}
//             </p>
//             {node.attributes[3].options}
//             <p>    
//             </p>
//             <p>
//             <div dangerouslySetInnerHTML={{ __html: node.categories[0].name }} />
//             </p>

//             <img
//                 src={node.images[0].src}
//                 width='300'
//           >
//           </img>


            
       
  
         
//         </div>
//       ))}



//       {/* {data.allWordpressPost.edges.map(({ node }) => {


// let imageSource = null;
// if (
//   node.featured_media &&
//   node.featured_media.localFile &&
//   node.featured_media.localFile.url
// ) {
//   imageSource = node.featured_media.localFile.url
// }

// return (
//         <div>
         
       
//           <div dangerouslySetInnerHTML={{ __html: node.title }}/>

//           <div dangerouslySetInnerHTML={{ __html: node.content }} />
//           <p>{node.date}</p>

         
//           <img
  
//   src={imageSource}

//           >
//           </img>
         
         
//         </div>
// )
//       })} */}
//     </Layout>
//   )
// }

// export const pageQuery = graphql`
//   query {
//     allWcProducts {
//     edges {
//       node {
//         attributes {
//           name
//           options
//         }
//         categories {
//           name
//         }
//         images {
//           src
//         }
//         name
//         price
//         description
//       }
//     }
//   }
//   }`
