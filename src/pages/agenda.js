import React from "react"
import { StaticQuery, graphql, } from "gatsby"
import Layout from "../components/layout"
import "../assets/css/main.css"
import EvenementsComponent from "../components/evenements"
import "../fonts/fonts.css"


const Agenda = () => {

  return(
  
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
                  ville {
                    ville
                  }
                }
              }
            }

        }
      `}
      render={data => (
    <EvenementsComponent class="navFont" articles={data.allWpPost.edges} />
      )}
    />
  </Layout>
  )
}

export default Agenda

