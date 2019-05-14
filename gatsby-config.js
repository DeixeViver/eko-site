const path = require('path');

// module.exports = {
//   plugins: [
//     `gatsby-plugin-react-helmet`,
//     `gatsby-plugin-svgr`,
//     `gatsby-plugin-styled-components`,
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `team`,
//         path: `${__dirname}/src/images/team`,
//       },
//     },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `art`,
//         path: `${__dirname}/src/images/art`,
//       },
//     },
//     `gatsby-transformer-sharp`,
//     `gatsby-plugin-sharp`,
//     {
//       resolve: `gatsby-plugin-manifest`,
//       options: {
//         name: `Eko`,
//         short_name: `eko`,
//         start_url: `/`,
//         background_color: `#8bd8ed`,
//         theme_color: `#8bd8ed`,
//         display: `minimal-ui`,
//         icon: `static/favicon.png`,
//       },
//     },
//     {
//       resolve: `gatsby-plugin-google-fonts`,
//       options: {
//         fonts: [`average`, `prata\:40,700`],
//       },
//     },
//     {
//       resolve: `gatsby-plugin-alias-imports`,
//       options: {
//         alias: {
//           '@components': path.resolve(__dirname, 'src/components'),
//           '@common': path.resolve(__dirname, 'src/components/common'),
//           '@sections': path.resolve(__dirname, 'src/components/sections'),
//           '@styles': path.resolve(__dirname, 'src/styles/'),
//           '@static': path.resolve(__dirname, 'static/'),
//         },
//       },
//     },
//   ],
// };




module.exports = {
  siteMetadata: {
    title: `Eko Site`,
    author: `Equipe Eko`,
    description: `Transformando a caixa preta da internet em caixa de ferramentas.`,
    siteUrl: `https://projetoeko.com.br`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,    
    `gatsby-plugin-svgr`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `team`,
        path: `${__dirname}/src/images/team`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `art`,
        path: `${__dirname}/src/images/art`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Projeto Eko`,
        short_name: `Eko`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`average`, `prata\:400,700`],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@common': path.resolve(__dirname, 'src/components/common'),
          '@sections': path.resolve(__dirname, 'src/components/sections'),
          '@styles': path.resolve(__dirname, 'src/styles/'),
          '@static': path.resolve(__dirname, 'static/'),
        },
      },
    },
  ],
}
