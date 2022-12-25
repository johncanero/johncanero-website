/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ImDownload } from "@react-icons/all-files/im/ImDownload";

const about = () => {
  return (
    <div className="px-4 mb-24 md:flex">
      {/* First Column */}
      <div>
        <div className="mx-4 font-Poppins md:mx-8 lg:mr-28">
          <div className="mt-4 text-2xl font-semibold text-center text-gray-600 dark:text-gray-400 font-Poppins">
            About Me
          </div>

          {/* John Cañero Logo */}
          <div className="flex justify-center mx-auto mt-4 mb-4">
            <Image
              src="/images/johncanero6.1.jpg"
              width={210}
              height={210}
              alt="John Cañero Logo"
              className="transition duration-300 ease-in-out rounded-full hover:-translate-y-1 hover:scale-100"
            />
          </div>

          <h1 className="mt-3 font-semibold text-center dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500">
            My STORY:
          </h1>
          <p className="mt-3 text-justify">
            Early back in my childhood and early teens, I usually love to draw
            architectural houses on a paper. The passion behind building and
            sketching houses helped me paved the way on choosing the program I
            like in College: Architecture.
          </p>

          {/* Baby Jam */}
          <div className="mx-auto mt-6 mb-6 md:w-10/12">
            <Image
              src="/images/jam1.jpg"
              width={580}
              height={580}
              alt="Baby Jam"
              className="transition duration-300 ease-in-out rounded-2xl hover:-translate-y-1 hover:scale-100"
            />
            <p className="mt-1 text-xs font-medium text-left text-neutral-400">
              PHOTO from the archives of the Cañero Family: Young Jam
            </p>
          </div>

          <p className="mt-3 text-justify">
            Right now, I am currently studying in University of Santo Tomas
            taking up BS Architecture. I am grateful and happy in my growth and
            journey in the institution. My design philosophy throughout my
            student experience in every project I create:{" "}
          </p>

          <p className="mt-5 italic text-center dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500">
            "The role of architecture is to design spaces for people and making
            them happy."
          </p>

          {/* Archi Student Jam */}
          <div className="mt-6 mb-6 md:w-10/12 md:mx-auto">
            <Image
              src="/images/jam2.jpg"
              width={600}
              height={600}
              alt="Archi Student Jam"
              className="transition duration-300 ease-in-out rounded-2xl hover:-translate-y-1 hover:scale-100"
            />
            <p className="mt-1 text-xs font-medium text-left text-neutral-400">
              PHOTO from the archives of John Cañero - University Pictures:
              Architecture Design Project: Fine Dining Restaurant
            </p>
          </div>

          <p className="mt-5 text-justify">
            This philosophy helped me a lot when designing and building stuffs
            that focuses on users.
          </p>

          {/* Snowboarder */}
          <div className="flex justify-center mx-auto mt-8">
            <Image
              src="/gif/snowboarder.gif"
              width={350}
              height={350}
              alt="Snowboarder"
            />
          </div>

          <h1 className="mt-6 font-semibold text-center dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500">
            My TECH JOURNEY:
          </h1>

          <p className="mt-3 text-justify">
            At the other side of the field, I spend my time learning on
            technology especially Frontend Development and UX (User Experience)
            and it helped me experience and see the opportunities at the tech
            sector. I consistently learn the concepts and tools behind and
            building projects around it.
          </p>

          <p className="mt-3 text-justify">
            In the future, my career aspiration would be to develop and build
            products that would uplift humankind. With the experiences I had, it
            helped me to empathize the users and realize what are their needs
            and wants. To always focus and center the user and make them happy.
          </p>


          {/* Jam Tech */}
          <div className="mx-auto mt-8 mb-6 md:w-10/12">
            <Image
              src="/images/jamTech.jpg"
              width={580}
              height={580}
              alt="Jam Tech"
              className="transition duration-300 ease-in-out rounded-2xl hover:-translate-y-1 hover:scale-100"
            />
            <p className="mt-1 text-xs font-medium text-left text-neutral-400">
              PHOTO from the gallery of John Cañero's phone: Selfie - Jam Tech
            </p>
          </div>

          <h1 className="mt-6 font-semibold text-left dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500">
            HIGHLIGHTS:
          </h1>

          <ul>
            <div className="mt-3">
              <li>
                ✅ Graduated at The Complete Web Development Bootcamp 2022{" "}
              </li>
              <li>
                ✅ Accomplished Google - Foundations of User Experience (UX)
                Design Certificate
              </li>
              <li>
                ✅ Accomplished Google - Start the UX Design Process: Empathize, Define, and Ideate Certificate
              </li>
              <li>
                ✅ Software Engineer/Developer at Upskill Education
              </li>
              <li>
                ✅ Project Manager and EA to Community Development (2018-2020) at Heritage Conservation Society- UST Chapter
              </li>
              <li>✅ Progress: The Ultimate React 101 at Scrimba </li>
            </div>
          </ul>

          <h1 className="mt-6 font-semibold text-left dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500">
            HOBBIES:
          </h1>

          <p className="mt-3 mb-12 text-left">
            When I have free time and no work, I enjoy:{" "}
            <span className=" text-cyan-500">•</span> playing football,{" "}
            <span className=" text-cyan-500">•</span> table tennis,{" "}
            <span className=" text-cyan-500">•</span> badminton,{" "}
            <span className=" text-cyan-500">•</span> cycling,{" "}
            <span className=" text-cyan-500">•</span> running,{" "}
            <span className=" text-cyan-500">•</span> playing board games such
            as chess, and <span className=" text-cyan-500">•</span> reading
            growth and development books.
          </p>
        </div>
      </div>

      {/* Certifications and Resume */}
      <div className="mx-4">
        <h1 className="mt-6 font-semibold text-left dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 font-Poppins">
          CERTIFICATES
        </h1>
        {/* Certifications */}
        <div className="font-Poppins">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.udemy.com/certificate/UC-c61dd9fc-19bb-4cc3-a5f0-c4d485d432af/"
          >
            <div className="mt-6 mb-8 md:w-52 lg:w-auto">
              <Image
                src="/images/udemyWebCertificate.jpg"
                width={800}
                height={800}
                alt="Udemy Certificate"
                className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-100"
              />
              <p className="mt-2 text-center dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500">
                Udemy: The Complete Web Development Bootcamp
              </p>
            </div>
          </Link>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://coursera.org/share/20d2d6807653c0d6cf69d173b7a77d01"
          >
            <div className="mt-8 mb-8 md:w-52 lg:w-auto">
              <Image
                src="/images/googleUXCertificate.jpg"
                width={800}
                height={800}
                alt="Udemy Certificate"
                className="transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-100"
              />
              <p className="mt-2 text-center dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500">
                Google: Foundations of User Experience (UX) Design
              </p>
            </div>
          </Link>

          {/* Resume */}
          <div>
            <h1 className="mt-6 font-semibold text-left dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 font-Poppins">
              RESUME
            </h1>

            {/* Resume Image */}
            <Link
              rel="noopener noreferrer"
              href="/download/RESUME-CAÑERO_JOHN_MICHAEL.pdf"
              download="RESUME-CAÑERO_JOHN_MICHAEL.pdf"
            >
              <Image
                src="/download/RESUME-CAÑERO_JOHN_MICHAEL_page-0001.jpg"
                width={400}
                height={400}
                alt="John Cañero Resume"
                className="mt-3 transition duration-300 ease-in-out rounded-xl hover:-translate-y-1 hover:scale-100"
              />
            </Link>

            {/* Resume Button */}
            <div className="flex justify-center mt-4 md:justify-start">
              <Link
                // Download
                target="_blank"
                rel="noopener noreferrer"
                href="/download/RESUME-CAÑERO_JOHN_MICHAEL.pdf"
                download="RESUME-CAÑERO_JOHN_MICHAEL.pdf"
              >
                <button className="inline-flex items-center px-4 py-2 font-bold text-gray-200 rounded bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800 font-Poppins">
                  <ImDownload />
                  <span className="ml-2">Download</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
