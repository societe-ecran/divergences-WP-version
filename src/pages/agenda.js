import React from "react"
import { StaticQuery, graphql, } from "gatsby"
import Layout from "../components/layout"
import "../assets/css/main.css"
import EvenementsComponent from "../components/evenements"
import "../fonts/fonts.css"
import Seo from "../components/seo";

const Agenda = () => {

  return(
  
  <Layout>
   <Seo 
  //  siteTitle="Actualités"
          title="Actualités"
          description="Evènements à venir partout en France."
          keywords={[`évènements`, `actualités`, `agenda`]}
        />
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
                  slug
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
    <EvenementsComponent className="navFont pb-5 mb-5 pt-2" articles={data.allWpPost.edges} />
    
      )}
    />
  </Layout>
  )
}

export default Agenda

