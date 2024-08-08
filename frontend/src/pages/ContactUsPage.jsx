import React,{useState} from 'react'
import { navbarData } from '../components/navbar';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import Footer1 from '../components/Footer1';
import Footer2 from '../components/Footer2';

const ContactUsPage = () => {
  const [toggle, setToggle] = useState(false);
  const showNav = () => {
    setToggle(!toggle);
  };
  return (
    <div className='relative bg-custom-white w-full scroll-smooth pt-8 pb-20 h-full '>
      <nav className=' relative bg-custom-white '>
           <div className='ml-10 md:ml-20'>
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
          } flex-col z-30 absolute md:absolute  md:ml-48 md:top-4 w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex md:border-none  rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100`}
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
        </div>
        </nav>
        {/* Contact section */}
        <div className='relative w-full h-[50rem] bg-custom-white '>
        <div className='absolute w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem] bg-gradient-to-r from-main-color1 to-main-color2 rounded-2xl left-[4rem] top-[4rem] md:left-[18rem] md:top-[8rem] '></div>
        <div className='absolute w-[10rem] h-[10rem] md:w-[18rem] md:h-[18rem]  bg-gradient-to-r from-main-color1 to-main-color2 rounded-2xl left-1/2 top-[32rem] md:left-[52rem] md:top-[28rem] '></div>
        <div className='absolute w-[2rem] h-[2rem] md:w-[4rem] md:h-[4rem]  bg-gradient-to-r from-main-color1 to-main-color2 rounded-md left-[2rem] top-[24rem] md:left-[22rem] md:top-[34rem] '></div>
        <div className='absolute w-[4rem] h-[4rem] md:w-[8rem] md:h-[8rem]  bg-gradient-to-r from-main-color1 to-main-color2   rounded-2xl left-3/4 top-[2rem] md:left-[60rem] md:top-[4rem] '></div>
        <div className='absolute md:mx-[24rem] md:mt-[10rem] md:w-[40rem] md:h-[34rem]  mt-20 w-full h-auto bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
          <div className='absolute'>
          <div >
          <h1 className=' text-gray-600 text-md font-merriweather pl-[3rem] pt-6 mb-2'>Full Name:</h1>
            <input type='text' className=' border border-gray-300 w-full md:w-[34rem]  text-gray-900 bg-gray-50 rounded-lg p-2.5 focus:ring-black focus:border-black  ml-[3rem]' placeholder="John" required/>  
          </div>
          <div>
          <h1 className=' text-gray-600 text-md font-merriweather pl-[3rem] pt-4 mb-2'>Email:</h1>
            <input type='text' className=' border border-gray-300 w-full md:w-[34rem]  text-gray-900 rounded-lg p-2.5 bg-gray-50 focus:ring-black focus:border-black  ml-[3rem]' placeholder="Johndoe@gmail.com" required/>  
          </div>
          <div>
          <h1 className='text-gray-600 text-md font-merriweather pl-[3rem] pt-4 mb-2'>Subject:</h1>
            <input type='text' className='border border-gray-300 w-full md:w-[34rem]  text-gray-900 rounded-lg p-2.5 bg-gray-50 focus:ring-black focus:border-black  ml-[3rem]' placeholder="Write you subject here..." required/>  
          </div>
          <div>
            <label for="message" class="block mb-2 text-md font-merriweather text-gray-600 pl-[3rem] pt-4">Your message:</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full md:w-[34rem]  ml-[3rem] text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-black focus:border-black" placeholder="Write your thoughts here..."></textarea>
          </div> 
          <button type="button" className=" mt-4 ml-[3rem] text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2">Send</button>
          </div>
      </div>
    </div>
    <div className='absolute w-full h-[44rem] md:h-[30rem] mt-[4rem]'>
          <Footer1/>
    </div>
    <div className='absolute w-full h-[15rem] mt-[35rem] md:mt-[30rem]'>
          <Footer2/>
    </div>
    </div>

  )
}

export default ContactUsPage;
