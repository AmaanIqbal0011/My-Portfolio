"use client"

import React from "react";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import Link from "next/link";

const Hero = ()  => {
    return(

   
    <section id="hero" className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Hello! I am Aman Iqbal
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['Software Developer', 'Web Developer','UI/UX Designer'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <p className="mb-8 leading-relaxed">
      I&apos;m Amaan Iqbal, an 18-year-old ICS (Computer Science) student at APSACS with a passion for technology. Currently, I&apos;m learning AI, Metaverse, and Web 3 at GIAIC to build skills in modern digital innovation. I enjoy exploring new tech and developing projects that expand my understanding of the future of web development.
      </p>
      <div className="flex justify-center">
        <Link href={"#contact"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Hire Me
        </button>
        </Link>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={require("../../public/photo/my-image.png")}
      />
    </div>
  </div>
</section>
 )


}

export default Hero