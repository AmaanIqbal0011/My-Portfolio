
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBeer } from 'react-icons/fa';
import { IoCloudDownloadSharp } from "react-icons/io5";


const Navbar = () => {
    return (
        <header className="text-gray-600 body-font z-50 sticky top-0 bg-white">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image  src={require("../../public/photo/logo.png")} alt="My logo" width={100} height={100} className="w-[80px]"  />
      <span className="ml-1 text-xl">Aman Iqbal</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link  href={"#hero"} className="mr-5 hover:text-gray-900">Home</Link>
      <Link  href={"#about"} className="mr-5 hover:text-gray-900">About Us</Link>
      <Link  href={"#skill"} className="mr-5 hover:text-gray-900">Skills</Link>
      <Link  href={"#project"} className="mr-5 hover:text-gray-900">Projects</Link>
      <Link  href={"#contact"} className="mr-5 hover:text-gray-900">Contact Us</Link>
    </nav>
      <a href="/My-CV.pdf" target="blank">
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      Download CV
      <IoCloudDownloadSharp  className="ml-3 text-xl"/>
    </button>
      </a>
  </div>
</header>
    )
}

export default Navbar;