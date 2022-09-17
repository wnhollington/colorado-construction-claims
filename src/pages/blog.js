import * as React from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/layout/seo"
import Search from "../components/search"
const searchIndices = [{ name: `Articles`, title: `Aricles` }]

const Blog = () => (
  <Layout>
    <Search indices={searchIndices} />
  </Layout>
)

export default Blog

export const Head = () => (
  <Seo 
    title="Blog"
  />
)
