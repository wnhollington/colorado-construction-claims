require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Colorado Construction Claims`,
    siteUrl: `https://www.coloradoconstructionclaims.com`,
    description: `Whether you are a homeowner or construction professional, this site was built with you in mind.  Construction impacts nearly every facet of our daily lives.  It affects where we live, work, eat, and recreate.  As with many aspect of the law; however, the legal landscape of Colorado construction law can often be confusing and convoluted.  The purpose of this blog is to provide you with timely and straightforward analysis of new developments in Colorado's construction industry and construction law.`,
  },
  plugins: [
    "gatsby-plugin-postcss", 
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Colorado Construction Claims`,
        start_url: `/`,
        background_color: `#f8f6f3`,
        theme_color: `#2a4234`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [
          ],
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "articles",
        "path": "./.frontmatter/content/articles"
      },
      __key: "articles"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "mdx-pages",
        "path": "./.frontmatter/content/pages"
      },
      __key: "mdx-pages"
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries")
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: process.env.MAILCHIMP_ENDPOINT, // string; add your MC list endpoint here; see instructions below
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx} }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  title: edge.node.frontmatter.title,
                  description: edge.node.frontmatter.description,
                  url: `${site.siteMetadata.siteUrl}/blog/${edge.node.frontmatter.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/blog/${edge.node.frontmatter.slug}`,
                })
              })
            },
            query: `
              {
                allMdx(filter: {frontmatter: {type: {eq: "article"}}}){
                  edges {
                    node {
                      frontmatter {
                        title
                        slug
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Colorado Construction Claims | RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GA_TRACKING_ID
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
    "gatsby-plugin-sitemap",
  ]
};

