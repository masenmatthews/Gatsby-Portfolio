module.exports = {
  siteMetadata: {
    title: "Masen Matthews - Portfolio Site",
    author: "Masen Matthews",
    description: "Masen Matthews web development portfolio site based off of the Dimension V2 Gatsby starter"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/masenmatthews.jpg',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
