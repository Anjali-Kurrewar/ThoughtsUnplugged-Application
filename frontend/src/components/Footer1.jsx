import React from 'react'

const Footer1 = () => {
  return (
    <div className='absolute flex w-full bg-custom-blue h-[30rem]  flex-col items-center'>
             <h1 className='flex text-custom-white text-6xl font-calistoga text-center w-full justify-center pt-10'>
               Invite me to your restaurant.<br />
               Get exposure of millions food lovers.
             </h1>
             <br />
             <p className='text-gray-200 font-merriweather text-center  md:px-56'>
               Discover the buzz that only a seasoned food critic can create. Let's make your culinary delights the talk of the town. Share your culinary delights with a passionate audience eager to discover new dining experiences
             </p>
             <div className='flex w-full justify-center'>
               <button type="button" className='mt-8 border border-custom-white text-custom-blue bg-custom-white md:px-5 py-2 font-mono focus:outline-none font-bold hover:bg-custom-blue hover:text-white '>
                 Let's Talk
               </button>
             </div>
          </div>
  )
}

export default Footer1