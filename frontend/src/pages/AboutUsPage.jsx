import React, { useState} from 'react';
import { SiYoutube } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { IoLogoFacebook } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { navbarData } from '../components/navbar';
import useWindowSize from '../hooks/useWindowSize';
import { LiaBookReaderSolid } from "react-icons/lia";
import { FaPizzaSlice } from "react-icons/fa6";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaNewspaper } from "react-icons/fa";
import Footer1 from '../components/Footer1';
import Footer2 from '../components/Footer2';



const AboutUsPage = () => {
  const [toggle, setToggle] = useState(false);
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
     <div className="absolute top-[34rem] md:top-48 left-8 md:left-16 right-8 md:right-[44rem] h-auto md:h-[30rem]">
        <h5 className="font-calistoga text-3xl mt-8 md:text-6xl md:leading-[6rem]">About Me</h5>
       <p className="text-gray-600 text-justify mt-4">
         I immerse myself in the world of culinary delights, offering insightful reviews and captivating content that inspire food enthusiasts. Through my journey, I share the art and stories behind each dish, connecting with a community that values flavor, creativity, and the joy of dining.
       </p>
       <div className="mt-10 space-y-6 md:space-y-4">
         <div className="flex items-start">
           <FaPizzaSlice size={24} color="#be7c68" />
           <div className="ml-4 md:ml-6">
             <h4 className="font-merriweather text-xl md:text-2xl">Food Critic</h4>
             <p className="text-gray-600 md:pr-10">
               Offering expert reviews and insightful critiques on the latest dining experiences to guide food enthusiasts.
              </p>
            </div>
            </div>
            <div className="flex items-start">
              <HiOutlineSpeakerphone size={24} color="#be7c68" />
              <div className="ml-4 md:ml-6">
                <h4 className="font-merriweather text-xl md:text-2xl">Food Influencer</h4>
                <p className="text-gray-600 md:pr-10">
                        Sharing trends and recommendations to inspire and engage a diverse audience through compelling content.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <FaNewspaper size={24} color="#be7c68" />
              <div className="ml-4 md:ml-6">
                <h4 className="font-merriweather text-xl md:text-2xl">Food Blogger</h4>
                <p className="text-gray-600 md:pr-10">
                  Creating engaging content that shares the stories behind dishes and inspires.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Intro icons */}
          <div className='absolute left-10 top-[80rem] w-[10rem]  md:w-[38rem] md:h-[12rem]  md:left-16 md:top-[52rem]'>
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
            src="/fg2.jpg"
            alt="Small Foreground Image"
            className="absolute p-12 top-20 md:top-40 md:left-1/2 md:w-5/12 md:h-[48rem] "
          />
          </div>
          <div className=' w-full h-[30rem] mt-[88rem] md:mt-[70rem] absolute'>
          <Footer1/>
          </div>
          <div className='absolute h-[16rem] w-full mt-[119rem] md:mt-[100rem]'>
          <Footer2/>
          </div>
          </div>
  )
}

export default AboutUsPage;
