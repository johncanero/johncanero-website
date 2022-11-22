/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

const CardItem = (props) => {
  return (
    <div>
      {/* John Cañero Website */}
      <div className="max-w-xs md:w-72 lg:w-96 mx-auto md:mx-0  rounded-2xl overflow-hidden shadow-2xl dark:shadow-md dark:shadow-slate-50 bg-zinc-100 dark:bg-zinc-200 font-Poppins mt-9 md:mt-0 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300">
        <div className="px-4 py-4">
          <Link target="_blank" rel="noopener noreferrer" href={props.path}>
            <Image
              src={props.src}
              path={props.path}
              alt=""
              width={250}
              height={250}
              className="w-full animate__animated animate__fadeIn rounded-2xl"
            />
          </Link>
          <div className="flex font-bold text-xl mt-2 mb-1 dark:text-black">
            {props.title} {props.iconTitle}
          </div>
          <p className="text-gray-700 text-base">{props.description}</p>
          <div className="flex">
            <div>
              <p className=" text-gray-700 text-base mt-3">{props.source}</p>
            </div>

            <div>
              <Link target="_blank" rel="noopener noreferrer" href={props.sourceLink}>{props.iconSource}</Link>
            </div>
          </div>

          <div className="mt-2 pb-2">
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              {props.hashtag1}
            </span>
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              {props.hashtag2}
            </span>
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              {props.hashtag3}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
