module.exports = {
  siteMetadata: {
    title: 'Dima Feoktistov',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [],
      },
    },
  ],
}
