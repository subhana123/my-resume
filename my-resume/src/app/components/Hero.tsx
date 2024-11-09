"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';


const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        
       Iam 
       <br className="hidden lg:inline-block" />
           
       Web Developer,
       UI/UX Designer,
     
       
      </h1>
      <p className="mb-8 leading-relaxed">
      my self Subhana Rameez and my qualification is BSCS and also passed Diploma in I.T and many other I.T courses
      iam Graphics designer,Logo designer,Web designer,Web Developer
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
        </Link>
       
      </div>
    </div>
    
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto w-[15rem]"
       alt ="Hero"
        width={200}
        height={200}
        src={require('../../../public/pictures/Picture.png')}
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero
