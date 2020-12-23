import React from "react";
import "../assets/css/main.css";
import "../fonts/fonts.css";
import Layout from "../components/layout";
import { Container, Row, Col } from "reactstrap";

const IndexPage = () => (
  <Layout>
    <Container fluid>
      <Row>
        <Col xs="6" className="d-block d-sm-none "></Col>
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
            className="centerNewsletter"
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
            <form name="contact" method="post" className="centerNewsletter">
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
              <a href="" className="text-dark under textFont pb-5 mb-5">
                {"> "}inscription
              </a>
            </form>
          </div>

          <a href="https://7f2e55d6.sibforms.com/serve/MUIEAPu6EnKV7IJoR6psDKgtgMp6soTokmJsXassfGmozRAEgHRXMyjpbM8SBvSiF3ogsX5QoS_kemCe9YfyLl2IdXGRI3Hm-IAyJNj28jcAdg0_uLswENknS8MyO0d5k9Gv8evH3b-EVe2dnk4LmZrrQyYmtlPNEIn94vatwNYPkLugj774msJikiSU7fnisSxcLAzHTng-SQHH">
            test sendinblue
          </a>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;
