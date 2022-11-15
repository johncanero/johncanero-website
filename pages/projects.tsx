import React from "react";
import Link from "next/link";
import { VscLinkExternal } from "@react-icons/all-files/vsc/VscLinkExternal";

const projects = () => {
  return (
    <div>
      <div className="text-center text-gray-600 font-Poppins font-semibold mt-4 text-2xl">
        Projects
      </div>

      <div className="text-center text-gray-600 dark:text-white font-Poppins font-semibold mt-4 text-2xl">
        Under Construction... 🚧
      </div>

      {/* Link Portfolio */}
      <div className="flex justify-center text-center mx-auto mt-12">
        <Link
          // target="_blank"
          rel="noopener noreferrer"
          href="https://bio.link/johncanero"
        >
          <button className="mx-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-gray-100 dark:text-white font-bold py-2 px-4 rounded-lg">
            @johncanero
          </button>
        </Link>
      </div>
    </div>
  );
};

export default projects;
