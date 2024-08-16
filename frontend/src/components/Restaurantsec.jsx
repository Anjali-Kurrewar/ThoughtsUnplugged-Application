import React from 'react';
import sec1 from '../assets/sec1.webp';
import sec2 from '../assets/sec2.webp';
import sec3 from '../assets/sec3.webp';
import sec4 from '../assets/sec4.webp';
import sec5 from '../assets/sec5.webp';
import sec6 from '../assets/sec6.webp';
import sec7 from '../assets/sec7.webp';
import sec8 from '../assets/sec8.webp';
import sec9 from '../assets/sec9.webp';
import sec10 from '../assets/sec10.webp';
import sec11 from '../assets/sec11.webp';
import sec12 from '../assets/sec12.webp';

const images = [
  { src: sec1, title: 'Indian Accent, New Delhi' },
  { src: sec2, title: 'Masque, Mumbai' },
  { src: sec3, title: 'The Bombay Canteen, Mumbai' },
  { src: sec4, title: 'Comorin, Gurugram' },
  { src: sec5, title: 'Kappa Chakka Kandhari, Chennai' },
  { src: sec6, title: 'Lupa, Bengaluru' },
  { src: sec7, title: 'FarmLore, Bengaluru' },
  { src: sec8, title: 'Jamun Goa' },
  { src: sec9, title: 'Olive Bar & Kitchen, New Delhi' },
  { src: sec10, title: 'Karavalli, Vivanta Bengaluru, Residency Road' },
  { src: sec11, title: 'Bar Palladio, Jaipur' },
  { src: sec12, title: 'Wasabi By Morimoto, The Taj Mahal Palace, Mumbai' },
];

function Cardslider() {
  return (
   <div className='relative w-full  md:top-[0rem]'>
      <div className="absolute flex flex-col gap-y-[6rem]  items-center justify-evenly top-10 md:grid md:grid-cols-3 md:gap-y-[2rem] md:gap-x-8 w-full md:justify-evenly md:items-center">
        {images.map((image, index) => (
          <div key={index} className="group relative cursor-pointer  h-[18rem] w-[16rem] md:h-[30rem] md:w-[22rem] rounded-t-full md:m-10 hover:drop-shadow-2xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-full w-full">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={image.src} alt={`Scenery ${index + 1}`} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-full flex-col items-center justify-center px-12 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{image.title}</h1>
              <button className="rounded-full bg-neutral-900 px-3.5 py-4 mt-4 font-com text-sm capitalize hover:shadow-white text-white shadow shadow-black/60">See More</button>
            </div>
          </div>
        ))}
      </div>
      </div>
  );
}

export default Cardslider;
