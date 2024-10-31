/**
 * @type {import('gatsby').GatsbyConfig}
 */

// require("dotenv").config({
//   path: `.env`,
// });

module.exports = {
  siteMetadata: {
    title: `Pivot Panda`,
    titleTemplate: "Pivot Panda - %s",
    siteUrl: `https://pivotpanda.com/`,
    imageUrl: `https://pivotpanda.com/pivot-panda-logo.png`,
    description:
      "Basé à Marseille et Paris, nous réalisons des projets d’espaces de travail, de lieux de vie tels que des hôtels, des commerces, du co-living, co-working ou des logements meublés, centrés sur les usages et adaptés aux besoins du client.",
    author: "Studio Cascade",
    lang: "fr",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "pp1ujuyb",
        dataset: "production",
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/imgs/favicon.png",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-root-import",
    "gatsby-plugin-netlify",
    "gatsby-plugin-react-helmet",
  ],
};
