import React from "react";
import Link from "next/link";
// Icons
import { AiOutlineLaptop } from "@react-icons/all-files/ai/AiOutlineLaptop";
import { BsHouseDoor } from "@react-icons/all-files/bs/BsHouseDoor";
import { VscEdit } from "@react-icons/all-files/vsc/VscEdit";

const index = () => {
  return (
    <div>
      {/* Add Links - Architecture */}
      <div className="flex justify-end gap-3 mt-4 font-semibold">
        <Link rel="noopener noreferrer" href="/projects">
          <div className="flex gap-1 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300">
            <AiOutlineLaptop className="mt-1" size={18} /> Tech Projects
          </div>
        </Link>

        <Link rel="noopener noreferrer" href="/architecture">
          <div className="flex gap-1 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300">
            <BsHouseDoor className="mt-1" size={18} /> Architecture
          </div>
        </Link>

        <Link rel="noopener noreferrer" href="/visuals">
          <div className="flex gap-1 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300">
            <VscEdit className="mt-1" size={18} /> Visuals
          </div>
        </Link>
      </div>

      {/* Heading */}
      <div className="mt-4 text-2xl font-semibold text-center text-gray-600 dark:text-gray-400 font-Poppins">
        Visuals
      </div>
    </div>
  );
};

export default index;
