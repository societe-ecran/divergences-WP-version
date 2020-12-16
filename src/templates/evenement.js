// import React from "react"
// import { graphql, Link } from "gatsby"
// import Moment from "react-moment"
// import 'moment/locale/fr'
// import Layout from "../components/layout"
// import "../assets/css/fontawesome-free-5.13.1-web/css/all.css"
// import ReactMarkdown from "react-markdown"


// export const query = graphql`
//   query EvenementsQuery($id: Int!) {
//     strapiEvenements(strapiId: { eq: $id }) {
//               intitule
//               Adresse
//               Ville
//               DescriptionDeLevenement
//               Horaires
//               strapiId
//               dateDeLevenement(locale: "fr")
// }
//   }
// `

// const Evenement = ({ data }) => {
//   const article = data.strapiEvenements

//   // const illustration = article.image.publicURL

//   // const afficherIllustration = ()=>{
//   //   if(illustration != null){
//   //     return (
//   //     <img class="pb-3"
//   //     src={article.image.publicURL}
//   //     srcset={article.image.publicURL}
//   //     alt="" 
//   //     width="290"
//   //     />
//   //     ) 
//   //   }
//   // }

//   return (
//     <Layout>

// <div className="container-fluid pt-3">
//             <div className= "row">
//               <div className="col-3">
//               <h3>
//                 <Link 
//                 className="fas fa-arrow-left text-dark" 
//                 to="/agenda/"
//                 style={{textDecoration:"none"}}
//                 >
//                 </Link>
                
//                 </h3>
//               </div>
//               <div classname="col-9">
                  
//                   <h4 className="ml-3 textFont">
//                   {article.intitule}
//                   </h4>
                  
//               </div>
//             </div>
            
//   <div className="row">

//         {/* <img
//     src={article.Illustration.url}
//     srcset={article.Illustration.url}
//     alt="" 
//     width="330"
//     /> */}


//             <div className="col-3 textFont">
//             <h5>
//             <Moment locale="fr" format="Do MMM YYYY">{article.dateDeLevenement}</Moment> <br/>
//             {article.Adresse}<br/>
//             {article.Ville}<br/>
//             {article.Horaires}<br/>
//             </h5>
            
            
//             </div>

//             <div className="col-9 textFont">

//             {/* {afficherIllustration()} */}

//             {/* <img class="pb-3"
//     src={article.image.publicURL}
//     srcset={article.image.publicURL}
//     alt="" 
//     width="290"
//     /> */}
//     <br/>

//     <ReactMarkdown className="h5" source = {article.DescriptionDeLevenement}/>
            
//             </div>
//             </div>

// </div>
     
//     </Layout>
//   )
// }

// export default Evenement