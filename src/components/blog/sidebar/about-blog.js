import * as React from "react"
import { useSiteMetadata } from "../../../hooks/use-site-metadata"

const AboutBlog = () => {
    const { description } = useSiteMetadata();
    
    return (
        <div className="bg-gray-100 p-4 my-2 rounded-lg shadow">
            <h2 className="underline underline-offset-8 text-gray-900 font-bold">About the Blog</h2>
            <p>{description}</p>
        </div>
    )
}

export default AboutBlog