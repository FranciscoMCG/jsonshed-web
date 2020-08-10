module.exports = {
  siteMetadata: {
    title: `jsonshed web`,
    siteUrl: `www.jsonshed.com`,
    description: `Fake api for testing and prototyping`,
    author: `@franciscomcg`,
  },
  plugins: [
    'gatsby-plugin-anchor-links',
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['Comfortaa'],
        display: 'swap',
      },
    },
  ],
}
