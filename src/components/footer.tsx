import React from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" body-font border-2 ">
  <div className="container px- py-6 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image  src={require("../../public/photo/logo.png")} alt="My logo" width={100} height={100} className="w-[80px]"  />
      <span className="ml-3 text-xl">Aman Iqbal</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Aman Iqbal
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a  href="https://www.facebook.com/profile.php?id=100075572779818" className="text-gray-500 text-2xl" target="blank">
      <FaFacebookF className="hover:text-[#316FF6]" />
      </a>
      <a href="https://www.linkedin.com/in/aman-iqbal-b06373330/" className="ml-3 text-gray-500 text-2xl" target="blank">
      <FaLinkedinIn className="hover:text-[#0077B5]" />
      </a>
      <a href="https://github.com/AmaanIqbal0011" target="blank" className="ml-3 text-gray-500 text-2xl">
      <FaGithub className="hover:text-[#000000]"/>
      </a>
      
       
    </span>
  </div>
</footer>

    )
}

export default Footer;