import React from 'react'
import ImageOne from '../assets/media/profile2.jpg';
const about = () => {
  return (
    <>
        <section className=' mt-52 relative text-center text-teal-400 font-bold text-4xl'>
           About
            <div className="infophoto flex justify-evenly ">
                     <div className="info h-40 lg:w-1/3  text-white">
                       <h1 className='lg:text-3xl  font-light md:text-xl'> Hello, It's me </h1>
                       <h1 className='lg:text-5xl pb-5 font-bold md:text-xl'>Archana Shegur</h1>
                       <h3 className='lg:text-3xl pb-3 md:text-xl'>And I'm a <span className='text-teal-400 font-bold'>Frontend Developer</span></h3>
                       <p className='md:text-sm lg:text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ist exercitationem illo voluptas sequi voluptates, molestiae dolor unde rem inventore quibusdam corrupti eos.</p>
                       <div className="iconss flex mt-6">
                         <div className="cirle h-14 w-14 rounded-full bg-white ml-4 border-2 shadow-sm shadow-teal-400 border-teal-400"></div>
                         <div className="cirle h-14 w-14 rounded-full bg-white ml-4 border-2 shadow-sm shadow-teal-400 border-teal-400"></div>
                         <div className="cirle h-14 w-14 rounded-full bg-white ml-4 border-2 shadow-sm shadow-teal-400 border-teal-400"></div>
                         <div className="cirle h-14 w-14 rounded-full bg-white ml-4 border-2 shadow-sm shadow-teal-400 border-teal-400"></div>
                       </div>
                       <button className='mt-10 ml-5 py-2 px-4 w-  bg-gradient-to-r from-teal-400 from-10% via-teal-600 via-30% to-teal-700 to-90% hover:shadow-cyan-400 shadow-lg font-bold rounded-full'>Download CV</button>
                     </div>
                     <div className="hidden lg:block md:block ">
                     <div className="photo h-80 w-80 bg-white rounded-full  md:mt-14 mt-10 border-4 shadow-xl shadow-teal-400 border-teal-400 animate-wiggle flex items-center justify-center">
                       
                       <img class="rounded" src={ImageOne} alt='Profile' />
                       
                       </div>
                     </div>
                     
                    </div>
        </section>
    </>
  )
}

export default about
