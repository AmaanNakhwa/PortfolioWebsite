import React from 'react'
import aboutImg from "../assets/about4.jpeg";

const About = () => {
  return (
    <div className='py-10  h-auto' >
        <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">

            <div>
                <div className="image-glow w=[400px h-full]">
                    <img
                        src={aboutImg}
                        alt=""
                        className="object-cover rounded-xl h-[300] filer grayscale brightness-50"
                    />    
                </div>
            </div>   
            <div>
                <div className="p-2">
                    <div classname=" my-3">
                        <h3 className="text-4xl semi-bold mb-5">About <span>Me</span></h3>
                        <p className="text-justify leading-7 w-11/12 mx-auto">
                        Hi, I'm Amaan, a passionate web developer with two years of experience in Web Development. Over the past couple of years, I've completed three projects that were clones of front-end of known websites which helped me learn html & css. 
                        <br/>
                        <br/>
                        I am continually exploring new technologies and methodologies to enhance my expertise and deliver exceptional results.My journey in web development has been an exciting adventure, and I look forward to embarking on more projects and challenges in the future. Let's build something great together!
                        </p>    
                    </div>
                </div>


                <div className="flex mt-10 items-center gap-7">
                    
                    <div className=" bg-[#e5e7eb] dark:bg-[#2c2c2c]/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold ">3
                            <span>+</span>
                        </h3>
                        <p><span className="md:text-base text-xs">Projects</span></p>
                    </div>
                    <div className="bg-[#e5e7eb] dark:bg-[#2c2c2c]/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold ">2
                            <span>+</span>
                        </h3>
                        <p><span className="md:text-base text-xs">of Experience</span></p>
                    </div>
                    <div className="bg-[#e5e7eb] dark:bg-[#2c2c2c]/40 p-5 rounded-lg">
                        <h3 className="md:text-4xl text-2xl font-semibold ">5
                            <span>+</span>
                        </h3>
                        <p><span className="md:text-base text-xs">Programming Languages</span></p>
                    </div>

                
                </div>

            </div> 



            
        </div>
            
    </div>
  )
}

export default About