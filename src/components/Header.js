import React, { useState } from 'react';
import ImageOne from '../assets/pro2.png';
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility
  const navigate = useNavigate();

  const handleNavClick = (section) => {
    navigate(section); // Update the URL
    const element = document.getElementById(section.substring(1)); // Get section by ID
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
    }
    setMenuOpen(false); // Close the menu after navigation
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <header className='h-16 bg-black py-4 w-full sticky top-0 z-10' data-aos="fade-down" data-aos-duration="1000">
      <div className='h-full container mx-auto flex items-center justify-between'>
        {/* Logo */}
        <div className="sm:pl-20">
          <p className='text-white font-bold lg:text-3xl md:text-2xl sm:text-xl max-[640px]:ml-10 max-[640px]:text-2xl flex items-center'>
            <div className="max-[567px]:flex min-[568px]:hidden sm:hidden md:hidden lg:hidden mr-3">
              <div className="photo h-12 w-12 bg-white rounded-full border-4 flex items-center justify-center">
                <img className="rounded-full h-fit w-fit" src={ImageOne} alt='Profile' width={75} />
              </div>
            </div>
            <p className='max-[567px]:text-xl'>&lt;Archana&gt;</p>
          </p>
        </div>

        {/* Desktop Navbar */}
        <div className='text-teal-300 font-semibold text-lg max-[640px]:hidden sm:flex md:flex lg:flex lg:mr-40 md:mr-16'>
          <ul className='flex space-x-4'>
            <li className='hover:cursor-pointer hover:border-b-[3px] hover:border-teal-400 px-[5px]' onClick={() => handleNavClick("/")}>Home</li>
            <li className='hover:cursor-pointer hover:border-b-[3px] hover:border-teal-400 px-[5px]' onClick={() => handleNavClick("/project")}>Projects</li>
            <li className='hover:cursor-pointer hover:border-b-[3px] hover:border-teal-400 px-[5px]' onClick={() => handleNavClick("/internships")}>Internships</li>
            <li className='hover:cursor-pointer hover:border-b-[3px] hover:border-teal-400 px-[5px]' onClick={() => handleNavClick("/skills")}>Skills</li>
            <li className='hover:cursor-pointer hover:border-b-[3px] hover:border-teal-400 px-[5px]' onClick={() => handleNavClick("/contact")}>Contact</li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="max-[640px]:flex sm:hidden md:hidden lg:hidden cirle h-12 w-12 rounded-full ml-32 flex items-center justify-center hover:shadow-lg">
          <IoMenu size={40} style={{ color: "white", background: "transparent" }} onClick={toggleMenu} />
        </div>
      </div>

      {/* Mobile Navbar */}
      {menuOpen && (
        <div className="bg-gray-900 text-teal-300 font-semibold text-lg flex flex-col items-start px-6 py-4 space-y-2 absolute top-16 left-0 w-full z-20">
          <p
            className='hover:cursor-pointer w-full px-4 py-2 hover:bg-gray-800 hover:border-l-4 hover:border-teal-300'
            onClick={() => handleNavClick("/")}
          >
            Home
          </p>
          <p
            className='hover:cursor-pointer w-full px-4 py-2 hover:bg-gray-800 hover:border-l-4 hover:border-teal-300'
            onClick={() => handleNavClick("/project")}
          >
            Projects
          </p>
          <p
            className='hover:cursor-pointer w-full px-4 py-2 hover:bg-gray-800 hover:border-l-4 hover:border-teal-300'
            onClick={() => handleNavClick("/internships")}
          >
            Internships
          </p>
          <p
            className='hover:cursor-pointer w-full px-4 py-2 hover:bg-gray-800 hover:border-l-4 hover:border-teal-300'
            onClick={() => handleNavClick("/skills")}
          >
            Skills
          </p>
          <p
            className='hover:cursor-pointer w-full px-4 py-2 hover:bg-gray-800 hover:border-l-4 hover:border-teal-300'
            onClick={() => handleNavClick("/contact")}
          >
            Contact
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;
