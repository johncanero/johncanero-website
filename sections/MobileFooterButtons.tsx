import React from "react";
import Link from "next/link";
// Icons
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { IoMdPerson } from "@react-icons/all-files/io/IoMdPerson";
import { VscLinkExternal } from "@react-icons/all-files/vsc/VscLinkExternal";
import { FaConnectdevelop } from "@react-icons/all-files/fa/FaConnectdevelop";
import { AiOutlineProject } from "@react-icons/all-files/ai/AiOutlineProject";

const MobileFooterButtons = () => {
  return (
    <div>
      <div className="flex justify-center fixed bottom-0 left-0 w-screen bg-gray-100 dark:bg-black  text-center gap-11 border border-t-1 border-slate-400 dark:border-slate-700 border-x-0 py-3 md:hidden ">
        {/* Home */}
        <Link href="/" rel="noopener noreferrer">
          <button className=" hover:text-gray-800 dark:hover:text-gray-50">
            <FaHome size={25} />
          </button>
        </Link>

        {/* About Me */}
        <Link href="/about/about" rel="noopener noreferrer">
          <button className="hover:text-gray-800 dark:hover:text-gray-50">
            <IoMdPerson size={25} />
          </button>
        </Link>

        {/* Tech Stack */}
        <Link href="/techstack/techstack" rel="noopener noreferrer">
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

        {/* Bio Link*/}
        <Link href="https://bio.link/johncanero" rel="noopener noreferrer">
          <button className="hover:text-gray-800 dark:hover:text-gray-50">
            <VscLinkExternal size={25} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MobileFooterButtons;
