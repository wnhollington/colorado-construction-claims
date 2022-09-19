import React from "react"
import { useSiteMetadata } from '../../hooks/use-site-metadata'

const Seo = ({ title, description }) => {
  const { title: defaultTitle, description: defaultDescription } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  }

  return (
    <>
      <title>{seo.title} | {defaultTitle}</title>
      <meta name="description" content={seo.description} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="og:title" content={seo.title}/>
      <meta name="og:description" content={seo.description}/>
    </>
  )
}

export default Seo