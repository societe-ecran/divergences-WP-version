require('dotenv').config(
  {
    path: `.env.${process.env.NODE_ENV}`,
  }
)

module.exports = {
  siteMetadata: {
    title: `Editions Divergences`,
    description: `Site des éditions Divergences. 3 Rue de l’Asile Popincourt 75011 Paris contact@editionsdivergences.com`,
    author: `Société écrans`,
    siteUrl: `https://adoring-volhard-0f7152.netlify.app/`,
    social: {
      twitter: `@EDivergences`,
    },

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-V9SEYY74BH", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          // respectDNT: true,
          // // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  





    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: "gatsby-plugin-web-font-loader",
    //   options: {
    //     custom: {
    //       families: ["Palace, Druk, UniveExt,UniveExtObl, ConcoRom "],
    //       urls: ["/src/fonts/fonts.css"],
    //     },
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-snipcartv3',
    //   options: {
    //     apiKey: '',
    //     // styles : 'src/assets/css/snipcart.css'
    //   }
    // },
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
          // version: '3.0.15',
          publicApiKey: process.env.GATSBY_SNIPCART_PUBLIC_API_KEY,
          defaultLang: 'fr',
          currency: 'eur',
          openCartOnAdd: true,
          locales: {
            fr: {
              actions: {
                checkout: 'Valider le panier',
              },
            }
          },
          // innerHTML: `
          // <billing section="bottom">
          //     <!-- Customization goes here -->
          // </billing>`,
      },
  },




    {       
      resolve: '@pasdo501/gatsby-source-woocommerce',
      options: {
        // Base URL of Wordpress site
        api: 'redirectiondivergences.com',
  
        // set to false to not see verbose output during build 
        // default: true
        verbose: true,
  
        // true if using https. otherwise false.
        https: true,
        api_keys: {
          consumer_key: process.env.GATSBY_WC_CONSUMER_KEY,
          consumer_secret: process.env.GATSBY_WC_CONSUMER_SECRET,
        },
        // Array of strings with fields you'd like to create nodes for...
        fields: ['products',
        //  'products/categories', 'products/attributes'
        ],
        // Send the API keys as query string parameters instead of using the authorization header
        // OPTIONAL: defaults to false
        query_string_auth: false,
        // Version of the woocommerce API to use
        // OPTIONAL: defaults to 'wc/v3'
        api_version: 'wc/v3',
        // OPTIONAL: How many results to retrieve *per request*
        per_page: 100,
        // OPTIONAL: Custom WP REST API url prefix, only needed if not using 
        // the default wp-json prefix.
        // wpAPIPrefix: 'wp-rest',
        // OPTIONAL: Support for URLs with ports, e.g. 8080; defaults to no port
        // port: '8080',
        // OPTIONAL: Encoding; default to 'utf8'
        encoding: 'utf8',
        // OPTIONAL: Custom Axios config (see https://github.com/axios/axios) - note that this can override other options.
        axios_config: {
          // Axios config options
        }
      }
    }, 


    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `https://redirectiondivergences.com/graphql`
        
      },
    },



    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Editions divergences`,
        short_name: `divergences`,
        start_url: `https://adoring-volhard-0f7152.netlify.app/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Logo-Divergences.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
