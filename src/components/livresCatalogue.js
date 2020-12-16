import React from "react"
import Livre from "./livreCatalogue"
import { Container, Row } from "reactstrap";

const Livres = ({ articles }) => {

  const article = articles
  

  return (
    <Container className="d-inline ">
      <Row >
          {article.map((livre,i) => {
            return (
              <Livre article={livre} key={`evenement__${livre.node.wordpress_id}`} />
            )
          })}
        </Row>
       </Container>
  )
}

export default Livres









// import React from "react"
// import { Link } from "gatsby"
// import "../assets/css/main.css"
// import 'moment/locale/fr'
// import "../fonts/fonts.css"

// const Livre = ({ article }) => {
//   return (
      
//           // <Link to={`/article/${article.node.strapiId}`}  
//           // activeStyle={{ textDecoration: "none"}} 
//           // style={{textDecoration:"none"}}>

//           <div class="container justify-content-center d-inline">
//                 <img   
//             src={article.node.image.url}
//             alt={article.node.image.url}
//             className="carteLivre mt-3 ml-3 mr-3 mb-4"
//             height= '480'
//             width="290"
            
//                 />


//             </div>
//           // </Link>
       
//   )
// }

// export default Livre