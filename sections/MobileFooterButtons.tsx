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
      <div className="fixed bottom-0 left-0 flex justify-center w-screen py-3 text-center bg-gray-100 border dark:bg-black50 gap-11 border-t-1 border-slate-400 dark:border-slate-700 border-x-0 md:hidden ">
        {/* Home */}
        <Link href="/" rel="noopener noreferrer">
          <button className=" hover:text-gray-800 dark:hover:text-gray-50">
            <FaHome size={25} />
          </button>
        </Link>

        {/* About Me */}
        <Link href="/about" rel="noopener noreferrer">
          <button className="hover:text-gray-800 dark:hover:text-gray-50">
            <IoMdPerson size={25} />
          </button>
        </Link>

        {/* Tech Stack */}
        <Link href="/techstack" rel="noopener noreferrer">
          <button className="hover:text-gray-800 dark:hover:text-gray-50">
            <FaConnectdevelop size={25} />
          </button>
        </Link>

        {/* Projects */}
        <Link href="/projects" rel="noopener noreferrer">
          <button className="hover:text-gray-800 dark:hover:text-gray-50">
            <AiOutlineProject size={25} />
          </button>
        </Link>

        {/* Contact */}
        <Link href="/contact" rel="noopener noreferrer">
          <button className="hover:text-gray-800 dark:hover:text-gray-50">
            <AiOutlineMail size={25} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MobileFooterButtons;
