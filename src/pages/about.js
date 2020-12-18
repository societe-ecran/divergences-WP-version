import React from "react";
import "../assets/css/main.css";
import "../fonts/fonts.css";
import Layout from "../components/layout";
import { Container, Row, Col } from "reactstrap";

const IndexPage = () => (
  <Layout>
    <Container fluid>

  <Row>
                  <Col xs="6" className="d-block d-sm-none borderGeneral-top ">
                    </Col>
  </Row>

      <Row className="pt-3">
        <Col md="6 " className="pl-2 borderGeneral-right textFont ">
          <p class="text-center textFont font-italic ">Contact mail</p>
          <p class="textFont">
            Si vous avez la moindre question, n’hésitez pas à nous écrire.
          </p>

          <form
            name="contact"
            method="POST"
            action="https://getform.io/f/315553d0-c18b-4ccf-8aa2-f2e268a3a237"
            className='centerNewsletter'
          >
            {" "}
            <div className="field half">
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email :"
                className="textFont bordureForm formulaire text-center"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="message"></label>
              <textarea
                name="message"
                id="message"
                rows="8"
                placeholder="message :"
                class="textFont bordureForm formulaire"
                required
              />
            </div>
            <button
              type="submit"
              href=""
              className="text-dark under textFont buttonContact"
            >
              {"> "}envoyer
            </button>
          </form>
        </Col>

        <Col md="5 " className="ml-3 textFont newsMagin">
          <p class="text-center font-italic textFont">Newsletter</p>
          <p class="textFont">
            Lecteurs et lectrices, curieuses et curieux, libraires,
            journalistes, si vous souhaitez être tenu au courant de nos
            ouvrages, de nos événements et de nos activités une fois par mois,
            laissez-nous votre adresse mail ici.
          </p>

          <div className="">
            <form
              name="contact"
              method="post"
              className='centerNewsletter'
            >
              {" "}
              <input type="hidden" name="bot-field" />{" "}
              <input type="hidden" name="form-name" value="contact" />{" "}
              <div className="field half first">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  class="formulaire textFont bordureForm"
                  required
                />
              </div>
              <a href="" className="text-dark under textFont">
                {"> "}inscription
              </a>
            </form>
          </div>

<a
  href='https://7f2e55d6.sibforms.com/serve/MUIEAPu6EnKV7IJoR6psDKgtgMp6soTokmJsXassfGmozRAEgHRXMyjpbM8SBvSiF3ogsX5QoS_kemCe9YfyLl2IdXGRI3Hm-IAyJNj28jcAdg0_uLswENknS8MyO0d5k9Gv8evH3b-EVe2dnk4LmZrrQyYmtlPNEIn94vatwNYPkLugj774msJikiSU7fnisSxcLAzHTng-SQHH'>
  test sendinblue
  </a>


{/* <div class="sib-form" style="text-align: center;
         background-color: #EFF2F7;                                           ">
  <div id="sib-form-container" class="sib-form-container">
    <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; background-color:rgba(255,255,255,1); max-width:540px; border-radius:3px; border-width:1px; border-color:#C0CCD9; border-style:solid;">
      <form id="sib-form" method="POST" action="https://7f2e55d6.sibforms.com/serve/MUIEAPu6EnKV7IJoR6psDKgtgMp6soTokmJsXassfGmozRAEgHRXMyjpbM8SBvSiF3ogsX5QoS_kemCe9YfyLl2IdXGRI3Hm-IAyJNj28jcAdg0_uLswENknS8MyO0d5k9Gv8evH3b-EVe2dnk4LmZrrQyYmtlPNEIn94vatwNYPkLugj774msJikiSU7fnisSxcLAzHTng-SQHH">
        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="font-size:32px; text-align:center; font-style:italic; font-family:&quot;Baskerville&quot;, serif; color:#3C4858; background-color:transparent;">
            <p>Newsletter</p>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="font-size:16px; text-align:left; font-family:&quot;Baskerville&quot;, serif; color:#3C4858; background-color:transparent;">
            <div class="sib-text-form-block">
              <p>Lecteurs et lectrices, curieuses et curieux, libraires, journalistes, si &nbsp;vous souhaitez être tenu au courant de nos ouvrages, de nos événements &nbsp;et de nos activités une fois par mois, laissez-nous votre adresse mail &nbsp;ici.</p>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">

                <div class="entry__field">
                  <input class="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="EMAIL" data-required="true" required />
                </div>
              </div>

              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
              </label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="text-align: left">
            <button class="sib-form-block__button sib-form-block__button-with-loader" style="font-size:16px; text-align:left; text-decoration:underline; font-family:&quot;Helvetica&quot;, sans-serif; color:#000000; background-color:#ffffff; border-radius:3px; border-width:0px;"
              form="sib-form" type="submit">
              <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"
                />
              </svg>
              &gt; s&#039;inscrire
            </button>
          </div>
        </div>
        <input type="text" name="email_address_check" value="" class="input--hidden"/>
        <input type="hidden" name="locale" value="fr"/>
        <input type="hidden" name="html_type" value="simple"/>
      </form>
    </div>
  </div>
</div> */}


        </Col>
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;

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
