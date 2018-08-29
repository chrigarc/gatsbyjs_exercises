module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
  },
  plugins: ['gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-source-pixabay",
      options: {
        key: "9930019-ca020cafe044b86fe13609877",
        q: "pretty woman",
      },
    },
  ],
}
