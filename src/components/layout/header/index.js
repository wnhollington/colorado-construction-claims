import * as React from 'react'

// Components
import Logo from './logo'
import HeaderNav from '../navigation/header-nav'
import SignupModal from './signup-modal'
import NavDropdown from '../navigation/nav-dropdown'

const Header = () => {
  return (
    <header className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 border-b ">
      <div className="relative flex items-start lg:items-center justify-between">

        <Logo/>
        
        <HeaderNav/>

        <SignupModal/>

        <NavDropdown />
      
      </div>
    </header>
  );
};

export default Header;