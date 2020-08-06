module.exports = {
  siteMetadata: {
    title: `jsonshed web`,
    description: `Fake api for testing and prototyping

    `,
    author: `@franciscomcg`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-anchor-links',
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Indie Flower`,
          'Fredericka the Great',
          'Jacques Francois Shadow',
          'Comfortaa',
        ],
        display: 'swap',
      },
    },
  ],
}
