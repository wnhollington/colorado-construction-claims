import * as React from 'react'
import { useState } from 'react';
import { Link } from 'gatsby';

// Components

const NavDropdown = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="lg:hidden flex flex-col items-center mx-6 w-0">
            <button
            aria-label="Toggle Menu"
            title="Toggle Menu"
            className="p-2"
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
            
            {isMenuOpen && (
                <nav className=''>
                    <ul className="space-y-4">
                        <li>
                            <Link
                            to="/about"
                            aria-label="About"
                            title="About"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-primary-700"
                            >
                            About
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="/blog"
                            aria-label="Blog"
                            title="Blog"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-primary-700"
                            >
                            Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                            to="/contact"
                            aria-label="Contact"
                            title="Contact"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-primary-700"
                            >
                            Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </div>

    )
}

export default NavDropdown