/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";

const about = () => {
  return (
    <div className="md:flex">
      {/* First Column */}
      <div>
        <div className=" font-Poppins mx-4 md:mx-8 lg:mr-28">
          <div className="text-center text-gray-600 font-Poppins font-semibold mt-4 text-2xl">
            About Me
          </div>

          {/* John Cañero Logo */}
          <div className="flex justify-center mx-auto mt-3">
            <Image
              src="/images/johncanero4.1.png"
              width={250}
              height={250}
              alt="John Cañero Logo"
              className="animate__animated animate__fadeIn"
            />
          </div>

          <h1 className="mt-3 text-center font-semibold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500">
            My STORY:
          </h1>
          <p className="mt-3 text-justify">
            Early back in my childhood and early teens, I usually love to draw
            architectural houses on a paper. The passion behind building and
            sketching houses helped me paved the way on choosing the program I
            like in College: Architecture.
          </p>

          {/* Baby Jam */}
          <div className="mt-6 mb-6 md:w-8/12 mx-auto">
            <Image
              src="/images/jam1.jpg"
              width={580}
              height={580}
              alt="Baby Jam"
              className="rounded-2xl transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300"
            />
            <p className=" text-xs text-left mt-1 font-medium text-neutral-400">
              PHOTO from the archives of the Cañero Family: Young Jam
            </p>
          </div>

          <p className="mt-3 text-justify">
            Right now, I am currently studying in University of Santo Tomas
            taking up BS Architecture. I am grateful and happy in my growth and
            journey in the institution. My design philosophy throughout my
            student experience in every project I create:{" "}
          </p>

          <p className="italic mt-5 text-center dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500">
            "The role of architecture is to design spaces for people and making
            them happy."
          </p>

          {/* Archi Student Jam */}
          <div className="mt-6 mb-6 md:w-8/12 md:mx-auto">
            <Image
              src="/images/jam2.jpg"
              width={600}
              height={600}
              alt="Archi Student Jam"
              className="rounded-2xl transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300"
            />
            <p className=" text-xs text-left mt-1 font-medium text-neutral-400 ">
              PHOTO from the archives of John Cañero - University Pictures:
              Architecture Design Project: Fine Dining Restaurant
            </p>
          </div>

          <p className="mt-5 text-justify">
            This philosophy helped me a lot when designing and building stuffs
            that focuses on users.
          </p>

          {/* Snowboarder */}
          <div className="flex justify-center mt-8 mx-auto">
            <Image
              src="/gif/snowboarder.gif"
              width={350}
              height={350}
              alt="Snowboarder"
            />
          </div>

          <h1 className="mt-6 text-center font-semibold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500">
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

          <h1 className="mt-6 text-left font-semibold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500">
            HIGHLIGHTS:
          </h1>

          <ul>
            <div className="mt-3">
              <li>
                ✅ Graduated at The Complete Web Development Bootcamp 2022{" "}
              </li>
              <li>
                ✅ Aspiring Software Engineer/Developer (Upskill Education)
              </li>
              <li>
                ✅ Heritage Conservation Society- UST Chapter (Project Manager
                and EA to Community Development)
              </li>
              <li>
                ✅ Accomplished Google - Foundations of User Experience (UX)
                Design Course
              </li>
              <li>✅ Progress: The Ultimate React 101 at Scrimba </li>
            </div>
          </ul>

          <h1 className="mt-6 text-left font-semibold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500">
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

      {/* Certificaitons and Resume */}
      <div className="mx-4">
        <h1 className="mt-6 text-left font-semibold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 font-Poppins">
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
                className="rounded-xl transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeInRight"
              />
              <p className="text-center mt-2 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500">
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
                className="rounded-xl transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300 animate__animated animate__fadeInRight"
              />
              <p className="text-center mt-2 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500">
                Google: Foundations of User Experience (UX) Design
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default about;
