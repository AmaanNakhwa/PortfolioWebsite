import React from 'react'
import profilepic1 from '../assets/profilepic1.jpg'
import { AiFillGithub} from 'react-icons/ai'
import {TypeAnimation} from 'react-type-animation'

const Hero = () => {
  return (
    <div>
        <div className='my-7 max-w-[1200px] h-[100vh] mx-auto 
        flex flex-col-reverse sm:flex-row justify-center align-center' >

        <div className='flex-col my-auto mx-auto'>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold color: #333333  '> Hi I m Amaan Nakhwa</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        <TypeAnimation
         sequence={[
            "Frontend Dev",
            1000,
            "Webdesigner",
            1000,
            "Video Editor",
            1000,
         ]}
         wrapper="span"
         speed={50}
         repeat={Infinity}
         />
        </h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold text-[#a5a5a5] dark:text-[#6d6f71]'> with 2+ years experience </p>
        </div>

        <div className='text-5xl flex justify-start gap-16 my-7 text-[#FFC51A] '>
            
            <a href="https://github.com/AmaanNakhwa" target="_blank" rel="noopener noreferrer">
            <AiFillGithub/>
            </a>
            
        </div>

        <div className="relative inline-flex group my-3">
        <div className="absolute inset-0 transition-all duration-1000 opacity-70 bg-gradient-to-r from-[#FFC51A] via-[#FFD24D] to-[#EFB310] rounded-xl blur-lg group-hover:opacity-100 group-hover:duration-200">
        </div>
        
        <a 
        href="https://github.com/AmaanNakhwa?tab=repositories" 
        title="Github Repos" 
        role="button"
        className="relative inline-flex items-center justify-center w-[190px] h-[60px] px-8 py-4 text-lg font-bold dark:text-white transition-all duration-200 bg-primary-color rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        >
        Github Repos
        </a>
        </div>
    </div>    
        <div className='image-glow my-auto'>
        
            <img className='w-[300px] sm:w-[500px] rounded-lg mx-auto h-auto' src={profilepic1} alt="profile pic" />
        </div>

        </div>
        </div>  
    
  )
}

export default Hero