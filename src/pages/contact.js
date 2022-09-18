import * as React from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/layout/seo"
import ContactForm from "../components/elements/contact-form"

const Blog = () => (
  <Layout>
    <div className="w-full flex items-center justify-center">
        <ContactForm />
    </div>   
  </Layout>
)

export default Blog

export const Head = () => (
  <Seo 
    title="Contact"
  />
)
