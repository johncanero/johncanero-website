import React from "react";

const about = () => {
  return (
    <div>
      <div className="text-center text-gray-600 font-Poppins font-semibold mt-4 text-2xl">
        About Me
      </div>

      <div className=" font-Poppins mx-8 md:mx-16 lg:mx-60">
        <h1 className="mt-6 text-center font-semibold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500">
          My STORY:
        </h1>
        <p className="mt-3 text-justify">
          Early back in my childhood and early teens, I usually love to draw
          architectural houses on a paper. The passion behind building and
          sketching houses helped me paved the way on choosing the program I
          like in College: Architecture.
        </p>

        <p className="mt-3 text-justify">
          Right now, I am currently studying in University of Santo Tomas taking
          up BS Architecture. I am grateful and happy in my growth and journey
          in the institution. My design philosophy throughout my student
          experience in every project I create:{" "}
        </p>

        <p className="italic mt-5 text-center">
          The role of architecture is to design spaces for people and making
          them happy.
        </p>

        <p className="mt-5 text-justify">
          This philosophy helped me a lot when designing and building stuffs
          that focuses on users.
        </p>

        <h1 className="mt-6 text-center font-semibold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500">
          My TECH JOURNEY:
        </h1>

        <p className="mt-3 text-justify">
          At the other side of the field, I spend my time learning on technology
          especially Frontend Development and UX (User Experience) and it helped
          me experience and see the opportunities at the tech sector. I
          consistently learn the concepts and tools behind and building projects
          around it.
        </p>

        <p className="mt-3 text-justify">
          In the future, my career aspiration would be to develop and build
          products that would uplift humankind. With the experiences I had, it
          helped me to empathize the users and realize what are their needs and
          wants. To always focus and center the user and make them happy.
        </p>

        <h1 className="mt-6 text-left font-semibold dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500">
          HIGHLIGHTS:
        </h1>

        <ul>
          <div className="mt-3">
            <li>✅ Graduated at The Complete Web Development Bootcamp 2022 </li>
            <li>✅ Aspiring Software Engineer/Developer (Upskill Education)</li>
            <li>
              ✅ Heritage Conservation Society- UST Chapter (Project Manager and
              EA to Community Development)
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

        <p className="mt-3 mb-12 text-justify">
          When I have free time and no work, I enjoy:{" "}
          <span className=" text-cyan-500">•</span> playing football,{" "}
          <span className=" text-cyan-500">•</span> table tennis,{" "}
          <span className=" text-cyan-500">•</span> badminton,{" "}
          <span className=" text-cyan-500">•</span> cycling,{" "}
          <span className=" text-cyan-500">•</span> running,{" "}
          <span className=" text-cyan-500">•</span> playing board games such as
          chess, and <span className=" text-cyan-500">•</span> reading growth and development books.
        </p>
      </div>
    </div>
  );
};

export default about;
