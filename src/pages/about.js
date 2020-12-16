import React from "react"
import "../assets/css/main.css"
import "../fonts/fonts.css"
import Layout from "../components/layout"
import { Container, Row, Col } from "reactstrap";

const IndexPage = () => (
  
  
  <Layout>
    <Container fluid>
      <Row className= 'pt-3'>
          <Col className='pl-2 borderGeneral-right textFont'>
    <p class="text-center textFont font-italic ">
      Contact mail 
    </p>
    <p class="textFont">
      Si vous avez la moindre question, n’hésitez pas à nous écrire.
      </p>
      
    <form name="contact" method="post" data-netlify="true" 
data-netlify-honeypot="bot-field"> 
<input type="hidden" name="bot-field" />  <input type="hidden" name="form-name"  class="textFont "/>  

  <div className="field half">
    <label htmlFor="email"></label>
    <input type="text" name="email" id="email" placeholder="" class="textFont bordureForm formulaire"/>
  </div>
  <div className="field">
    <label htmlFor="message"></label>
    <textarea name="message" id="message" rows="8" placeholder="" 
    class="textFont bordureForm formulaire"/>
  </div>
  <a href='' className='text-dark under textFont' >
   {"> "}envoyer
 </a>
</form>
    </Col>


    <Col className='ml-3 textFont'>
          <p class="text-center font-italic textFont">
            Newsletter
          </p>
            <p class="textFont">
            Lecteurs et lectrices, curieuses et
curieux, libraires, journalistes, si vous
souhaitez être tenu au courant de nos
ouvrages, de nos événements et de nos
activités une fois par mois, laissez-nous
votre adresse mail ici.
            </p>

            <div className="">
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">  <input type="hidden" name="bot-field" />  <input type="hidden" name="form-name" value="contact" />  <div className="field half first">
    <label htmlFor="email"></label>
    <input type="text" name="email" id="email" placeholder="" class="formulaire textFont bordureForm"/>
  </div>
 <a href='' className='text-dark under textFont' >
   {"> "}inscription
 </a>
</form>
          </div>
          </Col>
    </Row>
    </Container> 
  </Layout>
)

export default IndexPage























// import React from "react"
// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const About = () => (
//   <Layout>
//     <SEO title="Contact Editions Divergences" />
    
//     <div>
//     <h3>A propos</h3>
//     <p> 
//     Fondées en septembre 2016, les Éditions Divergences, s’attachent à publier des essais de critique sociale et politique. Si le « papier » peut paraître être un choix risqué aujourd’hui, nous sommes convaincus de la nécessité de continuer à produire des livres, des livres de papier, d’encre et de colle. Des livres qui s’usent, qui se prêtent, qui se déchirent, qui circulent, des livres qui vivent et qui interpellent.

// Un livre c’est une succession de choses : un texte bien sûr mais c’est aussi des choix graphiques, un papier plutôt qu’un autre, un imprimeur, un réseau de diffusion et de distribution, et c’est le désir d’une multitude de libraires de le faire vivre ou non. Toutes ces choses ont un coût dans un monde médié par l’argent et le livre a un prix, à l’éditeur de faire en sorte qu’il soit le moins prohibitif possible.

// Si le livre est bien une marchandise, il se doit de dépasser cette pauvre condition de base pour « risquer […] le court-circuit d’une rencontre, tenter un contact qui ne soit pas une médiation marchande, une reconnaissance qui soit stratégique et non spectatrice. » (La Cassure, 2017)

// Chaque livre que l’on publie répond à un désir ou à une nécessité : saisir un peu mieux tel aspect de notre société, intervenir dans une situation politique concrète, éclairer tel aspect de notre histoire.

// Créer une maison d’édition c’est donc se donner la force de participer à la production et à la nécessaire circulation d’une intelligence critique sur ce monde et ses effets. C’est placer un nouveau pion du bon côté de l’échiquier, un pion dont les capacités de mouvement sont forcément limitées mais un pion de plus, quand même.
//     </p>
// </div>

// <div>
//     <h3 >Nous contacter</h3>

// <form name="contact" method="post" data-netlify="true" 
// data-netlify-honeypot="bot-field"> 
// <input type="hidden" name="bot-field" />  <input type="hidden" name="form-name" value="contact" />  

// <div className="field half first">
//     <label htmlFor="name">Nom</label>
//     <input type="text" name="name" id="name" />
//   </div>
//   <div className="field half">
//     <label htmlFor="email">Votre Email</label>
//     <input type="text" name="email" id="email" />
//   </div>
//   <div className="field">
//     <label htmlFor="message">Message :</label>
//     <textarea name="message" id="message" rows="6" />
//   </div>
//   <ul className="actions">
//     <li>
//       <input type="submit" value="Send Message" className="special" />
//     </li>
//   </ul>
// </form>


// </div>
    
    
    

//   </Layout>
// )

// export default About