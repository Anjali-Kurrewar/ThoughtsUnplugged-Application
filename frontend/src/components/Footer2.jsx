import React from 'react'

const Footer2 = () => {
  return (
    <footer className="relative bg-custom-white h-auto md:h-[20rem] w-full">
    <div className="w-full max-w-screen-xl mx-auto p-4 flex flex-col items-center">
      <img src='/AK.png' alt='AK logo' className='w-24 h-12 mt-10 mb-6'></img>
      <ul className="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 dark:text-gray-400">
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
          <a href="#" className="hover:underline">Contact</a>
        </li>
      </ul>
      <div className="w-full flex flex-col md:flex-row justify-between items-center text-center text-md text-gray-500 dark:text-gray-400">
        <span className="mb-2 md:mb-0">
          © 2023 Food Blogger & Influencer
        </span>
        <span>
          Powered by Food Blogger & Influencer
        </span>
      </div>
    </div>
  </footer>  
  )
}

export default Footer2