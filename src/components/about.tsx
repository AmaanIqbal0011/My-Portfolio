"use client"
import React from "react";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import Link from "next/link";

const About = () => {
    return (
        <section id="about" className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
      alt="hero"
      src={require("../../public/photo/my-image.png")}
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Hello! I am 
        <Typewriter
  options={{
    strings: ['Aman Iqbal', 'Software & Web Developer',],
    autoStart: true,
    loop: true,
  }}
/>

      </h1>
      <p className="mb-8 leading-relaxed">
      I am Amaan Iqbal, an 18-year-old technology enthusiast with a keen interest in exploring and mastering emerging fields such as Generative AI, Metaverse, Blockchain, and Web 3. Currently, I am studying at GIAIC and working to deepen my expertise in JavaScript, TypeScript, Next.js, HTML, and CSS. My passion for learning new technologies drives me to continuously enhance my skill set and stay up-to-date with industry trends, preparing me for a successful career in tech.      </p>
      <div className="flex justify-center">
        <Link target="blank" href={"/My-CV.pdf"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          View My CV
        </button>
        </Link>
        <Link href={"#contact"}>
        <button className="ml-2 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact Me
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>


    )
}

export default About