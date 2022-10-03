import * as React from 'react'
import { useState } from 'react';
import { Link } from 'gatsby';
import { AiOutlineCloseCircle } from "@react-icons/all-files/ai/AiOutlineCloseCircle"

const Sidebar = ({modalOpen, setModalOpen}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="lg:hidden flex flex-col items-center justify-center py-2">
            {isMenuOpen ? (
                <button
                className="flex text-4xl text-gray-600 items-center cursor-pointer right-10 top-6 z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Open Menu"
                >
                <AiOutlineCloseCircle size={24}/>
                </button>
            ) : (

                <button
                aria-label="Close Menu"
                className="z-30 flex items-center cursor-pointer right-10 top-6"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                        fill="currentColor"
                        d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                        />
                        <path
                        fill="currentColor"
                        d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                        />
                        <path
                        fill="currentColor"
                        d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                        />
                    </svg>
                </button>
            )}    
            <nav className={`top-0 right-0 w-[50vw] sm:w-[35vw] bg-white p-10 text-white fixed h-full z-40  transition ease-in-out duration-900 ${ isMenuOpen ? "translate-x-0 " : "translate-x-full"
            } border-l-2 border-primary-700`}>
                <ul className="space-y-4">
                    <li>
                        <Link
                        to="/"
                        aria-label="Home"
                        title="Home"
                        className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-primary-700"
                        >
                        About
                        </Link>
                    </li>
                    <li>
                        <Link
                        to="/about"
                        aria-label="About"
                        title="About"
                        className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-primary-700"
                        >
                        Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                        to="/contact"
                        aria-label="Contact"
                        title="Contact"
                        className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-primary-700"
                        >
                        Contact
                        </Link>
                    </li>
                    <li>
                        <button className="inline-flex items-center justify-center h-8 p-2 font-medium tracking-wide text-white transition duration-200 rounded shadow bg-primary-700 hover:bg-primary-600 focus:shadow-outline focus:outline-none" type="button" onClick={() => setModalOpen(!modalOpen)}>
                            Subscribe
                        </button>
                    </li>
                </ul>
            </nav>
        
        </div>

    )
}

export default Sidebar