const path = require(`path`)
const readingTime = require('reading-time')

// Create Pages
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    // Templates
    const pageTemplate = path.resolve('./src/templates/page.js')
    const articleTemplate = path.resolve('./src/templates/article.js')

    return graphql(`
        {
            pages: allMdx(filter: {frontmatter: {type: {eq: "page"}}}){
                edges {
                    node {
                        frontmatter {
                            title
                            slug
                        }
                        id
                        internal {
                            contentFilePath
                        }
                    }
                }
            }
            articles: allMdx(filter: {frontmatter: {type: {eq: "article"}}}) {
                edges {
                    node {
                        frontmatter {
                            title
                            slug
                        }
                        id
                        internal {
                            contentFilePath
                        }
                    }
                }
            }
        }
    `, { limit: 1000}).then(result => {

        // Create Pages
        const pages = result.data.pages.edges
        pages.forEach((page) => {
            createPage({
                path: `/${page.node.frontmatter.slug}`,
                component: `${pageTemplate}?__contentFilePath=${page.node.internal.contentFilePath}`,
                context: {
                    slug: page.node.frontmatter.slug,
                    id: page.node.id
                },
            })
        })

        // Create Single Article and Pagination
        const articles = result.data.articles.edges
        articles.forEach((article, index) => {
            // Create prev and next pages
            const previous = index === articles.length - 1 ? null: articles[index + 1].node
            const next = index === 0 ? null : articles[index - 1].node
            // Previous and next are object props sent as pageContext object to articleTemplate
            createPage({
                path: `/blog/${article.node.frontmatter.slug}`,
                component: `${articleTemplate}?__contentFilePath=${article.node.internal.contentFilePath}`,
                context: {
                    slug: article.node.frontmatter.slug,
                    id: article.node.id,
                    previous,
                    next,
                },
            })
        })

  })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body)
    })
  }
}