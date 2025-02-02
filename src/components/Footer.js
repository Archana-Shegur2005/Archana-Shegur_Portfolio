import React from 'react'
import { TfiLinkedin } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const handleNavClick = (section) => {
    navigate(section); // Update the URL
    const element = document.getElementById(section.substring(1)); // Get section by ID
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
    }
  };
  return (
    <>

      <div className="flex flex-col justify-center relative  items-center text-white border-t-[1px] bg-slate-950" >
        <div className="titl text-2xl font-bold py-4 text-teal-500 mt-5 bg-transparent" data-aos="zoom-in" data-aos-duration="1000">Archana Shegur</div>
        <div className="flex flex-col text-teal-300 font-semibold text-lg mt-5 justify-center items-center bg-transparent">
          <ul className='flex max-[450px]:flex-col bg-transparent'>
            <li className='lg:mx-3 text-white  lg:px-4 md:mx-2 max-[660px]:px-2 py-1 sm:mx-1 sm:px-1 md:px-1 lg:text-xl max md:text-sm hover:cursor-pointer  hover:border-b-[3px] hover:border-teal-400 bg-transparent' data-aos="zoom-in-up" data-aos-duration="1000" onClick={() => handleNavClick(" /")}>Home</li>
            <li className='lg:mx-3 text-white  lg:px-4 md:mx-2 max-[660px]:px-2 py-1 sm:mx-1 sm:px-1 md:px-1 lg:text-xl  md:text-sm hover:cursor-pointer  hover:border-b-[3px] hover:border-teal-400 bg-transparent' data-aos="zoom-in-up" data-aos-duration="1000" onClick={() => handleNavClick("/project")}>Project</li>
            <li className='lg:mx-3  text-white lg:px-4 md:mx-2 max-[660px]:px-2 py-1 sm:mx-1 sm:px-1 md:px-1 lg:text-xl  md:text-sm  hover:cursor-pointer  hover:border-b-[3px] hover:border-teal-400 bg-transparent' data-aos="zoom-in-up" data-aos-duration="1000" onClick={() => handleNavClick("/internships")}>Internship</li>
            <li className='lg:mx-3  text-white lg:px-4 md:mx-2 max-[660px]:px-2 py-1 sm:mx-1 sm:px-1 md:px-1 lg:text-xl  md:text-sm  hover:cursor-pointer  hover:border-b-[3px] hover:border-teal-400 bg-transparent' data-aos="zoom-in-up" data-aos-duration="1000" onClick={() => handleNavClick("/skills")}>Skills</li>
            <li className='lg:mx-3  text-white lg:px-4 md:mx-2 max-[660px]:px-2 py-1 sm:mx-1 sm:px-1 md:px-1 lg:text-xl  md:text-sm  hover:cursor-pointer  hover:border-b-[3px] hover:border-teal-400 bg-transparent' data-aos="zoom-in-up" data-aos-duration="1000" onClick={() => handleNavClick("/contact")}>Contact</li>

          </ul>
        </div>
        <div className="iconss flex my-11 bg-transparent" >
          <div className="cirle h-12 w-12 rounded-full  ml-4 flex items-center justify-center hover:shadow-lg  hover:shadow-cyan-400  bg-white hover:bg-gradient-to-r from-teal-400 from-10% via-teal-600 via-30% to-teal-700 to-90%" data-aos="zoom-in-up" data-aos-duration="1000">
            <a href='https://www.linkedin.com/in/archana-shegur/' target='new' className='bg-transparent'><TfiLinkedin size={30} style={{ color: "black", background: "transparent", }} /></a>
          </div>
          <div className="cirle h-12 w-12 rounded-full  ml-4 flex items-center justify-center hover:shadow-lg  hover:shadow-cyan-400  bg-white hover:bg-gradient-to-r from-teal-400 from-10% via-teal-600 via-30% to-teal-700 to-90%" data-aos="zoom-in-up" data-aos-duration="1000"><a href='https://www.instagram.com/archana_shegur29/' target='new' className='bg-transparent'><FaInstagram size={30} style={{ color: "black", background: "transparent", }} /></a></div>
          <div className="cirle h-12 w-12 rounded-full  ml-4 flex items-center justify-center hover:shadow-lg  hover:shadow-cyan-400  bg-white hover:bg-gradient-to-r from-teal-400 from-10% via-teal-600 via-30% to-teal-700 to-90%" data-aos="zoom-in-up" data-aos-duration="1000"><a href='https://github.com/Archana-Shegur2005' target='new' className='bg-transparent'><FaGithub size={30} style={{ color: "black", background: "transparent", }} /></a></div>
          <div className="cirle h-12 w-12 rounded-full  ml-4 flex items-center justify-center hover:shadow-lg  hover:shadow-cyan-400  bg-white hover:bg-gradient-to-r from-teal-400 from-10% via-teal-600 via-30% to-teal-700 to-90%" data-aos="zoom-in-up" data-aos-duration="1000"><a href='https://wa.link/ttj6nx' target='new' className='bg-transparent'><FaWhatsapp size={30} style={{ color: "black", background: "transparent", }} /></a></div>
        </div>
        <div  className='text-center text-lg' data-aos="zoom-in" data-aos-duration="1000">
          Email- archanashegur29@gmail.com <br/>
          Phone- 7620734520
        </div>
        <div className="cop mt-11 py-5 bg-slate-900 w-full text-center">© 2025 Archana Shegur. All rights reserved.</div>
      </div>

    </>
  )
}

export default Footer
