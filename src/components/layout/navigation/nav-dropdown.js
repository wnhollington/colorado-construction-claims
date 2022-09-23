import * as React from 'react'
import { useState } from 'react';
import { Link } from 'gatsby';
import { AiOutlineCloseCircle } from "@react-icons/all-files/ai/AiOutlineCloseCircle"

const NavDropdown = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="lg:hidden flex flex-col items-center justify-center py-2">
            {isMenuOpen ? (
                <button
                className="flex text-4xl text-gray-600 items-center cursor-pointer fixed right-10 top-6 z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Open Menu"
                >
                <AiOutlineCloseCircle size={24}/>
                </button>
            ) : (

                <button
                aria-label="Close Menu"
                className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
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
            <nav className={`top-0 right-0 w-[35vw] bg-gray-100 p-10 text-white fixed h-full z-40  ease-in-out duration-300 ${ isMenuOpen ? "translate-x-0 " : "translate-x-full"
            }`}>
                <ul className="space-y-4">
                    <li>
                        <Link
                        to="/about"
                        aria-label="About"
                        title="About"
                        className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-primary-700"
                        >
                        About
                        </Link>
                    </li>
                    <li>
                        <Link
                        to="/blog"
                        aria-label="Blog"
                        title="Blog"
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
                </ul>
            </nav>
        
        </div>

    )
}

export default NavDropdown