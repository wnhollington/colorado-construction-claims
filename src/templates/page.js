import * as React from 'react'
import { graphql } from 'gatsby'

// Components
import Layout from '../components/layout'
import Seo from '../components/layout/seo'

// Render
function Page({ data: { mdx }, children }) {
  return (
    <Layout>
      <article className="lg:max-w-4xl mx-auto">
        {mdx.frontmatter.title === 'Disclaimer' || mdx.frontmatter.title === 'Privacy Policy' ? <><h1>{mdx.frontmatter.title}</h1> <p>Last Modified: {mdx.frontmatter.lastmod}</p></> : null}
        {children}
      </article>
    </Layout>
  )
}

// Graphql call
export const query = graphql`
  query ($id: String!) {
    mdx(id: {eq: $id}) {
        frontmatter {
            title
            lastmod(formatString: "MMMM D, YYYY")
        }
    }
  }
`
export default Page

export const Head = ({data}) => (
  <Seo 
    title={data.mdx.frontmatter.title}
  />
)