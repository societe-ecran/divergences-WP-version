import React from "react";
import { Link } from "gatsby";
import "../assets/css/main.css";
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
        <Container className='borderGeneral-bottom 
       
         livreCentre'>
              <img
                src={article.node.images[0].src}
                alt={"couverture manquante"}

                className="tailleLivreRcementParu"
              />
              </Container>
      )



    } else if (categorieChoisie === "a paraitre") {
      return (
        <Container className='borderGeneral-bottom livreCentre '>
                <img
                  src={article.node.images[0].src}
                  alt={"couverture manquante"}
                  className="tailleLivreAparaitre"
                />
                </Container>
      );
    } else {
      return (
        <Container>
              <img
                src={article.node.images[0].src}
                alt={"couverture manquante"}
                className="tailleLivrePardeffault d-flex"
              />
        </Container>
      );
    }
  };

  return (
    <div class="text-dark textFont" style={{ textDecoration: "none" }}>
      <Link
        to={`/livre/${article.node.slug}`}
        activeStyle={{ textDecoration: "none" }}
        style={{ textDecoration: "none" }}
      >
        {tailleAffichageLivre()}
      </Link>
    </div>
  );
};

export default Livre;
