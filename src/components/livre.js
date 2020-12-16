import React from "react";
import { Link } from "gatsby";
import "../assets/css/main.css";
// import Moment from "react-moment";
import "moment/locale/fr";
import "../fonts/fonts.css";
import { Container } from "reactstrap";


const Livre = ({ article }) => {
  let categorieChoisie=''

  if(article.node.categories[0].name===undefined || article.node.categories[0].name===null){
    categorieChoisie=''
  }else{
categorieChoisie = article.node.categories[0].name;
  }
  

  const tailleAffichageLivre = () => {
    if (categorieChoisie === "recemment paru") {
      return (
        <Container className='borderGeneral-bottom'>
              <img
                src={article.node.images[0].src}
                alt={"couverture manquante"}
                width="335"
                height="565"
                className='pb-2 pt-2'
              />
              </Container>
      )

    } else if (categorieChoisie === "a paraitre") {
      return (
        <Container className='borderGeneral-bottom'>
                <img
                  src={article.node.images[0].src}
                  alt={"couverture manquante"}
                  width="220"
                  height="360"
                  className='pb-2 pt-2'
                />
                </Container>
      );
    } else {
      return (
        <Container>
              <img
                src={article.node.images[0].src}
                alt={"couverture manquante"}
                width="250"
                height="auto"
              />
        </Container>
      );
    }
  };

  return (
    <div class="text-dark textFont" style={{ textDecoration: "none" }}>
      <Link
        to={`/livre/${article.node.wordpress_id}`}
        activeStyle={{ textDecoration: "none" }}
        style={{ textDecoration: "none" }}
      >
        {tailleAffichageLivre()}
      </Link>
    </div>
  );
};

export default Livre;
