import React from 'react'
import { TfiLinkedin } from "react-icons/tfi";
import {educations} from '../components/constabts'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { color } from '@mui/system';
import ImageOne from '../assets/media/dba.jpg';


const education = () => {
  return (
    <>
      <div id='educations' className=" con flex flex-col justify-center relative z-[1] items-center  mb-32 bg-black">
        <div className=" wra max-w-[1100px] relative flex flex-col justify-between w-full gap-3">
          <div className="project_title mb-20" data-aos="zoom-in" data-aos-duration="1000">
            <h1 className='lg:text-3xl text-center text-white font-semibold md:text-xl '><span className='px-8 pb-3 border-b-4 border-teal-400 '>Educations</span> </h1>
          </div>
          <div className='TimeLineSection w-full max-w-[1000px] mt-3 flex flex-col items-center gap-3 '>
            <Timeline className="Timeline">
              {educations.map((internship, index) => (
                <TimelineItem className="text-white">
                  <TimelineSeparator className='' >
                    <TimelineDot variant='outlined' color='primary' data-aos="zoom-in-down" data-aos-duration="1000"/>
                   <TimelineConnector data-aos="zoom-in-down" data-aos-duration="1000"/>
                  </TimelineSeparator>
                  <TimelineContent className='text-white py-3 px-2' >
                    <div className="card w-[650px] rounded-sm shadow-sm shadow-teal-400 py-3 px-4 max-[740px]:w-[500px] max-[560px]:w-[350px] max-[375px]:w-[250px] justify-between relative overflow-hidden flex flex-col gap-3 transition-all duration-300 ease-in-out hover:shadow-teal-600 hover:trasform hover:translate-y-[-5px] border-2 border-r-teal-600 data-twe-animation-on-scroll='repeat'" data-aos="fade-up-left" data-aos-duration="1000">
                      <div className=" flex gap-3 w-full ">
                      
                      <img src={internship.img} className='w-6 h-6 mt-2 rounded-full'></img>
                       
                        <div className="bod flex flex-col w-full">
                          <div className="role text-lg text-white font-bold">{internship.role}  | <span className='ml-[2px] font-normal text-sm'>{internship.doc}</span></div>
                          <div className="company text-sm font-light text-slate-500">{internship.company}</div>
                          <div className="duratio text-sm font-light text-slate-500">{internship.date}</div>
                        </div>
                      </div>
                      <div className="description w-full text-md font-light mb-2 text-slate-300">
                        {internship.desc}
                        {internship?.skills &&
                          <>
                            <br />
                            <div className="skilsd  w-full flex gap-3 mt-3">
                              <b className='font-bold'>Skills: </b>
                              <div className="itemwrap flex flex-wrap gap-2">
                                {internship.skills.map((skill) => (
                                  <div className="item ">{skill}</div>
                                ))}
                              </div>
                            </div>
                          </>}
                      </div>
                      {
                        internship.doc &&
                        <a href={internship.doc} target="new"></a>
                      }
                    </div>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </div>
    </>
  )
}

export default education
