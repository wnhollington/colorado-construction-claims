import * as React from 'react'
import { BiBuilding } from "@react-icons/all-files/bi/BiBuilding"
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin"

const contributors= [
    {
        name: 'W. Neal Hollington, Esq.',
        photo: "https://res.cloudinary.com/wnhollington/image/upload/v1647487893/small_Neal_Hollington_8b6ae1c8d6.jpg",
        description: "Neal is a commercial litigation attorney in the Denver office of Hall Booth Smith, P.C. Through his practice, he has litigated a variety of business-related torts (fraud, tortious interference, defamation, breach of fiduciary duty, etc.) in both state and federal court and arbitration proceedings.  Beyond serving as litigation counsel, he assists clients in streamlining their business operations through effective counsel on contract drafting and negotiation, due diligence, business planning, employment and independent contractor issues, and other business-related concerns.  He is recognized by Best Lawyers as \"One to Watch\" in Commercial Litigation and Construction Law.",
        social: {
            linkedin: "https://www.linkedin.com/in/wnhollington",
            company: "https://hallboothsmith.com/attorney/w-neal-hollington/"
        }
    }
]

const Contributors= () => {
    return ( 
        <div className="">
            {
                contributors.map((contributor) => {
                    return (
                        <div className="my-12 flex flex-col md:flex-row shadow-lg rounded-md">
                            <div className="w-full md:w-1/3 flex justify-center">
                                <img src={contributor.photo} className="w-52 h-52 my-2 md:my-0 md:w-full md:h-full object-cover rounded-full md:rounded-sm" alt=""/>
                            </div>
                            <div className="p-4 w-full md:w-2/3">
                                <h6 className="mb-2 font-semibold leading-5 text-center md:text-left">{contributor.name}</h6>
                                <p className="text-base text-gray-900">{contributor.description}</p>
                                    <div className="flex items-center mt-1 space-x-3">
                                        <a
                                        href={contributor.social.linkedin}
                                        className="text-gray-500 transition-colors duration-300 hover:text-primary-700"
                                        target={"_blank"}
                                        rel={"noreferrer"}
                                        >
                                            <AiFillLinkedin size={32} />
                                        </a>
                                        <a href={contributor.social.company}
                                        className="text-gray-500 transition-colors duration-300 hover:text-primary-700"
                                        target={"_blank"}
                                        rel={"noreferrer"}>
                                            <BiBuilding size={32}/>
                                        </a>
                                    </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Contributors