import React from "react";
import Link from "next/link";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import CardItem from "../../components/CardItem";

const index = () => {
  return (
    <div>
      {/* Add Links - Architecture */}
      <div className="flex justify-end gap-3 mt-4 font-semibold">
        <Link rel="noopener noreferrer" href="/projects">
          <div className=" dark:hover:text-cyan-500">Tech Projects</div>
        </Link>

        <Link rel="noopener noreferrer" href="/archi">
          <div className=" dark:hover:text-cyan-500">Architecture</div>
        </Link>
      </div>

      <div className="mt-4 text-2xl font-semibold text-center text-gray-600 dark:text-gray-400 font-Poppins">
        Architecture Projects
      </div>

      <div className="flex justify-center md:mt-6 mb-28 md:mb-6">
        <CardItem
          title="Architectural Portfolio"
          iconTitle={
            <AiOutlineInstagram className="mt-1 ml-1 text-purple-500 " />
          }
          description="A portfolio of architectural projects and design journey of John Cañero."
          src="/projects/architecture/architectureProject.png"
          path="https://www.instagram.com/johncanero.archi/"
          sourceLink="https://www.instagram.com/johncanero.archi/"
          hashtag1="architectural"
          hashtag2="portfolio"
          hashtag3="projects"
        />
      </div>
    </div>
  );
};

export default index;
