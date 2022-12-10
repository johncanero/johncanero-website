/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

const CardItem = (props) => {
  return (
    <div>
      {/* John Cañero Website */}
      <div className="max-w-xs mx-auto overflow-hidden transition duration-300 ease-in-out shadow-2xl md:w-72 lg:w-96 md:mx-0 rounded-2xl dark:shadow-md dark:shadow-slate-50 bg-zinc-100 dark:bg-zinc-200 font-Poppins mt-9 md:mt-0 hover:-translate-y-1 hover:scale-100">
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
          <div className="flex mt-2 mb-1 text-xl font-bold dark:text-black">
            {props.title} {props.iconTitle}
          </div>
          <p className="text-base text-gray-700">{props.description}</p>
          <div className="flex">
            <div>
              <p className="mt-3 text-base text-gray-700 ">{props.source}</p>
            </div>

            <div>
              <Link target="_blank" rel="noopener noreferrer" href={props.sourceLink}>{props.iconSource}</Link>
            </div>
          </div>

          <div className="pb-2 mt-2">
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-300 dark:text-gray-800">
              {props.hashtag1}
            </span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-300 dark:text-gray-800">
              {props.hashtag2}
            </span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full dark:bg-gray-300 dark:text-gray-800">
              {props.hashtag3}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
