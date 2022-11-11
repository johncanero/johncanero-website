import React from "react";
import Image from "next/image";

const techstack = () => {
  return (
    <div>
      <div className="text-center text-gray-600 font-Poppins font-semibold mt-4 text-2xl">
        My Tech Stack
      </div>

      <div className="flex flex-wrap justify-center mt-3 md:mx-72 font-Poppins">
        <div className="flex">
          {/* Javasript */}
          <Image
            src="/techstack/js.png"
            width={60}
            height={60}
            alt="Javascript Logo"
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
            alt="Typescript Logo"
            className=""
          />
          <p className="mt-5 mr-3">Typescript</p>
        </div>

        {/* HTML 5 */}
        <div className="flex">
          <Image
            src="/techstack/html5.png"
            width={60}
            height={60}
            alt="HTML5 Logo"
            className=""
          />
          <p className="mt-5 mr-3">HTML5</p>
        </div>

        {/* CSS */}
        <div className="flex">
          <Image
            src="/techstack/css.png"
            width={60}
            height={60}
            alt="CSS3 Logo"
            className=""
          />
          <p className="mt-5 mr-3">CSS3</p>
        </div>

        {/* Tailwind CSS */}
        <div className="flex">
          <Image
            src="/techstack/tailwind.png"
            width={60}
            height={60}
            alt="Tailwind Logo"
            className=""
          />
          <p className="mt-5 mr-3">Tailwind CSS</p>
        </div>

        
        {/* React Js */}
        <div className="flex">
          <Image
            src="/techstack/reactjs.png"
            width={60}
            height={60}
            alt="React Js Logo"
            className=""
          />
          <p className="mt-5 mr-3">React Js</p>
        </div>

        
        {/* Next Js */}
        <div className="flex">
          <Image
            src="/techstack/nextjs.png"
            width={60}
            height={60}
            alt="jLogo"
            className=""
          />
          <p className="mt-5 mr-3">Next Js</p>
        </div>
      </div>
    </div>
  );
};

export default techstack;
