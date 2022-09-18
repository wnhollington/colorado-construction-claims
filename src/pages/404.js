import * as React from "react"
import { Link } from "gatsby"

// Components
import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex flex-col max-w-full items-center">
        <h1>404: Page Not Found</h1>
        <p>Oops! It looks like you are lost.</p>
        <Link to="/">Lets Go Home</Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
