module.exports = {
  siteMetadata: {
    title: `jsonshed`,
    siteUrl: `http://www.jsonshed.com`,
    description: `Fake api for testing and prototyping`,
    author: `@franciscomcg`,
  },
  plugins: [
    'gatsby-plugin-anchor-links',
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/layout/Layout/DocsLayout.tsx`),
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/assets/docs`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['Comfortaa', 'Oswald'],
        display: 'swap',
      },
    },
  ],
}
