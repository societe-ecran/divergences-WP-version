exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        livres: allWcProducts {
          edges {
            node {
              slug
            }
          }
        }

        evenements: allWpPost {
          edges {
            node {
              slug
            }
            }
          }


      }
    `
  );
  if (result.errors) {
    throw result.errors;
  }

  const livres = result.data.livres.edges;
  const evenements = result.data.evenements.edges;
  // const categories = result.data.categories.edges

  livres.forEach((livre, index) => {
    createPage({
      path: `/livre/${livre.node.slug}`,
      component: require.resolve("./src/templates/article.js"),
      context: {
        slug: livre.node.slug,
      },
    });
  });

  evenements.forEach((evenement, index) => {
    createPage({
      path: `/evenements/${evenement.node.slug}`,
      component: require.resolve("./src/templates/evenement.js"),
      context: {
        slug: evenement.node.slug,
      },
    });
  });
};

// categories.forEach((category, index) => {
//   createPage({
//     path: `/category/${category.node.strapiId}`,
//     component: require.resolve("./src/templates/category.js"),
//     context: {
//       id: category.node.strapiId,
//     },
//   })
// })

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
