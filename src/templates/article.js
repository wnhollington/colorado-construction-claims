import * as React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

// Components
import Layout from '../components/layout'
import Seo from '../components/layout/seo'

// Render
function Article ({ data, children, pageContext }) {
  const title = data.mdx.frontmatter.title
  const lastmod = data.mdx.frontmatter.lastmod
  const description = data.mdx.frontmatter.description
  const img = data.mdx.frontmatter.img
  const timeToRead = Math.round(data.mdx.fields.timeToRead.minutes)
  const { previous, next } = pageContext

  return (
    <Layout>
        <header className='max-w-4xl mx-auto'>
            <div className="text-center my-10">
                <div className="mb-10 md:mx-auto sm:text-center md:mb-8">
                    <h1 className="mb-4 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
                        {title}
                    </h1>
                    <ul className='flex flex-row space-x-4 justify-center'>
                        <li className='text-sm text-gray-600'>{lastmod}</li>
                        <li className='text-sm text-gray-600'>{timeToRead > 1 ? `${timeToRead} minutes` : `${timeToRead} minute`}</li>
                    </ul>
                </div>
                <div className="mb-4 transition-shadow duration-300 lg:mb-6">
                    <img
                        className="w-full object-cover object-center rounded shadow-lg h-56 sm:h-64 md:h-80 lg:h-96"
                        src={img}
                        alt={title}
                    />
                </div>
                <p className="text-base text-gray-700">
                {description}
                </p>
            </div>
        </header>

        <article className='max-w-4xl mx-auto'>
            {children}
        </article>

        <nav className='flex justify-between my-6 max-w-4xl mx-auto'>
 
            <Link 
                to={previous ? `/blog/${previous.frontmatter.slug}`: null} 
                className={`inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${previous ? null :'cursor-not-allowed'}`}
                aria-label={previous ? `${previous.frontmatter.title}` : 'There are no prior articles.'}
                title={previous ? `${previous.frontmatter.title}` : 'There are no prior articles.'}
            >
                <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                Previous
            </Link>

            <Link 
                to={next ? `/blog/${next.frontmatter.slug}` : null}  
                className={`inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${next ? null : 'cursor-not-allowed'}`}
                aria-label={next ? `${next.frontmatter.title}` : 'You are all caught up! No new articles.'}
                title={next ? `${next.frontmatter.title}` : 'You are all caught up! No new articles.'}
            >
            Next
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
        </nav>
    </Layout>
  )
}

// Graphql call
export const query = graphql`
  query ($id: String!) {
    mdx(id: {eq: $id}) {
        frontmatter {
            title
            slug
            lastmod(formatString: "MMMM D, YYYY")
            description
            author
            img
        }
        fields {
            timeToRead {
                minutes
            }
        }
    }
    site {
        siteMetadata {
            siteUrl
        }
    }
  }
`
export default Article

export const Head = ({data}) => (
  <Seo 
    title={data.mdx.frontmatter.title}
    description={data.mdx.frontmatter.description}
  />
)