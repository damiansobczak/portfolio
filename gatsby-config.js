require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Damian Sobczak Portfolio Site`,
    author: `Damian Sobczak`,
    keywords: `ui, ux, design, website, programming, web, portfolio`,
    description: `Personal portfolio website showing my UI/UX, and programming skills.`,
    siteUrl: `https://uicloud-portfolio.netlify.app`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },
  ],
};
