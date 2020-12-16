exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(
      `
        {
           livres: allWcProducts {
               edges {
                 node {
                  wordpress_id
                 }
               }
             }
            }
      `
    )
    if (result.errors) {
      throw result.errors
    }
  
    // Create blog articles pages.
  
    const livres = result.data.livres.edges
    // const categories = result.data.categories.edges
    // const evenements = result.data.evenements.edges
  
    livres.forEach((livre, index) => {
      createPage({
        path: `/livre/${livre.node.wordpress_id}`,
        component: require.resolve("./src/templates/article.js"),
        context: {
          id: livre.node.wordpress_id,
        },
      })
    })
  
    // categories.forEach((category, index) => {
    //   createPage({
    //     path: `/category/${category.node.strapiId}`,
    //     component: require.resolve("./src/templates/category.js"),
    //     context: {
    //       id: category.node.strapiId,
    //     },
    //   })
    // })
  
  // evenements.forEach((evenement, index) => {
  //   createPage({
  //     path: `/evenements/${evenement.node.strapiId}`,
  //     component: require.resolve("./src/templates/evenement.js"),
  //     context: {
  //       id: evenement.node.strapiId,
  //     },
  //   })
  // })
  }
  
  
  // categories: allStrapiCategory {
  //   edges {
  //     node {
  //       strapiId
  //     }
  //   }
  // }
  
  // articles: allStrapiArticle {
  //   edges {
  //     node {
  //       strapiId
  //     }
  //   }
  // }