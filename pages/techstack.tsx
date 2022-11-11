import React from "react";
import Image from "next/image";

const techstack = () => {
  return (
    <div>
      <div className="text-center text-gray-600 font-Poppins font-semibold mt-4 text-2xl">
        My Tech Stack
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap md:justify-center mt-3 md:mx-20  lg:mx-72 font-Poppins">
        <div className="flex">
          {/* Javasript */}
          <Image
            src="/techstack/js.png"
            width={60}
            height={60}
            alt="Javascript Logo"
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
          />
          <p className="mt-5 mr-3">Tailwind CSS</p>
        </div>

        {/* Bootstrap */}
        <div className="flex">
          <Image
            src="/techstack/bootstrap5.png"
            width={60}
            height={60}
            alt="Bootstrap"
          />
          <p className="mt-5 mr-3">Bootstrap</p>
        </div>

        {/* React Js */}
        <div className="flex">
          <Image
            src="/techstack/reactjs.png"
            width={60}
            height={60}
            alt="React Js Logo"
          />
          <p className="mt-5 mr-3">React Js</p>
        </div>

        {/* Next Js */}
        <div className="flex">
          <Image
            src="/techstack/nextjs.png"
            width={60}
            height={60}
            alt="Next Js Logo"
          />
          <p className="mt-5 mr-3">Next Js</p>
        </div>

        {/* Vercel */}
        <div className="flex">
          <Image
            src="/techstack/vercel.png"
            width={60}
            height={60}
            alt="Vercel Logo"
          />
          <p className="mt-5 mr-3">Vercel</p>
        </div>

        {/* Netlify */}
        <div className="flex">
          <Image
            src="/techstack/netlify.png"
            width={60}
            height={60}
            alt="Netlify Logo"
          />
          <p className="mt-5 mr-3">Netlify</p>
        </div>

        {/* Heroku */}
        <div className="flex">
          <Image
            src="/techstack/heroku.png"
            width={60}
            height={60}
            alt="Heroku Logo"
          />
          <p className="mt-5 mr-3">Heroku</p>
        </div>

        {/* GitHub */}
        <div className="flex">
          <Image
            src="/techstack/github.png"
            width={60}
            height={60}
            alt="GitHub Logo"
          />
          <p className="mt-5 mr-3">GitHub</p>
        </div>

        {/* Git */}
        <div className="flex">
          <Image
            src="/techstack/git.png"
            width={60}
            height={60}
            alt="Git Logo"
          />
          <p className="mt-5 mr-3">Git</p>
        </div>

        {/* Node Js */}
        <div className="flex">
          <Image
            src="/techstack/nodejs.png"
            width={60}
            height={60}
            alt="Node Js Logo"
          />
          <p className="mt-5 mr-3">Node Js</p>
        </div>

        {/* npm */}
        <div className="flex">
          <Image
            src="/techstack/npm.png"
            width={60}
            height={60}
            alt="npm Logo"
          />
          <p className="mt-5 mr-3">npm</p>
        </div>

        {/* mongodb */}
        <div className="flex">
          <Image
            src="/techstack/mongodb.png"
            width={60}
            height={60}
            alt="MongoDB Logo"
          />
          <p className="mt-5 mr-3">MongoDB</p>
        </div>

        {/* Visual Studio Code */}
        <div className="flex">
          <Image
            src="/techstack/vs.png"
            width={60}
            height={60}
            alt="Visual Studio Code Logo"
          />
          <p className="mt-5 mr-3">Visual Studio Code</p>
        </div>
      </div>

      {/* Design Stack */}

      <div className="text-center text-gray-600 font-Poppins font-semibold mt-8 text-2xl">
        My Tech - Design & Architecture Stack
      </div>

      <div className="flex flex-wrap md:justify-center mt-3 md:mx-20  lg:mx-72 font-Poppins">
        <div className="flex">
          {/* Figma */}
          <Image
            src="/techstack/figma.png"
            width={60}
            height={60}
            alt="Figma Logo"
          />
          <p className="mt-5 mr-3">Figma</p>
        </div>

        <div className="flex">
          {/* Canva */}
          <Image
            src="/techstack/canva.png"
            width={60}
            height={60}
            alt="Canva Logo"
          />
          <p className="mt-5 mr-3">Canva</p>
        </div>
      </div>
    </div>
  );
};

export default techstack;
