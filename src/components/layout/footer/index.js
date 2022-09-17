import * as React from 'react'

// Components
import Logo from '../header/logo'
import FooterNav from '../navigation/footer-nav'
import SocialIcons from './social-icons'

const Footer = () => {
  
  return (
    <footer className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      
      <div className="flex justify-between pt-5 pb-10 border-t lg:flex-row">
        
        <Logo />

        <FooterNav />

        <SocialIcons />
      
      </div>

    </footer>
  )
}

export default Footer