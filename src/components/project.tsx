import React from "react";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
    return (
        <section id="project" className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Explore my projects crafted with HTML, CSS, and Next.js, showcasing a blend of clean design and responsive functionality
      </p>
    </div>
    <div className="flex flex-wrap -m-5">
      <div className="lg:w-1/2 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../public/photo/amazon clone.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
           UI/UX Clone
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Amazon Clone
            </h1>
            <p className="leading-relaxed">
            The design is fully responsive and user-friendly, with intuitive navigation and interactive elements like product cards, search, and a shopping cart to mimic a real shopping experience. The modern, Amazon-inspired visuals enhance usability and appeal.
           </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../public/photo/Screenshot (77).png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
           Game
            </h2>
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              TIC-TAC-TOE Game
            </h2>
          
            <p className="leading-relaxed">

   I created a two-player Tic-tac-toe game using HTML, CSS, and JavaScript for my GIAIC HTML assignment. It includes game logic to check for a winner or a draw, with a visual highlight on the winning line. This project strengthened my skills in HTML structure, CSS styling, and JavaScript interactivity.            </p>
        
        </div>

         
        </div>
      </div>
      
    </div>
  </div>
</section>

    )

}

export default Project