import React, {useState} from "react"

// Components
import Logo from './logo'
import HeaderNav from '../navigation/header-nav'
import SignupModal from '../../elements/signup-modal'
import Sidebar from '../navigation/sidebar'

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <header className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-start lg:items-center justify-between border-b pb-5">

        <Logo/>
        
        <HeaderNav/>

        <div className='hidden lg:block'>
          <button className="inline-flex items-center justify-center h-8 p-2 font-medium tracking-wide text-white transition duration-200 rounded shadow bg-primary-700 hover:bg-primary-600 focus:shadow-outline focus:outline-none" type="button" onClick={() => setModalOpen(!modalOpen)}>
            Subscribe
          </button>
        </div>

        <Sidebar modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      
      </div>

      <SignupModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      
    </header>
  );
};

export default Header;