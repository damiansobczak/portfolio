exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    {
      allDatoCmsPortfolio {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  data.allDatoCmsPortfolio.edges.forEach((node) => {
    const slug = node.node.slug;
    actions.createPage({
      path: `/portfolio/${slug}/`,
      component: require.resolve(`./src/pages/portfolio.js`),
      context: { slug: slug },
    });
  });
};
