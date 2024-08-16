import React,{useState} from 'react'
import { navbarData } from '../components/navbar';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import Footer1 from '../components/Footer1';
import Footer2 from '../components/Footer2';


const ServicePage = () => {
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
          } flex-col z-30 absolute md:absolute  md:ml-48 md:top-4 w-full first:mt-2 md:border-none md:flex-row md:w-auto md:space-x-10 md:flex bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100`}
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
        {/* Service 1 */}
        <div className='flex flex-col bg-custom-blue shadow-2xl rounded-b-3xl md:rounded-e-3xl md:w-auto w-full md:mr-[10rem] h-auto md:h-[20rem] mt-10 relative'>
         <h1 className='text-custom-white text-5xl font-calistoga pl-2 pt-8'>Recipe Development and Sharing</h1>
         <p className='font-merriweather text-md text-gray-200 mt-10 pl-4 md:pr-[28rem] pr-4 text-justify'>
           We offer a specialized service in recipe development and sharing, crafting unique and delectable dishes tailored to inspire your culinary adventures. Each recipe is meticulously developed and tested, featuring step-by-step instructions and stunning photography to guide you effortlessly. Whether you need custom recipes, ingredient substitutions, or seasonal inspirations, our expertly crafted guides ensure success in the kitchen. 
           Join us in exploring the joy of cooking and the magic of sharing delicious food.
         </p>
         <div className='relative md:absolute top-[2rem] md:top-0 right-0 md:right-0 md:h-full w-full h-[20rem] md:pl-[44rem]'>
           <img src='./service.jpg' alt='service1' className='absolute inset-0 object-cover rounded-b-3xl md:rounded-e-3xl w-auto h-full md:pl-[48rem]'/>
         </div>
        </div>
       {/* Service 2 */}
       <div className='flex flex-col bg-custom-white shadow-2xl rounded-b-3xl md:rounded-s-3xl md:w-auto w-full md:ml-[10rem] h-auto md:h-[20rem] md:mt-10 mt-20 md:pl-[28rem] relative'>
         <h1 className='text-custom-blue text-5xl font-calistoga pr-2 pt-8'>Restaurant Reviews</h1>
         <p className='font-merriweather text-md text-custom-blue mt-10 pr-4 md:pr-4 pl-4 md:pl-[0rem] text-justify'>
           Uncover the best dining experiences with our in-depth restaurant reviews. As a seasoned food critic, 
           I visit and evaluate eateries, offering honest and insightful feedback on everything from ambiance and service to the taste and presentation of dishes. 
           Whether you’re looking for a cozy café, a gourmet restaurant, or the latest culinary hotspot, my reviews will guide you to memorable dining experiences.
           Each review is crafted to help food enthusiasts discover new places to savor and enjoy. 
         </p>
         <div className='relative md:absolute top-[2rem] md:top-0 md:right-0 right-0 md:h-full w-full h-[20rem] md:pr-[44rem]'>
           <img src='./service2.avif' alt='service2' className='absolute inset-0 object-cover rounded-b-3xl md:rounded-s-3xl w-auto h-full md:pr-[48rem]'/>
          </div>
        </div>
        {/* Service 3 */}
        <div className='flex flex-col bg-custom-blue shadow-2xl rounded-b-3xl md:rounded-e-3xl md:w-auto w-full md:mr-[10rem] h-auto md:h-[20rem] md:mt-10 mt-20 relative'>
         <h1 className='text-custom-white text-5xl font-calistoga pl-2 pt-8'>Food Photography and Styling</h1>
         <p className='font-merriweather text-md text-gray-200 mt-10 pl-4 md:pr-[28rem] pr-4 text-justify'>
         Captivating visuals are key to any successful food blog. I provide professional food photography and
              styling services, transforming dishes into visually stunning masterpieces. 
              From perfect lighting to meticulous arrangement, I ensure that every shot highlights the beauty and 
              appeal of your culinary creations. Whether you need mouth-watering images for your blog, social media, or promotional materials
              , my expertise in food photography will bring your dishes to life and engage your audience.
         </p>
         <div className='relative md:absolute top-[2rem] md:top-0 right-0 md:right-0 md:h-full w-full h-[20rem] md:pl-[44rem]'>
           <img src='./service3.jpg' alt='service3' className='absolute inset-0 object-cover rounded-b-3xl md:rounded-e-3xl w-auto h-full md:pl-[48rem]'/>
         </div>
        </div>
       {/* Service 4 */}
       <div className='flex flex-col bg-custom-white shadow-2xl rounded-b-3xl md:rounded-s-3xl md:w-auto w-full md:ml-[10rem] h-auto md:h-[20rem] md:mt-10 mt-20 md:pl-[28rem] relative'>
          <h1 className='text-custom-blue text-5xl font-calistoga pr-2 pt-8'>Product Reviews</h1>
          <p className='font-merriweather text-md text-custom-blue mt-10 pr-4 md:pr-4 pl-4 md:pl-[0rem] text-justify'>
            Make informed choices with our comprehensive product reviews. As a dedicated food blogger, 
            I rigorously test and review kitchen gadgets, ingredients, and culinary tools, offering honest and detailed feedback. 
            Whether you're considering the latest kitchen appliance or seeking the best quality ingredients, my reviews provide 
            valuable insights to help you select the best products for your culinary needs. Trust my 
            expertise to guide you through the plethora of options and find the products that enhance your cooking experience.
          </p>
          <div className='relative md:absolute top-[2rem] md:top-0 md:right-0 right-0 md:h-full w-full h-[20rem] md:w-[30rem] md:pr-[74.5rem]'>
            <img src='./service4.jpg' alt='service4' className='absolute inset-0 object-cover rounded-b-3xl md:rounded-s-3xl w-full md:w-[26rem] h-full '/>
          </div>
        </div>
            {/* Footer */}
            <div className='absolute w-full h-auto  mt-[4rem]'>
                <Footer1 />
            </div>
            <div className='absolute w-full h-auto mt-[31.5rem] md:mt-[30rem]'>
              <Footer2/>
            </div>
          </div>
  )
}

export default ServicePage;
