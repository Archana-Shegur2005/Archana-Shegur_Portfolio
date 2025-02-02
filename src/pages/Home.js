import React from 'react'
import ImageOne from '../assets/pro1.png';
import { TfiLinkedin } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Home() {
  
  return (
    <>
    <section id='/' className='mx-3 mt-10 p-10 mb-32 bg-black'>
         <div className="infophoto flex justify-evenly" >
          <div className="info h-40 lg:w-1/3 mt-4  text-white" data-aos="fade-right" data-aos-duration="1000">
            <h1 className='lg:text-3xl  font-light md:text-xl sm:text-sm'> Hello, I'm </h1>
            <h1 className='lg:text-5xl pb-5 font-bold md:text-xl sm:text-md'>Archana Shegur</h1>
            <h3 className='lg:text-3xl pb-3 md:text-xl sm:text-sm'>And I'm a <span className='text-teal-400 font-bold'>Web Developer</span></h3>
            <p className='md:text-sm lg:text-md max-[550px]:text-[8px]'>I’m a passionate web developer who loves creating innovative projects and exploring new ideas. With a strong curiosity for learning and a focus on designing user-friendly websites that solve real-world challenges, I’m excited to connect and create something amazing together!</p>
            <div className="iconss flex mt-10">
              <div className="cirle max-[550px]:h-5,w-5 h-12 w-12 rounded-full  ml-4 flex items-center justify-center hover:shadow-lg  hover:shadow-cyan-400  bg-white hover:bg-gradient-to-r from-teal-400 from-10% via-teal-600 via-30% to-teal-700 to-90%" >
                <a href='https://www.linkedin.com/in/archana-shegur/' target='new' className='bg-transparent'><TfiLinkedin  size={30}  style={{color: "black",  background:"transparent",}}/></a>
                </div>
              <div className="cirle h-12 w-12 rounded-full  ml-4 flex items-center justify-center hover:shadow-lg  hover:shadow-cyan-400  bg-white hover:bg-gradient-to-r from-teal-400 from-10% via-teal-600 via-30% to-teal-700 to-90%"><a href='https://www.instagram.com/archana_shegur29/' target='new' className='bg-transparent'><FaInstagram  size={30}  style={{color: "black",  background:"transparent",}} /></a></div>          
              <div className="cirle h-12 w-12 rounded-full  ml-4 flex items-center justify-center hover:shadow-lg  hover:shadow-cyan-400  bg-white hover:bg-gradient-to-r from-teal-400 from-10% via-teal-600 via-30% to-teal-700 to-90%"><a href='https://github.com/Archana-Shegur2005' target='new' className='bg-transparent'><FaGithub   size={30}  style={{color: "black",  background:"transparent",}} /></a></div>      
              <div className="cirle h-12 w-12 rounded-full  ml-4 flex items-center justify-center hover:shadow-lg  hover:shadow-cyan-400  bg-white hover:bg-gradient-to-r from-teal-400 from-10% via-teal-600 via-30% to-teal-700 to-90%"><a href='https://wa.link/ttj6nx' target='new' className='bg-transparent'><FaWhatsapp   size={30}  style={{color: "black",  background:"transparent",}} /></a></div>        
              </div>
            <button className='mt-10 ml-5 py-3 px-4 w-  bg-gradient-to-r from-teal-400 from-10% via-teal-600 via-30% to-teal-700 to-90% hover:shadow-cyan-400 shadow-lg font-bold rounded-full' ><a href='https://drive.google.com/file/d/1X7_Q05bH3vG_m6-IbdZ_bKDyYn6K86iJ/view?usp=sharing' className='bg-transparent'>Download Resume</a></button>
          </div>
          <div className="hidden  min-[568px]:block lg:block md:block max-[850px]:pl-4" data-aos="fade-left" data-aos-duration="1000">
          <div className="photo max-[682px]:h-48 max-[682px]:w-48 max-[682px]:mt-16  max-[850px]:h-52 max-[850px]:w-48 max-[930px]:h-56 max-[930px]:w-56  h-80 w-72  md:mt-14 mt-10 border-4 shadow-xl bg-slate-950 border-teal-400 animate-wiggle flex items-center justify-center">
            
            <img class=" object-fill  h-full mx-12 bg-transparent" src={ImageOne} alt='Profile' width={280}/>
            
            </div>
          </div>
          
         </div>
    </section>
    </>
  )
}

export default Home
