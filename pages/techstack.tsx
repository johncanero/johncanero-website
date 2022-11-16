import React from "react";
import Image from "next/image";
import { FaConnectdevelop } from "@react-icons/all-files/fa/FaConnectdevelop";
import { BsPencilSquare } from "@react-icons/all-files/bs/BsPencilSquare";

const techstack = () => {
  return (
    <div className="mt-4">
      <div>
        {/* <div className="flex justify-center text-gray-600 dark:text-gray-300">
          <FaConnectdevelop size={60} />
        </div> */}
        <div className="text-center text-gray-600 font-Poppins font-semibold text-xl mx-9 md:text-2xl md:mx-0 mt-4">
          My Tech Stack
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center md:mx-20  lg:mx-72 font-Poppins">
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36 mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            {/* Javasript */}
            <div className="w-12">
              <Image
                src="/techstack/js.png"
                width={60}
                height={60}
                alt="Javascript Logo"
              />
            </div>
            <p className="mt-4 mr-3">Javascript</p>
          </div>

          {/* Typescript */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/typescript.png"
                width={60}
                height={60}
                alt="Typescript Logo"
              />
            </div>
            <p className="mt-4 mr-3">Typescript</p>
          </div>

          {/* HTML 5 */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36 mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/html5.png"
                width={60}
                height={60}
                alt="HTML5 Logo"
              />
            </div>
            <p className="mt-4 mr-3">HTML5</p>
          </div>

          {/* CSS */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl mr-3 w-36  mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/css.png"
                width={60}
                height={60}
                alt="CSS3 Logo"
              />
            </div>
            <p className="mt-4 mr-3">CSS3</p>
          </div>

          {/* Tailwind CSS */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/tailwind.png"
                width={60}
                height={60}
                alt="Tailwind Logo"
              />
            </div>
            <p className="mt-4 mr-3">Tailwind</p>
          </div>

          {/* Bootstrap */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeInanimate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/bootstrap5.png"
                width={60}
                height={60}
                alt="Bootstrap"
              />
            </div>
            <p className="mt-4 mr-3">Bootstrap</p>
          </div>

          {/* React Js */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeInanimate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/reactjs.png"
                width={60}
                height={60}
                alt="React Js Logo"
              />
            </div>
            <p className="mt-4 mr-3">React Js</p>
          </div>

          {/* Next Js */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/nextjs.png"
                width={60}
                height={60}
                alt="Next Js Logo"
              />
            </div>
            <p className="mt-4 mr-3">Next Js</p>
          </div>

          {/* Vercel */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/vercel.png"
                width={60}
                height={60}
                alt="Vercel Logo"
              />
            </div>
            <p className="mt-4 mr-3">Vercel</p>
          </div>

          {/* Netlify */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeInanimate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/netlify.png"
                width={60}
                height={60}
                alt="Netlify Logo"
              />
            </div>
            <p className="mt-4 mr-3">Netlify</p>
          </div>

          {/* Heroku */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/heroku.png"
                width={60}
                height={60}
                alt="Heroku Logo"
              />
            </div>
            <p className="mt-4 mr-3">Heroku</p>
          </div>

          {/* GitHub */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/github.png"
                width={60}
                height={60}
                alt="GitHub Logo"
              />
            </div>
            <p className="mt-4 mr-3">GitHub</p>
          </div>

          {/* Git */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/git.png"
                width={60}
                height={60}
                alt="Git Logo"
              />
            </div>
            <p className="mt-4 mr-3">Git</p>
          </div>

          {/* Node Js */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/nodejs.png"
                width={60}
                height={60}
                alt="Node Js Logo"
              />
            </div>
            <p className="mt-4 mr-3">Node Js</p>
          </div>

          {/* npm */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/npm.png"
                width={60}
                height={60}
                alt="npm Logo"
              />
            </div>
            <p className="mt-4 mr-3">npm</p>
          </div>

          {/* mongodb */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/mongodb.png"
                width={60}
                height={60}
                alt="MongoDB Logo"
              />
            </div>
            <p className="mt-4 mr-3">MongoDB</p>
          </div>

          {/* Visual Studio Code */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-56  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/vs.png"
                width={60}
                height={60}
                alt="Visual Studio Code Logo"
              />
            </div>
            <p className="mt-4 mr-3">Visual Studio Code</p>
          </div>
        </div>

        {/* Tech Stack Description */}
        <div className="font-Poppins">
          <p className="text-center mt-6 mx-auto w-80 md:mt-10 md:w-5/12">
            These are the <span className="font-semibold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500">Tech Stack Tools</span> I use as a developer in
            designing, creating and establishing development projects.
          </p>
        </div>
      </div>

      <div>
        {/* Design Stack */}
        {/* <div className="flex justify-center text-gray-600 dark:text-gray-300 mt-12">
          <BsPencilSquare size={50} />
        </div> */}

        <div className="text-center text-gray-600 font-Poppins font-semibold text-xl mx-9 md:text-2xl md:mx-0 mt-12">
          My Tech - Design & Architecture Stack
        </div>

        <div className="flex flex-wrap justify-center md:mx-20 lg:mx-72 font-Poppins mb-8">
          {/* Figma */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/figma.png"
                width={60}
                height={60}
                alt="Figma Logo"
              />
            </div>
            <p className="mt-4 mr-3">Figma</p>
          </div>

          {/* Canva */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/canva.png"
                width={60}
                height={60}
                alt="Canva Logo"
              />
            </div>
            <p className="mt-4 mr-3">Canva</p>
          </div>

          {/* Adobe Photoshop */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/ps.png"
                width={60}
                height={60}
                alt="Adobe Photoshop Logo"
              />
            </div>
            <p className="mt-4 mr-3">Photoshop</p>
          </div>

          {/* Adobe Illustrator */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/ai.png"
                width={60}
                height={60}
                alt="Adobe Illustrator Logo"
              />
            </div>
            <p className="mt-4 mr-3">Illustrator</p>
          </div>

          {/* Adobe Premiere */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/pr.png"
                width={60}
                height={60}
                alt="Adobe Premiere Logo"
              />
            </div>
            <p className="mt-4 mr-3">Premiere</p>
          </div>

          {/* AutoCAD */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/autocad.png"
                width={60}
                height={60}
                alt="Autodesk AutoCAD Logo"
              />
            </div>
            <p className="mt-4 mr-3">AutoCAD</p>
          </div>

          {/* Revit */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/revit.png"
                width={60}
                height={60}
                alt="Autodesk Revit Logo"
              />
            </div>
            <p className="mt-4 mr-3">Revit</p>
          </div>

          {/* SketchUp */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/sketchup.png"
                width={60}
                height={60}
                alt="SketchUp Logo"
              />
            </div>
            <p className="mt-4 mr-3">SketchUp</p>
          </div>

          {/* Lumion */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/lumion.png"
                width={60}
                height={60}
                alt="Lumion Logo"
              />
            </div>
            <p className="mt-4 mr-3">Lumion</p>
          </div>

          {/* Enscape */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/enscape.png"
                width={60}
                height={60}
                alt="Enscape Logo"
              />
            </div>
            <p className="mt-4 mr-3">Enscape</p>
          </div>

          {/* V-Ray */}
          <div className="flex justify-center bg-gray-200 dark:bg-gray-900 rounded-2xl w-36  mr-3 mt-4 transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeIn">
            <div className="w-12">
              <Image
                src="/techstack/vray.png"
                width={60}
                height={60}
                alt="V-Ray Logo"
              />
            </div>
            <p className="mt-4 mr-3">V-Ray</p>
          </div>

          {/* Tech Stack Descroption */}
          <div className="font-Poppins">
            <p className="text-center mt-6 mx-auto w-80 md:mt-10 md:w-10/12">
              These are the the <span className=" font-semibold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500">Tech Stack Design Tools</span> I used in designing
              architectural models, modelling, and rendering
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default techstack;
