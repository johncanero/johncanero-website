import React from "react";
import Link from "next/link";
// Icons
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { IoMdPerson } from "@react-icons/all-files/io/IoMdPerson";
import { FaConnectdevelop } from "@react-icons/all-files/fa/FaConnectdevelop";
import { AiOutlineProject } from "@react-icons/all-files/ai/AiOutlineProject";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";

const MobileFooterButtons = () => {
  return (
    <div>
      <div className="fixed bottom-0 left-0 flex justify-center w-screen py-2 ml-1 text-center bg-gray-100 border gap-7 sm:w-96 dark:bg-black50 border-t-1 border-slate-400 dark:border-slate-700 border-x-0 md:hidden ">
        {/* Home */}
        <Link href="/" rel="noopener noreferrer">
          <button className="hover:text-gray-800 dark:hover:text-gray-50">
            <FaHome className="ml-1" size={23} />
            <p className="mt-1 text-xs text-center font-Poppins">Home</p>
          </button>
        </Link>

        {/* About Me */}
        <Link href="/about" rel="noopener noreferrer">
          <button className="hover:text-gray-800 dark:hover:text-gray-50">
            <IoMdPerson className="ml-1" size={23} />
            <p className="mt-1 text-xs text-center font-Poppins">About</p>
          </button>
        </Link>

        {/* Tech Stack */}
        <Link href="/techstack" rel="noopener noreferrer">
          <button className="hover:text-gray-800 dark:hover:text-gray-50">
            <FaConnectdevelop className="ml-5" size={23} />
            <p className="mt-1 text-xs text-center font-Poppins">Tech Stack</p>
          </button>
        </Link>

        {/* Contact */}
        <Link href="/contact" rel="noopener noreferrer">
          <button className="hover:text-gray-800 dark:hover:text-gray-50">
            <AiOutlineMail className="ml-3" size={23} />
            <p className="mt-1 text-xs text-center font-Poppins">Contact</p>
          </button>
        </Link>
        
        {/* Projects */}
        <Link href="/projects" rel="noopener noreferrer">
          <button className="hover:text-gray-800 dark:hover:text-gray-50">
            <AiOutlineProject className="ml-2" size={23} />
            <p className="mt-1 text-xs text-center font-Poppins">Projects</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MobileFooterButtons;
