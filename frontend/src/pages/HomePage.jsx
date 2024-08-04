import React, { useState} from 'react'
import { SiYoutube } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { IoLogoFacebook } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { navbarData } from '../components/navbar';
import useWindowSize from '../hooks/useWindowSize';
import { LiaBookReaderSolid } from "react-icons/lia";
import Cardslider from '../components/Restaurantsec';

function HomePage  () {
  const [toggle, setToggle] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(0);
  const size = useWindowSize();

  const showNav = () => {
    setToggle(!toggle);
  };

  const getIconSize = () => {
    if (size.width >= 1024) {
      return 44; // Large screens
    } else if (size.width >= 768) {
      return 44; // Medium screens
    } else {
      return 24; // Small screens
    }
  }; 

  return (
        <div className="relative h-screen flex scroll-smooth">
          {/* The main container */}
         <div className=' relative bg-custom-white w-full h-[88rem]'>
          {/* The navigation bar */}
          <nav className=' relative bg-custom-white'>
           <div className='ml-10 md:ml-20 mt-8'>
            {/* LOGO */}
           <img src='/AK.png' className='w-20 h-16'alt='logo'/>
           </div>
           {/* Hamburger Menu */}
           <div className='absolute md:hidden inline-flex p-2 top-4 border z-20 rounded-full right-[2rem] bg-[#a3624e] w-auto' onClick={showNav}>
        <RxHamburgerMenu color="white" size={20} />
        </div>
        <div className='md:w-auto'>
          {/*  Navigation Links*/}
        <ul
          className={`${
            toggle ? " flex" : " hidden"
          } flex-col z-30 absolute md:absolute  md:ml-48 md:top-4 w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100`}
        >
          {navbarData.map((link, index) => {
            return (
              <li key={index} className={link.cname}>
                <Link
                  className="hover:text-[#be7c68]"
                  to={link.href}
                  onClick={showNav}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* Intro */}
        <div className='absolute top-[34rem] md:top-48 left-8 md:left-16 right-8 md:right-[44rem] h-[30rem]'>
            <hr className='border-1 w-16 inline-flex border-[#be688c]'/>
            <h1 className='inline text-[#be7c68]'> WELCOME</h1>
            <h5 className='font-calistoga text-3xl mt-8 md:text-6xl md:leading-[10rem]'>I'm Anjali Kurrewar</h5>
            <h4 className='font-merriweather text-xl md:text-3xl mt-4 md:leading-[2px]'>Food Critic / Influencer / Blogger</h4>
            <p className='text-gray-600 mt-4 text-justify md:mt-10'>I immerse myself in the world of culinary delights, offering insightful reviews and captivating content that inspire food enthusiasts. Through my journey, I share the art and stories behind each dish, connecting with a community that values flavor, creativity, and the joy of dining.</p>
        <button className='px-4 py-2 border border-[#be7c68] text-[#be7c68] mt-10 hover:bg-custom-blue hover:text-custom-white'>JOIN INSIDER</button>
        </div>
        {/* Intro icons */}
          <div className='absolute left-10 top-[64rem] w-[10rem]  md:w-[38rem] md:h-[12rem]  md:left-16 md:top-[44rem]'>
          <div className='absolute left-0 inline-flex  '>
          <SiYoutube color="#be7c68" size={getIconSize()} />
          </div>
          <div className='absolute  inline-flex md:left-[10rem] left-24 '>
          <FiInstagram color="#be7c68" size={getIconSize()} />
          </div>
          <div className='absolute inline-flex md:left-[20rem] left-44'>
          <LiaBookReaderSolid color="#be7c68" size={getIconSize()} />
          </div>
          <h1 className='absolute bold font-calistoga md:mt-[2rem] md:text-3xl inline-flex top-8'>15M+</h1>
          <h1 className='absolute bold font-calistoga md:mt-[2rem] md:text-3xl inline-flex md:left-[10rem] left-24 top-8'>12.5M+</h1>
          <h1 className='absolute bold font-calistoga md:mt-[2rem] md:text-3xl inline-flex md:left-[20rem] left-44 top-8 '>10M+</h1>
          <h1 className='absolute font-merriweather md:mt-[7rem] text-gray-400 md:text-sm mt-14 text-[10px]'>SUBSCRIBERS</h1>
          <h1 className='absolute font-merriweather md:mt-[7rem] text-gray-400 md:text-sm md:left-[10rem] mt-14 left-24 text-[10px]'>FOLLOWER</h1>
          <h1 className='absolute font-merriweather md:mt-[7rem] text-gray-400 md:text-sm md:left-[20rem] mt-14 left-44 text-[10px]'>READERS</h1>
          </div>
        </div>
          </nav>
          {/* The second container */}
          <div className='absolute bg-custom-blue w-[10rem] h-[32rem] right-0 mt-0  md:w-[34rem] md:h-[58rem] top-0 md:ml-[50rem]'>
            <div className="hidden md:block absolute p-10 pl-48">   
            <SiYoutube color="white" size={22} />
          </div>
          <div className="hidden md:block absolute pt-10 pl-56">
            <FiInstagram color="white" size={22} />
          </div>
          <div className="hidden md:block absolute pt-10 pl-64">
            <IoLogoFacebook color="white" size={22} />
          </div>
          <div className='hidden md:block absolute pt-8 pl-80'>
            <button type="button" className='border border-white text-white px-5 py-2 font-mono focus:outline-none font-bold hover:bg-custom-white hover:text-black'>Let's Talk</button>
          </div>
          
          </div>
          
          {/* Foreground Small Image */}
          <img
            src="/pic.jpg"
            alt="Small Foreground Image"
            className="absolute p-12 top-20 md:top-40 md:left-1/2 md:w-5/12 md:min-h-[554px] "
          />
          {/* Review Section */}
          <div className='relative flex-col md:flex-row w-full h-[36rem]  mt-[70rem] md:mt-[26rem] md:top-[24rem] flex justify-evenly items-center'>
            <div className='flex flex-col items-center w-80 h-96 '>
              <img src='/review1.jpg' alt='Review1' className='w-80 h-56'/>
              <h1 className='font-calistoga text-2xl'>Heavenly Strawberry-Topped Waffles</h1>
              <p className='font-merriweather text-sm text-gray-400'>This delectable waffle is topped with fresh, 
                juicy strawberries and a generous dollop of whipped cream, 
                creating a perfect balance of sweetness and texture. </p>
            </div>
            <div className='flex flex-col items-center w-80 h-96'>
              <img src='/review2.jpg' alt='Review2' className='w-80 h-56'/>
              <h1 className='font-calistoga text-2xl'>Rich Butter Chicken with Naan</h1>
              <p className='font-merriweather text-sm text-gray-400'>This sumptuous butter chicken, 
                served in a traditional copper vessel, 
                is a harmonious blend of creamy tomato sauce and tender chicken, garnished with fresh cilantro.</p>
            </div>
            <div className='flex flex-col items-center w-80 h-96'>
              <img src='/review3.jpg' alt='Review3' className='w-80 h-56'/>
              <h1 className='font-calistoga text-2xl'>Exquisite Paneer Roll with Mint Chutney</h1>
              <p className='font-merriweather text-sm text-gray-400'>This exquisite paneer roll,
                 wrapped in a delicate dosa and filled with spiced paneer,
                 is a fusion of textures and flavors that captivates the palate.</p>
            </div>
          </div>
          </div>
          {/* Restaurant Section */}
          <div className='absolute bg-[#f3eff2] w-full h-[130rem] md:h-[170rem] md:mt-[88rem] mt-[150rem] mb-[10rem]'>
            <h1 className='absolute text-5xl bold text-center font-calistoga mt-10 w-full'>Best in Class Restaurant</h1>
            <h1 className='absolute text-base text-gray-400 text-center w-full font-merriweather md:px-56 md:mt-28 mt-36 px-4'>Indulge in culinary excellence where every dish is crafted to perfection.
              Experience a dining journey that transcends expectations</h1>
          <div className='absolute mt-30rem w-full h-[100rem] top-[10rem]'>
          <Cardslider />
          </div>
          </div>
          <div className='absolute flex w-full bg-custom-blue h-[30rem] mt-[246rem] top-10 flex-col items-center'>
             <h1 className='flex text-white text-6xl font-calistoga text-center w-full justify-center pt-10'>
               Invite me to your restaurant.<br />
               Get exposure of millions food lovers.
             </h1>
             <br />
             <p className='text-gray-200 font-merriweather text-center  px-56'>
               Discover the buzz that only a seasoned food critic can create. Let's make your culinary delights the talk of the town. Share your culinary delights with a passionate audience eager to discover new dining experiences
             </p>
             <div className='flex w-full justify-center'>
               <button type="button" className='mt-8 border border-white text-custom-blue bg-white px-5 py-2 font-mono focus:outline-none font-bold hover:bg-custom-blue hover:text-white '>
                 Let's Talk
               </button>
             </div>
          </div>
          <footer className="absolute bg-custom-white h-[20rem] w-full mt-[276rem]">
  <div className="w-full max-w-screen-xl mx-auto p-4">
    <div className="flex flex-col items-center">
      <ul className="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
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
      <hr className="w-full my-6 border-gray-200 dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
      </span>
    </div>
  </div>
</footer>

          </div>
      );
}
    

export default HomePage;
