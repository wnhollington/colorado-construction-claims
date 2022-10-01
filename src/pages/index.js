import * as React from 'react'

// Components
import Layout from '../components/layout'
import Seo from '../components/layout/seo'
import Search from '../components/blog'
import NewsletterSignup from '../components/elements/newsletter-signup'
import { useSiteMetadata } from '../hooks/use-site-metadata'
const searchIndices = [{ name: `Articles`, title: `Articles`}]

const IndexPage = () => {
  const {title} = useSiteMetadata();
  return (
    <Layout>
      <h1 className='hidden'>{title}</h1>
      <Search indices={searchIndices} />

      {/* Signup CTA */}
      <section className="bg-gray-100 mt-8 mb-4 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 rounded shadow-xl">
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


export const Head = () => (
  <Seo 
    title="Home"
  />
)

export default IndexPage