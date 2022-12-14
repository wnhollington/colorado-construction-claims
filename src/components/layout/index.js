import * as React from 'react'
import { MDXProvider } from '@mdx-js/react'

// Components
import Header from './header'
import Footer from './footer'

export default function Layout({ children, title }) {
  
  return (
    <>
      <Header />
      <main className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <MDXProvider>
          {children}
        </MDXProvider>
      </main>
      <Footer/>
    </>
  )
}