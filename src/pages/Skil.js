import React from 'react'
import { TfiLinkedin } from "react-icons/tfi";
import {skills} from '../components/constabts'
import { FaReact } from "react-icons/fa";

const Skil = () => {
  return (
    
            <div id='skills' className="flex flex-col justify-center relative z-[1] items-center  mb-32 bg-black">
                <div className="max-w-[1100px] relative flex flex-col justify-between w-full gap-3">
                <div className="project_title mb-20" data-aos="zoom-in" data-aos-duration="1000">
                    <h1 className='lg:text-3xl text-center text-white font-semibold md:text-xl '><span className='px-8 pb-3 border-b-4 border-teal-400 '>Skills</span> </h1>
                </div>
                <div className="w-full flex flex-wrap mt-8 justify-center gap-8" >
                     {skills.map((item)=>( 
                        <div className='w-full max-w-[450px] mx-4 bg-black border-2 border-teal-800 py-4 px-2 rounded-lg max-[768px]:max-w-[400px] max-[768px]:py-1 max-[768px]:px-9 max-[500px]:max-w-[330px] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] cursor-pointer transform transition duration-300 hover:scale-110' data-aos="flip-left" data-aos-duration="1000">
                             <div className='text-white text-center bg-none text-2xl font-semibold mb-3 bg-transparent'>{item.title}</div>
                             <div className='flex justify-center flex-wrap gap-3 max-[420px]:gap-2 mb-5 bg-transparent'> 
                                {item.skills.map((skill)=>(
                                    <div className='flex items-center gap-2 justify-center lg:text-lg text-white rounded-xl border-2 border-teal-800 px-4 py-3 bg-transparent sm:text-[8px] md:text-[11px]'>
                                        {/* <div className='w-6 h-6' src={skill.image}/> */}
                                        <img src={skill.image} className='w-6 h-6  bg-black'></img>
                                        {/* <FaReact className='w-3 h-3' style={{ color: "white", background: "transparent", }} /> */}
                                        {skill.name}
                                    </div>
                                ))}
                            </div>  
                        </div>
                    ))}
                </div>
                </div>
            </div>
        
    
  )
}

export default Skil
