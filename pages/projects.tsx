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
          <span className="ml-2">@johncanero</span>
        </Link>
      </div>
    </div>
  );
};

export default projects;
