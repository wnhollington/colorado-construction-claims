import * as React from "react"
import { BiBuilding } from "@react-icons/all-files/bi/BiBuilding"
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin"
import { AiFillTwitterSquare } from "@react-icons/all-files/ai/AiFillTwitterSquare"
import { useState } from "react"

// Components
import Layout from "../components/layout"

const authorBio= {
    name: 'W. Neal Hollington, Esq.',
    photo: "https://res.cloudinary.com/wnhollington/image/upload/v1663896646/Neal_Hollington_8b6ae1c8d6.jpg",
    description: "W. Neal Hollington is a Colorado construction attorney who handles transactional and litigation matters for clients throughout the state of Colorado.  He routinely represent investors, owners, contractors, and subcontractors in real estate and construction-related matters.  Beyond serving as litigation counsel, he helps clients streamline their business operations through effective counsel on contract drafting and negotiation, due diligence, business planning, employment and independent contractor issues, and other business-related concerns.",
    education: ['University of Georgia School of Law', 'University of Colorado - Boulder'],
    recognitions: [
        'Best Lawyers "Ones to Watch" - Commercial Litigation',
        'Best Lawyers "Ones to Watch" - Construction Law'
    ],
    social: {
        linkedin: "https://www.linkedin.com/in/wnhollington",
        twitter: "https://www.twitter.com/wnealhollington",
        company: "https://hallboothsmith.com/attorney/w-neal-hollington/"
    }
}

const About = () => {
    const [activeTab, setActiveTab] = useState("tab1")
    return (
        <Layout>
            <h1 className="hidden">About W. Neal Hollington</h1>
            <div className="grid grid-cols-1 md:grid-cols-12 shadow-lg gap-4">
                
                <div className="col-span-4">
                    <img src={authorBio.photo} className="object-cover object-center" alt={authorBio.name}/>
                </div>

                <div className="col-span-8">
                    <div className="flex flex-row justify-between items-center border-b-2 pb-2">
                        <h2 className="text-large bold text-gray-800">{authorBio.name}</h2>
                        <div className="flex items-center mt-1 space-x-3">
                            <a
                            href={authorBio.social.linkedin}
                            className="text-gray-500 transition-colors duration-300 hover:text-primary-700"
                            target={"_blank"}
                            rel={"noreferrer"}
                            >
                                <AiFillLinkedin size={32} />
                            </a>
                            <a
                            href={authorBio.social.twitter}
                            className="text-gray-500 transition-colors duration-300 hover:text-primary-700"
                            target={"_blank"}
                            rel={"noreferrer"}
                            >
                                <AiFillTwitterSquare size={32} />
                            </a>
                            <a href={authorBio.social.company}
                            className="text-gray-500 transition-colors duration-300 hover:text-primary-700"
                            target={"_blank"}
                            rel={"noreferrer"}>
                                <BiBuilding size={32}/>
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 my-2">
                            <li class="mr-2">
                                <button className={`inline-block p-4 bg-gray-100 rounded-t-lg ${activeTab === "tab1" ? "active text-primary-700" : ""}`} onClick={() => setActiveTab("tab1")}>About</button>
                            </li>
                            <li class="mr-2">
                                <button className={`inline-block p-4 bg-gray-100 rounded-t-lg ${activeTab === "tab2" ? "active text-primary-700" : ""}`} onClick={() => setActiveTab("tab2")}>Education</button>
                            </li>
                            <li class="mr-2">
                                <button className={`inline-block p-4 bg-gray-100 rounded-t-lg ${activeTab === "tab3" ? "active text-primary-700" : ""}`} onClick={() => setActiveTab("tab3")}>Recognitions</button>
                            </li>
                        </ul>
                        <div className="text-gray-900 my-6 px-2">
                            {activeTab === "tab1" && (
                                authorBio.description
                            )}
                            {activeTab === "tab2" && (
                                <ul className="list-disc mx-4">
                                    {authorBio.education.map(item => (
                                        <li className="my-4">{item}</li>
                                    ))}
                                </ul>
                            )}
                            {activeTab === "tab3" && (
                                <ul className="list-disc mx-4">
                                    {authorBio.recognitions.map(item => (
                                        <li className="my-4">{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    
                </div>
            </div>
        </Layout>
    )
}

export default About
