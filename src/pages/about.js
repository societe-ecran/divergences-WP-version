import React from "react";
import "../assets/css/main.css";
// import "../fonts/fonts.css";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { Container, Row, Col } from "reactstrap";

const IndexPage = () => (
  <Layout>
    <Seo 
    // siteTitle="Contact"
          title="Contact Newsletter"
          description="Lecteurs et lectrices, curieuses et curieux, libraires,
          journalistes, si vous souhaitez être tenu au courant de nos
          ouvrages, de nos événements et de nos activités une fois par mois,
          vous pouvez vous inscrire où nous écrire"
          keywords={[`Newsletter`, `contact`]}
        />
    <Container fluid className="px-0 interligne pb-5 mb-5 ">
      <Row>
        <Col xs="6" className="d-block d-sm-none "></Col>
      </Row>

      <Row className="px-0 mx-0 pb-5">
        <Col md="6 " className=" borderGeneral-right textFont pl-0 pr-1">
          <p className="text-center textFont font-italic ">Contact mail</p>
          <p className="textFont">
            Si vous avez la moindre question, n’hésitez pas à nous écrire.
          </p>

          <form
            name="contact"
            method="POST"
            action="https://getform.io/f/315553d0-c18b-4ccf-8aa2-f2e268a3a237"
          
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
                className="textFont bordureForm formulaire"
                required
              />
            </div>
            <button
              type="submit"
              href=""
              className="text-dark  textFont buttonContact px-0"
            >
              {"> "}<span className='under'>envoyer</span>
            </button>
          </form>
        </Col>

        <Col md="6 " className=" textFont pr-0 pl-2">
          <p className="text-center font-italic textFont">Newsletter</p>
          <p className="textFont mx-0 px-0">
            Lecteurs et lectrices, curieuses et curieux, libraires,
            journalistes, si vous souhaitez être tenu au courant de nos
            ouvrages, de nos événements et de nos activités une fois par mois,
            vous pouvez vous inscrire ici.
          </p>
         

          {/* <div className="">
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
          </div> */}

          <a 
          className="text-dark  textFont pb-5 mb-5"
          href="https://5a8a505d.sibforms.com/serve/MUIEAOJL2B0dBAjd8iZLAhtbkCZnhyo7jjxw_ktVSzhmmnd15zD3_XKVm8J94Ls8-wuwY-Wvj6kuJoKER1q9m3yiPthxJWEW1JdOxd69ftoFZDIVmebcGxrLeLg7cEPe1fbdtqpWPCLMV_Jr2f1aHKivEWXN0WwKt4uzsgd1L9nwsZQ0xqJzyh9xMlheUw3b8r333qL8m_VZOyE8">
            {"> "} <span className='under'>s'inscrire</span>
          </a>

          <p className="textFont mx-0 px-0 text-white">
            Lecteurs et lectrices, curieuses et curieux, libraires,
            journalistes, si vous souhaitez être tenu au courant de nos
            ouvrages, de nos événements et de nos activités une fois par mois,
            vous pouvez vous inscrire ici.
          </p>
          <p className="textFont mx-0 px-0 text-white">
            Lecteurs et lectrices, curieuses et curieux, libraires,
            journalistes, si vous souhaitez être tenu au courant de nos
            ouvrages, de nos événements et de nos activités une fois par mois,
            vous pouvez vous inscrire ici.
          </p>
          <p className="textFont mx-0 px-0 text-white">
            Lecteurs et lectrices, curieuses et curieux, libraires,
            journalistes, si vous souhaitez être tenu au courant de nos
            ouvrages, de nos événements et de nos activités une fois par mois,
            vous pouvez vous inscrire ici.
          </p>
          <p className="textFont mx-0 px-0 text-white">
            Lecteurs et lectrices, curieuses et curieux, libraires,
            journalistes, si vous souhaitez être tenu au courant de nos
            ouvrages, de nos événements et de nos activités une fois par mois,
            vous pouvez vous inscrire ici.
          </p>
       
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;
