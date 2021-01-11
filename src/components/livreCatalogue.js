import React from "react";
import { Link } from "gatsby";
import "../assets/css/main.css";
import Img from "gatsby-image"
// import "../fonts/fonts.css";
// import ReactCardFlipper from "react-card-flipper";

const Livre = ({ article }) => {

  return (
    <div className="smooth">
     
     
     
      <div className="d-block d-sm-none mx-0 ">
        <Link
          to={`/livre/${article.node.slug}`}
          activeStyle={{ textDecoration: "none" }}
          style={{ textDecoration: "none" }}
        >
          {/* <Img fluid={article.node.images[0].localFile.childImageSharp.fluid} /> */}
          <img
            src={
              article.node.images[0] !== undefined
                ? article.node.images[0].src
                : ""
            }
            alt=""
            className="ml-3 mr-3 mb-2 mt-2 carteLivre"
            height="220"
            width="auto"
          />
        </Link>
      </div>


      <div className="d-none d-sm-block">

        {/* <div className=' ml-5 pl-1 verso'>
         {article.node.name}
          
        </div> */}
     
      {/* <div class="class_test">
     <img
            src={
              article.node.images[0] !== undefined
                ? article.node.images[0].src
                : ""
            }
            alt=""
            className="pl-4 pr-4 pt-2 pb-3 transparent"
            height="auto"
            width="240"
          />

    <p class="text">Texte affiché</p>
</div>        */}


<Link
          to={`/livre/${article.node.slug}`}
          activeStyle={{ textDecoration: "none" }}
          style={{ textDecoration: "none" }}
        >
          <img
            src={
              article.node.images[0] !== undefined
                ? article.node.images[0].src
                : ""
            }
            alt=""
            className="pl-4 pr-4 pt-2 pb-3"
            height="auto"
            width="240"
          />
           </Link>
      </div>



      
      {/* <Col className="text-center text-dark decoration-non containerlivre">
          <Link
            to={`/livre/${article.node.slug}`}
            activeStyle={{ textDecoration: "none" }}
            style={{ textDecoration: "none" }}
          >
            <div class="contenant">
              <img
                src=""
                alt=""
                className="pl-3 pr-3 pb-3 pt-3"
                width="250"
                height="380"
              />
              <div className="texte_centrer textFont">
                <div className="text-dark decoration-non font-weight-bolder ">
                  {titre}
                </div>
                <div className="text-dark decoration-non font-weight-bolder mt-5 ">
                  {auteurMaj}
                </div>
              </div>
            </div>
          </Link>
        </Col> */}
      {/* </ReactCardFlipper> */}
    </div>
  );
};

export default Livre;
