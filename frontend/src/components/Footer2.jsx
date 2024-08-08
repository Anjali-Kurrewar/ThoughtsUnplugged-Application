import React from 'react'

const Footer2 = () => {
  return (
    <footer className="absolute bg-custom-white h-[20rem] w-full">
  <div className="w-full max-w-screen-xl mx-auto p-4">
    <img src='/AK.png' alt='AK logo' className='w-24 h-12 mt-10 inline-block'></img>
    <div className="flex flex-col items-center">
      <ul className="flex flex-wrap items-center justify-center md:mt-[2rem] md:mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
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
    </div>
    <span className="absolute text-md text-gray-500 md:top-[14rem] dark:text-gray-400">
        © 2023 Food Blogger & Influencer
      </span>
      <span className="absolute text-md text-gray-500 top-[14rem] md:left-[62rem] dark:text-gray-400">
      Powered by Food Blogger & Influencer
      </span>
  </div>
</footer>
  )
}

export default Footer2