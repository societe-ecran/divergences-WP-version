import React from "react";
import { Link } from "gatsby"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { StaticQuery, graphql } from "gatsby";
import { Row, Col } from "reactstrap";
import Evenement from "./evenement"

const Evenements = ({ articles }) => {

  return (
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
        // <div className='container-fluid  mr-0 pr-0' >
        // <Accordion allowMultipleExpanded>
        //   {data.allWpPost.edges.map((evenement) => {
        //     return (
        //       <AccordionItem className="border-bottom">
        //         <AccordionItemHeading>
        //           <AccordionItemButton>
        //             <Row>
        //               <Col sm="2" className="textFont">
                       
        //                   {evenement.node.dateevenement.dateEvenement}

        //               </Col>
        //               <Col sm="7">

        //               <Link 
        //               style={{textDecoration:"none"}} 
        //               to={`/evenements/${evenement.node.slug}`}
        //               className="navHover" >
        //                 <span className="textFont">{evenement.node.title}</span>
        //                 </Link>


        //               </Col>
        //               <Col sm="3" className="text-align-right textFont">
        //                 <div className="text-center text-md-right">
        //                   {evenement.node.ville.ville}
        //                 </div>
        //               </Col>
        //             </Row>
        //           </AccordionItemButton>
        //         </AccordionItemHeading>
        //         <AccordionItemPanel>
        //           <Row>
        //             <Col sm="2"></Col>
        //             <Col sm="7">
        //               <span
        //                 dangerouslySetInnerHTML={{
        //                   __html: evenement.node.content,
        //                 }}
        //               ></span>
        //             </Col>
        //             <Col sm="3" className="">
        //               <div className="text-center text-md-right">{evenement.node.adresse.adresse}</div>
        //               <div className="text-center text-md-right">{evenement.node.adresse2.prix}</div>
        //               <div className="text-center text-md-right">{evenement.node.horaire.horaire}</div>
        //             </Col>
        //           </Row>
        //         </AccordionItemPanel>
        //       </AccordionItem>
        //     );
        //   })}
        // </Accordion>
        // </div>
   

<div>




{articles.map((article, i) => {
      return (

        <div>
        <Evenement evenement={article} key={`evenements__${article.node.slug}`} />
        </div>
      )
    })}

</div>


      )}
    />

    
  );
};

export default Evenements;