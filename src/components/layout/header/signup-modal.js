import * as React from 'react'

// Components
import Modal from '../../../components/elements/modal'

const SignupModal = () => {
  return (
    <div className="flex items-center hidden space-x-8 lg:flex">
      <Modal buttonClasses="inline-flex items-center justify-center h-8 p-2 font-medium tracking-wide text-white transition duration-200 rounded shadow bg-primary-700 hover:bg-primary-600 focus:shadow-outline focus:outline-none"/>
    </div>
  )
}

export default SignupModal