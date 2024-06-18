import React from 'react'
import {FaGithubSquare,FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="mt-12 w-max-[800px] border-t border-gray-900 dark:border-gray-600 text-center">
        <p className="my=5 dark:text-[#4b5563]">Amaan Nakhwa<br/> 2024</p>
        <div className="inline-flex dark:text-[#4b5563] gap-4 text-3xl">
            <a href="https://github.com/AmaanNakhwa" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare/>
            </a>




        </div>
            

    </div>
  )
}

export default Footer