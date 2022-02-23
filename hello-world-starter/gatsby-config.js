const path = require('path')
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'src', 'images'),
        name: 'images'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: {
        prefixes: ['/app/*']
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Mi primer sitio en gatsby',
        short_name: 'MPSG',
        start_url: '/',
        background_color: '#262B34',
        theme_color: '#EC6ECE',
        display: 'standalone',
        icon: 'static/favicon.ico'
      }
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/about']
      }
    }
  ],
}
