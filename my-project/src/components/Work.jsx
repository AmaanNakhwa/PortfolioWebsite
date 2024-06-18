import React from 'react'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.png'


const Work = () => {
  return (
    <div className="py-6 max-w- [12eøpx] mx-auto" >
        <div className="mx-auto px-4 md:px-8">
            <div className="mb-4 flex items-center justify-between">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2x1 lg:text-3x1 " >
                        My <span>Projects</span>
                    </h2>    
                    <p className="" >
                    As an enthusiastic coder still in the early stages of my journey, I’ve successfully completed a few projects. Although they're majorly clones, but each one has been a valuable learning experience. I’m excited to continue exploring and growing in web development, and I’m looking forward to tackling more projects in the future. It’s going to be an exciting adventure!
                    </p>  
                </div>
            </div>
            
            
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:gap-6 x1:gap-8">

            <a href="https://merry-rolypoly-da0b7e.netlify.app/" class="image-glow group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">
                < img src={proj1} alt="" class="h-full w-full object-cover object-center transition
                                                duration-200 group-hover:scale-110" />   
            </a>
          

            <a href="https://666561fe74013c9c4b6bed1f--warm-faun-ae7296.netlify.app/" class="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80">
                < img src={proj2} alt="" class="h-full w-full object-cover object-center transition
                                                duration-200 group-hover:scale-110"/>             
            </a>

            <a href="https://66656254b7dd97960216fcf9--elaborate-gnome-764123.netlify.app/" class="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-3 md:h-80">
                < img src={proj3} alt="" class="h-full w-full object-cover object-center transition
                                                duration-200 group-hover:scale-110" />             
            </a>
    
            </div>    
        </div>
    </div>   
  )   
}

export default Work