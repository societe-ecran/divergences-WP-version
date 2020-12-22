import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import "../assets/css/main.css";
import EvenementsComponent from "../components/evenements";
import "../fonts/fonts.css";
import { Container, Row, Col } from "reactstrap";
import AParaitre from "../components/a paraitre";
import ParuRecement from "../components/paru recement";
import ParuRecementSmart from "../components/parurecemmentSmartPhone";
import AParaitreSmart from "../components/aparaitreSmart";

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
                adresse2 {
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
                slug
                ville {
                  ville
                }
              }
            }
          }
        }
      `}
      render={(data) => (
     <span>

   
        <span className="d-block d-sm-none">
          {/* Paru Recemment Smartphone */}

          <Row className="borderGeneral-bottom ">
            <Col xs="2"></Col>
            <Col xs="1" className="d-block d-sm-none">
              <div className="ecritureVericale text-center mt-5 d-block d-sm-none">
                Paru recemment
              </div>
            </Col>
            <Col xs="8" className="">
              <div className=" borderGeneral-left d-block d-sm-none ">
                <ParuRecementSmart />
              </div>
            </Col>
          </Row>

          {/* A paraitre Smartphone */}
          <Row className="borderGeneral-bottom ">
            <Col xs="1" className="d-block d-sm-none">
              <div className="ecritureVericale maginSpecial ">A paraître </div>
            </Col>
            <Col xs="10">
              <div className=" borderGeneral-left d-block d-sm-none">
                <AParaitreSmart />
              </div>
            </Col>
          </Row>

          <Row className="borderGeneral-bottom pt-1 pb-1 pl-2 navFont d-block d-sm-none ">
            <div>Actualités</div>
          </Row>
  </span>
          {/* <Row className='' >
                  <Col xs="6" className="d-block d-sm-none  ">
                  <div className="mt-2"><ParuRecement /></div>
               </Col>  */}
          {/* <Col xs="6" className=" d-block d-sm-none borderGeneral-bottom pb-3">
                  <div className="mt-2"><AParaitre /></div>
               </Col>  */}
          {/* </Row> */}

          <EvenementsComponent
            class="navFont"
            articles={data.allWpPost.edges}
          />
      
        </span>
      )}
    />
  </Layout>

);

export default IndexPage;

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
