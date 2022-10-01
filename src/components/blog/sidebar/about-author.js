import * as React from "react"
import { Link } from "gatsby"

const AboutAuthor = () => {
    return (
        <div className="bg-gray-100 p-4 my-2 rounded-lg shadow">
            <h2 className="underline underline-offset-8 text-gray-900 font-bold">About the Author</h2>
            <img
              className="my-4 rounded h-56 w-56"
              src="https://res.cloudinary.com/wnhollington/image/upload/v1663896646/Neal_Hollington_8b6ae1c8d6.jpg"
              alt="W. Neal Hollington"
            />
            <p> W. Neal Hollington is a Colorado construction attorney.  He handles transactional and litigation matters for clients throughout the state of Colorado.  Neal has been recognized by Best Lawyers "One to Watch" in Commercial Litigation and Construction Law.</p>
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
    )
}

export default AboutAuthor