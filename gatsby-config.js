require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Elvis Chidera`,
    // Default title of the page
    siteTitleAlt: `Elvis Chidera`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Elvis Chidera`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://elvischidera.com`,
    // Used for SEO
    siteDescription: `A weblog by Elvis Chidera, a software engineer working in Boston, about all things tech.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpeg`,
    // Twitter Handle
    author: `@elvisnchidera`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-katex',
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {},
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90
            },
          }
        ],
      },
    },

    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        mdx: false,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Projects`,
            slug: `#projects`,
          }
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/elvisnchidera/`,
          },
          {
            name: `Github`,
            url: `https://github.com/elvis10ten`,
          },
          {
            name: `LinkedIn`,
            url: `https://linkedin.com/in/elvischidera/`,
          },
        ],
        feedTitle: `Elvis Chidera's Blog Feed`
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },

    `gatsby-plugin-sitemap`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elvis Chidera`,
        short_name: `Elvis Chidera`,
        description: `A weblog by Elvis Chidera, a software engineer working in Boston, about all things tech.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#2196F3`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },

    `gatsby-plugin-offline`,

    `gatsby-plugin-netlify`,

    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
