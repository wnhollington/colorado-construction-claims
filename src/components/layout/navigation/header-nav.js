import * as React from 'react'
import { Link } from 'gatsby'

// Constants
const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "font-medium tracking-wide text-primary-700 transition-colors duration-200 hover:text-primary-700" } : {className: "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-primary-700"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

// Render
const HeaderNav = () => {
  return (
    <ul className="flex items-center hidden space-x-8 lg:flex">
      <li>
        <ExactNavLink
          to="/"
          aria-label="Home"
          title="Home"
        >
          Home
        </ExactNavLink>
      </li>
      <li>
        <ExactNavLink
          to="/about"
          aria-label="About"
          title="About"
        >
          About
        </ExactNavLink>
      </li>
      <li>
        <ExactNavLink
          to="/contact"
          aria-label="Contact"
          title="Contact"
        >
          Contact
        </ExactNavLink>
      </li>
    </ul>
  )
}

export default HeaderNav