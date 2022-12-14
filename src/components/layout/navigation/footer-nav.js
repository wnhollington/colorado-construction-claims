import * as React from 'react'
import { Link } from 'gatsby'

// Constants
const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "font-medium tracking-wide text-primary-700 transition-colors duration-200 hover:text-primary-400" } : {className: "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-primary-700"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

// Render
const FooterNav = () => {
  return (
    <ul className="flex flex-row my-3 space-x-5">
      <li>
        <ExactNavLink
          to="/contact"
          aria-label="Contact"
          title="Contact"
        >
          Contact
        </ExactNavLink>
      </li>
      <li>
        <ExactNavLink
          to="/privacy-policy"
          aria-label="Privacy Policy"
          title="Privacy Policy"
        >
          Privacy Policy
        </ExactNavLink>
      </li>
      <li>
        <ExactNavLink
          to="/disclaimer"
          aria-label="Disclaimer"
          title="Disclaimer"
        >
          Disclaimer
        </ExactNavLink>
      </li>
    </ul>
  )
}

export default FooterNav