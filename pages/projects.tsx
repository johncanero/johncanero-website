/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { VscLinkExternal } from "@react-icons/all-files/vsc/VscLinkExternal";

const projects = () => {
  return (
    <div>
      <div className="text-center text-gray-600 font-Poppins font-semibold mt-4 text-2xl">
        Projects
      </div>

      <div className="mt-6">
        {/* Remote Landing Page Card */}
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl dark:shadow-lg dark:shadow-slate-50 bg-zinc-100 dark:bg-zinc-200 font-Poppins">
          <div className="px-4 py-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://remote-landing-page-by-johncanero.vercel.app/"
            >
              <Image
                src="/projects/remoteLandingPage.png"
                width={250}
                height={250}
                alt="Remote Landing Page"
                className="w-full animate__animated animate__fadeIn"
              />
            </Link>
            <div className="font-bold text-xl mt-2 mb-2 dark:text-black">
              Remote Landing Page
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-4 mt-2 pb-2">
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              #remote
            </span>
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              #landingpage
            </span>
            <span className="inline-block bg-gray-200 dark:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-800 mr-2 mb-2">
              #work
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
