import React from 'react'
import Swal from 'sweetalert2'

const contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "30d71c52-1263-4d65-b663-cc3a60513693");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                
                title: "Success!",
                text: "Message sent successfully",
                icon: "success",
                
              });
        }
      };

    return (
        <div id='contact' className=" con flex flex-col justify-center relative z-[1] items-center  mb-32 bg-black">
            <div className="project_title mb-20" data-aos="zoom-in" data-aos-duration="1000">
                <h1 className='lg:text-3xl text-center text-white font-semibold md:text-xl mb-12 '><span className='px-8 pb-3 border-b-4 border-teal-400 '>Contact Us</span> </h1>
                <p className='text-white text-1xl w-fit px-5 text-center'>Feel free to reach out to me for any questions or opportunities!</p>
            </div>
            <div className="conts h-fit w-full max-w-[550px] mx-4 bg-black border-2 border-teal-800 px-2 py-4 rounded-lg max-[768px]:max-w-[400px] max-[768px]:py-1  max-[500px]:max-w-[330px] max-[357px]:max-w-[300px] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] cursor-pointer transform transition duration-300 hover:scale-110" data-aos="zoom-in" data-aos-duration="1000">
                <form action="" className='px-6 py-5' onSubmit={onSubmit}>
                    <h1 className='text-white text-3xl font-bold'>Email me</h1>
                    <div className="name text-white py-5" data-aos="fade-up-left" data-aos-duration="1000">
                        {/* <p className='py-3'>Name :</p> */}
                        <input type="text" placeholder='Enter Name' name='name' className='text-lg w-full border-[1px] border-teal-700 outline-offset-2 px-3 py-3 font-normal  text-white focus:border-teal-600 focus:border-[3px] outline-none rounded-lg bg-black' required />
                    </div>
                    <div className="name text-white py-5" data-aos="fade-up-left" data-aos-duration="1000">
                        {/* <p className='py-3'>Name :</p> */}
                        <input type="email" placeholder='Enter Email' name='email' className='text-lg w-full border-[1px] border-teal-700 outline-offset-2 px-3 py-3 font-normal  text-white focus:border-teal-600 focus:border-[3px] outline-none rounded-lg bg-black' required/>
                    </div>
                    <div className="name text-white py-5" data-aos="fade-up-left" data-aos-duration="1000">
                        {/* <p className='py-3'>Name :</p> */}
                        <textarea type="text" placeholder='Message' name='message' className='text-lg w-full border-[1px] border-teal-700 outline-offset-2 px-3 py-3 font-normal  text-white focus:border-teal-600 focus:border-[3px] outline-none rounded-lg bg-black' required/>
                    </div>
                    <button class=" w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" data-aos="zoom-in" data-aos-duration="1000">
                        <span class=" w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Submit
                        </span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default contact
