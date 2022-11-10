import React from "react";
import Image from "next/image";

const techstack = () => {
  return (
    <div>
      <div className="text-center text-gray-600 font-Poppins font-semibold mt-4 text-2xl">
        My Tech Stack
      </div>

      <div className="flex font-Poppins">
        <div className="flex">
        {/* Javasript */}
          <Image
            src="/techstack/js.png"
            width={60}
            height={60}
            alt="jLogo"
            className=""
          />
          <p className="mt-5 mr-3">Javascript</p>
        </div>

        {/* Typescript */}
        <div className="flex">
          <Image
            src="/techstack/typescript.png"
            width={60}
            height={60}
            alt="jLogo"
            className=""
          />
          <p className="mt-5 mr-3">Typescript</p>
        </div>
      </div>
    </div>
  );
};

export default techstack;
