import React, { useState } from "react";
import { FaCss3Alt, FaPython, FaHtml5, FaReact, FaJava, FaNode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql, SiMongodb } from "react-icons/si";
import ImageOne from "../assets/media/pro1.png";
import ImageThree from "../assets/media/1.png";
import ImageFace from "../assets/media/facepro.jpeg";
import drow from "../assets/media/drow1.jpg";
import portf from "../assets/media/portfolioss.jpeg";
import quizmp from "../assets/media/quizmp.jpeg";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Full Ecommerce Website",
      description: "Created an e-commerce website with features for seamless product browsing and efficient order management.",
      protype:"Full stack Web Project",
      image: ImageOne,
      technologies: [<FaReact />, <FaNode />, <SiMongodb />, <RiTailwindCssFill />],
      github: "" ,
      demo:"" // Add GitHub URL for the project
    },
    {
      id: 2,
      title: "Quiz Application Using Java",
      description:
        "This project is a user-friendly quiz app that allows users to test their knowledge across various topics in a structured manner while demonstrating real-time scoring and feedback.",
      protype:"Java Project",
      image: quizmp,
      technologies: [<FaJava />, <SiMysql />],
      github: "https://github.com/Archana-Shegur2005/Java-Quiz-App" ,
      demo:"https://github.com/Archana-Shegur2005/Java-Quiz-App"
      // // Add GitHub URL for the project
    },
    {
      id: 3,
      title: "Yoga Classes Landing Page",
      description: "A responsive landing page for yoga classes built using HTML, CSS, and JavaScript.",
      protype:"Frontend Website",
      image: ImageThree,
      technologies: [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript />],
      github: "https://github.com/Archana-Shegur2005/CodeSoft_Landing-Page"  ,
      demo:"https://archana-shegur2005.github.io/CodeSoft_Landing-Page/"  // Add GitHub URL for the project
    },
    {
      id: 4,
      title: "Facial Recognition Attendance System",
      description:
        "A system that uses facial recognition technology for attendance tracking. Built with Python, MySQL, and web technologies.",
        protype:"Machine Learning",
      image: ImageFace,
      technologies: [<FaPython />, <SiMysql />],
      github: "https://github.com/Archana-Shegur2005/Facial-Recognition-Attendance-System"  ,
      demo:"https://github.com/Archana-Shegur2005/Facial-Recognition-Attendance-System" // Add GitHub URL for the project
    },
    {
      id: 5,
      title: "Drowsiness Detection System",
      description: "A Python-based system to detect driver drowsiness and prevent accidents.",
      protype:"Machine Learning",
      image: drow,
      technologies: [<FaPython />],
      github: "https://github.com/Archana-Shegur2005/Drowsiness-Detection-System"  ,
      demo:"https://github.com/Archana-Shegur2005/Drowsiness-Detection-System" // Add GitHub URL for the project
    },
    {
        id: 6,
        title: "Portfolio Website using React",
        description: "A dynamic & responsive portfolio designed to highlight projects, skills, and experience. Developed using React,js, HTML,CSS,Tailwind CSS for modern user interface.",
        protype:"Front-end Website",
        image: portf,
        technologies: [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript />, <FaReact />, <RiTailwindCssFill />],
        github: "https://github.com/Archana-Shegur2005/Archana-Shegur_Portfolio"  ,
        demo:"https://github.com/Archana-Shegur2005/Archana-Shegur_Portfolio" // Add GitHub URL for the project
      }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="project" className="mx-3 mt-20 pt-12 mb-32 max-[640px]:mt-40 max-[560px]:mt-72 bg-black">
        <div className="project_title mb-20" data-aos="zoom-in" data-aos-duration="1000">
          <h1 className="lg:text-3xl text-center text-white font-semibold md:text-xl">
            <span className="px-8 pb-3 border-b-4 border-teal-400">Projects</span>
          </h1>
        </div>
        <div className="flex items-center justify-around" >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" >
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-fit max-w-[250px] px-2 py-3 bg-none text-white hover:shadow-lg border-2 border-teal-800 cursor-pointer rounded-lg transform transition duration-300 hover:scale-110"
                data-aos="zoom-in" data-aos-duration="1000">
                <div className="pro-img flex items-center justify-center w-58 h-24">
                  <img className="rounded object-fill w-full h-full" src={project.image} alt={project.title} />
                </div>
                <h1 className="font-bold pb-1 pt-[12px] text-left pl-2 text-sm">{project.title}</h1>
                <p className="text-[10px] font-normal text-slate-400 text-left pl-2">{project.description}</p>
                <div className="iconss flex py-3 items-start pl-2">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="circle h-7 w-7 rounded-full flex items-center justify-center hover:shadow-lg bg-black ml-2">
                      {React.cloneElement(tech, {
                        size: 25, 
                        style: { color: "rgb(5, 161, 252)", background: "transparent" }
                      })}
                    </div>
                  ))}
                </div>
                <div className="flex justify-evenly mt-5">
                  <button
                    onClick={() => openModal(project)}
                    className="text-[10px] py-2 px-3 mb-3 w-fit border-[1px] border-teal-800 bg-black hover:bg-slate-800 shadow-sm font-semibold rounded-full"
                  >
                    View Detail
                  </button>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <button className="text-[10px] py-2 mb-3 px-3 w-fit border-[1px] border-teal-800 bg-black hover:bg-slate-800 shadow-sm font-semibold rounded-full">
                      Check on GitHub
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {/* Modal */}
{isModalOpen && selectedProject && (
  <div className="fixed inset-0 bg-gray-600 bg-opacity-70 flex items-center justify-center z-50">
    <div className="bg-gray-900 text-white rounded-lg max-w-4xl max-[950px]:max-w-2xl max-[730px]:max-w-xl w-full px-4 py-6 relative flex   max-[670px]:flex-col max-[670px]:max-w-[280px]">
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 bg-gray-800 rounded-full p-2 text-gray-300 hover:bg-gray-600"
      >
        ✕
      </button>

      {/* Image Section */}
      <div className="flex w-full md:w-2/5  justify-center items-center p-2 bg-transparent">
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="rounded-lg w-72 h-48 max-[450px]:h-24 max-[450px]:w-44 max-[950px]:w-64 max-[950px]:h-40 max-[730px]:w-48 max-[730px]:h-28 object-fill border-2 border-gray-700"
        />
      </div>

      {/* Details Section */}
      <div className="flex-grow w-full md:w-1/2 mt-4 md:mt-0 md:ml-6 sm:ml-4 bg-transparent">
        <h2 className="text-2xl bg-transparent font-bold mb-4 max-[730px]:mb-2 max-[450px]:mb-1 py-1 max-[950px]:text-lg max-[730px]:text-[15px] max-[450px]:text-[12px]"> {selectedProject.title}</h2>

        {/* Project Type */}
        <p className="text-sm bg-transparent font-semibold text-teal-400 mb-2 max-[450px]:mb-1 max-[730px]:text-sm max-[450px]:text-[10px]">
          Type: {selectedProject.protype}
        </p>

        {/* Description */}
        <p className="bg-transparent text-gray-300 mb-4 max-[450px]:mb-1 max-[950px]:text-sm max-[730px]:text-[11px] max-[450px]:text-[10px]">Description: {selectedProject.description}</p>

        {/* Technologies */}
        <div className="mb-4 bg-transparent">
          <h3 className="bg-transparent font-semibold text-md mb-2 max-[450px]:mb-1 max-[950px]:text-md max-[730px]:text-sm max-[450px]:text-[12px]">Technologies Used:</h3>
          <div className="flex flex-wrap items-center bg-transparent">
            {selectedProject.technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-transparent flex items-center justify-center h-10 w-10 max-[950px]:h-7,w-7 max-[450px]:h-3,w-3 rounded-full bg-gray-800 mr-2 mb-2 max-[450px]:mb-0"
              >
                {React.cloneElement(tech, {
                  size: 24,
                  style: { color: "rgb(5, 161, 252)", background:"transparent" },
                })}
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        <a
          href={selectedProject.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent text-teal-400 font-bold underline max-[950px]:text-sm max-[450px]:text-[8px]"
        >
          Click here to view live Demo
        </a>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default Projects;
