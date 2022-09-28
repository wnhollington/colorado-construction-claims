import * as React from 'react'
import { Link, graphql } from 'gatsby'

// Components
import Layout from '../components/layout'
import Seo from '../components/layout/seo'
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
      <section className='py-4 lg:py-16 mx-auto w-full bg-hero-pattern bg-cover bg-center h-96 flex shadow-lg'>
        <div className='flex flex-col justify-center items-center my-4 py-4 text-center max-w-3xl mx-auto'>
          <h2 className='font-bold text-5xl text-gray-900 mb-4'>{title}</h2>
          <p className='text-3xl font-bold text-gray-900'>{description}</p>
        </div>
      </section>

      {/* About */}
      <section className='py-4 lg:py-16 mx-auto w-full'>
        <div className='max-w-full mb-10 md:mx-auto text-center md:mb-12'>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            About this Blog
          </h2>
          <p className=''>Construction directly impacts where we live, where we work and go to school, where we shop, eat and entertain ourselves, and how we get from one place to another. In short, for most of us, the built environment “is” our world. At Nomos LLP, we understand the importance of construction – as well as the need to smile every once in awhile – and publish this blog to keep our friends and clients informed of new developments in construction law.</p>
        </div>

                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          
          <div>
            <img
              className="object-cover object-top w-full h-56 rounded shadow-lg sm:h-96"
              src="https://res.cloudinary.com/wnhollington/image/upload/v1663896646/Neal_Hollington_8b6ae1c8d6.jpg"
              alt="W. Neal Hollington"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <p className="text-base font-bold text-primary-700 md:text-lg">
                Author and Attorney
              </p>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                W. Neal Hollington, Esq.
              </h2>
              <p> W. Neal Hollington is a Colorado construction attorney who handles transactional and litigation matters for clients throughout the state of Colorado.  He routinely represent investors, owners, contractors, and subcontractors in real estate and construction-related matters.  Beyond serving as litigation counsel, he helps clients streamline their business operations through effective counsel on contract drafting and negotiation, due diligence, business planning, employment and independent contractor issues, and other business-related concerns.  Neal has been recognized by Best Lawyers "One to Watch" in Commercial Litigation and Construction Law.</p>
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

        </div>
      </section>

      {/* Recent Posts */}
      <section className="pb-4 lg:pb-16 mx-auto w-full">
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