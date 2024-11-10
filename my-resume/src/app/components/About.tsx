import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx auto w-[300px] h-[400px]" 
        alt="hero"
        src="/pictures/Picture.png"   width={300} height={300}
        
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
       
      </h1>
      <p className="mb-5 leading-relaxed">
       My self Subhana Rameez and my qualification is BSCS in 3.8 cgpa and also passinf diploma in I.T and many other short course for I.T field      </p>
      <div className="flex justify-center">
        <a href={"/public/cv/C. V.pdf"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          View CV
        </button>
        </a>
       
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
