import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
       
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/pictures/digital-clock.webp')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Digital Clock
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Digital clock
            </h1>
            <p className="leading-relaxed">
             this is the project which I've created for those who owns a digital clock
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/pictures/simple-calculator.webp')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Simple Calculator
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              CALCULATOR
            </h1>
            <p className="leading-relaxed">
            this is the project which I've created for those who owns a simple calculator.
            </p>
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
</section>

    </div>
  )
}

export default Project

