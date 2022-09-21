require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Colorado Business Torts`,
    siteUrl: `https://www.coloradobusinesstorts.com`,
    description: `Whether you are a business owner, departing employee, or a competitor, this site was built with you in mind.  This blog will cover straightforward legal analysis of two main categories of business "torts": (1) claims between a company and departing employees and (2) claims between a company and other businesses.`,
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
        name: `My Gatsby Site`,
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
            title: "Colorado Business Torts | RSS Feed",
          },
        ],
      },
    },
  ]
};