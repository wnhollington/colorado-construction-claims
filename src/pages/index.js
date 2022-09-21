import * as React from 'react'
import { Link, graphql } from 'gatsby'

// Components
import Layout from '../components/layout'
import Seo from '../components/layout/seo'
import Modal from '../components/elements/modal'
import NewsletterSignup from '../components/elements/newsletter-signup'

// Hooks
import { useSiteMetadata } from '../hooks/use-site-metadata'

const IndexPage = ({ data }) => {
  // Featured Articles
  const articles = data.allMdx.edges
  // Site Meta
  const { title, description } = useSiteMetadata();
  return (
    <Layout>

      {/* Hero */}
      <section className="py-4 lg:py-16 mx-auto lg:py-20 w-full">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                {title}
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                {description}
              </p>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <Modal buttonClasses="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary-700 hover:bg-primary-600 focus:shadow-outline focus:outline-none" />
              <Link
                to="/about"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-primary-700 hover:text-primary-600"
              >
                Learn More
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-4 lg:py-16 mx-auto lg:py-20 w-full">
        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Featured Posts
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            See our most recent articles below.
          </p>
        </div>
        <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
          {articles.map(({ node })=>{
            const title = node.frontmatter.title
            const slug = node.frontmatter.slug
            const img = node.frontmatter.img
            const description = node.frontmatter.description
            return (
              <Link
                to={`/blog/${slug}`}
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
              >
                <div className="flex flex-col h-full">
                  <img
                    src={img}
                    className="object-cover w-full h-48"
                    alt={title}
                  />
                  <div className="flex-grow border border-t-0 rounded-b">
                    <div className="p-5">
                      <h6 className="mb-2 font-semibold leading-5">
                        {title}
                      </h6>
                      <p className="text-sm text-gray-900">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-primary-700 hover:bg-primary-600 focus:shadow-outline focus:outline-none"
          >
            View All
          </Link>
        </div>
      </section>

      {/* Signup CTA */}
      <section className="bg-gray-100 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 rounded shadow-xl">
          <div className="flex flex-row justify-start flex-wrap lg:flex-nowrap">
            <div className="my-2 py-2 lg:w-2/3">
              <h2 className="text-2xl font-semibold tracking-tight text-gray-800">
                  Subscribe to get legal updates directly to your inbox.
              </h2>
              <p>Tired of coming to us? We'll come to you. Enter your email address to receive notification of new posts by email.</p>
            </div>
              
            <div className="my-2 py-2 lg:w-1/3">
              <NewsletterSignup formId={"cta-signup"}/>
            </div>

          </div>
      </section>
    </Layout>
  )
}

// Graphql call
export const query = graphql`
  query featuredArticles {
    allMdx(
      filter: {frontmatter: {type: {eq: "article"}}}
      limit: 3
      sort: {fields: frontmatter___lastmod, order: DESC}
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            description
            img
          }
        }
      }
    }
  }
`


export const Head = () => (
  <Seo 
    title="Home"
  />
)

export default IndexPage