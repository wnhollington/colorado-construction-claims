import * as React from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/layout/seo"
import Search from "../components/search"
const searchIndices = [{ name: `Articles`, title: `Articles` }]

const Blog = () => (
  <Layout>
    <h2 class="text-3xl font-semibold tracking-tight text-gray-800 xl:text-4xl text-center mb-10">
      Articles
    </h2>
    <Search indices={searchIndices} />
  </Layout>
)

export default Blog

export const Head = () => (
  <Seo 
    title="Blog"
  />
)
