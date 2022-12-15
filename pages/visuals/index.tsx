import React from "react";
import Link from "next/link";
import Image from "next/image";
// Icons
import { AiOutlineLaptop } from "@react-icons/all-files/ai/AiOutlineLaptop";
import { BsHouseDoor } from "@react-icons/all-files/bs/BsHouseDoor";
import { VscEdit } from "@react-icons/all-files/vsc/VscEdit";

const index = () => {
  return (
    <div className="font-Poppins mb-28">
      {/* Add Links - Architecture */}
      <div className="flex justify-end gap-3 mt-4 text-sm font-semibold md:text-base">
        <Link rel="noopener noreferrer" href="/projects">
          <div className="flex gap-2 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300">
            <AiOutlineLaptop className="mt-0 md:mt-1" size={18} /> Tech Projects
          </div>
        </Link>

        <Link rel="noopener noreferrer" href="/visuals">
          <div className="flex gap-2 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300">
            <VscEdit className="mt-0 md:mt-1" size={18} /> Visuals
          </div>
        </Link>

        <Link rel="noopener noreferrer" href="/architecture">
          <div className="flex gap-2 border-b-2 border-transparent dark:text-gray-300 hover:border-gray-600 dark:hover:border-gray-300">
            <BsHouseDoor className="mt-0 md:mt-1" size={18} /> Architecture
          </div>
        </Link>
      </div>

      {/* Heading */}
      <div className="mt-4 text-2xl font-semibold text-center text-gray-600 dark:text-gray-400 font-Poppins">
        Visuals
      </div>

      {/* Visuals */}
      <div className="flex flex-wrap justify-center gap-6 mt-6 md:gap-12">
        {/* Visual 1 */}
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/p/CVeYubPB-5o/"
          >
            <Image
              src="/images/visuals/rippleEffect.jpg"
              width={300}
              height={40}
              alt="rippleEffect"
              className="transition duration-300 border rounded-xl animate__animated animate__fadeIn md:w-60 lg:w-72 hover:-translate-y-1 hover:scale-100 dark:border-neutral-800"
            />
            <p className="mt-1 text-sm font-bold text-left w-60">
              Ripple Effect
            </p>
          </Link>
        </div>

        {/* Visual 2 */}
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/p/CabdY_wFoeO/"
          >
            <Image
              src="/images/visuals/escapeCompetition.jpg"
              width={300}
              height={40}
              alt="escapeCompetition"
              className="transition duration-300 border animate__animated animate__fadeIn md:w-60 lg:w-72 hover:-translate-y-1 hover:scale-100 dark:border-neutral-800 rounded-xl "
            />
            <p className="mt-1 text-sm font-bold text-left w-60">
              Escape Competition through Authenticity
            </p>
          </Link>
        </div>

        {/* Visual 3 */}
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/p/CVzF0lvB2ku/"
          >
            <Image
              src="/images/visuals/embraceYourOwnPace.jpg"
              width={300}
              height={40}
              alt="embraceYourOwnPace"
              className="transition duration-300 border animate__animated animate__fadeIn md:w-60 lg:w-72 dark:border-neutral-800 hover:-translate-y-1 hover:scale-100 rounded-xl "
            />
            <p className="mt-1 text-sm font-bold text-left w-60">
              Embrace your Own Pace
            </p>
          </Link>
        </div>

        {/* Visual 4 */}
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/p/CVpkNi0Bj8s/"
          >
            <Image
              src="/images/visuals/smallThings.jpg"
              width={300}
              height={40}
              alt="smallThings"
              className="transition duration-300 border animate__animated animate__fadeIn md:w-60 lg:w-72 dark:border-neutral-800 hover:-translate-y-1 hover:scale-100 rounded-xl"
            />
            <p className="mt-1 text-sm font-bold text-left w-60">
              Small Things
            </p>
          </Link>
        </div>

        {/* Visual 5 */}
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/p/CV93LlCF2ED/"
          >
            <Image
              src="/images/visuals/weAllGonnaMakeIt.jpg"
              width={300}
              height={40}
              alt="weAllGonnaMakeIt"
              className="transition duration-300 border animate__animated animate__fadeIn md:w-60 lg:w-72 hover:-translate-y-1 dark:border-neutral-800 hover:scale-100 rounded-xl"
            />
            <p className="mt-1 text-sm font-bold text-left w-60">
              We All Gonna Make It
            </p>
          </Link>
        </div>

        {/* Visual 6 */}
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/p/CWFHxLdBsc7/"
          >
            <Image
              src="/images/visuals/realArtistsShip.jpg"
              width={300}
              height={40}
              alt="realArtistsShip"
              className="transition duration-300 border dark:border-neutral-800 animate__animated animate__fadeIn md:w-60 lg:w-72 hover:-translate-y-1 hover:scale-100 rounded-xl"
            />
            <p className="mt-1 text-sm font-bold text-left w-60">
              Real Artists Ship
            </p>
          </Link>
        </div>

        {/* Visual 7 */}
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/p/CUUrF24lSb5/"
          >
            <Image
              src="/images/visuals/thinkOutsideTheBox.jpg"
              width={300}
              height={40}
              alt="thinkOutsideTheBox"
              className="transition duration-300 border dark:border-neutral-800 animate__animated animate__fadeIn md:w-60 lg:w-72 hover:-translate-y-1 hover:scale-100 rounded-xl"
            />
            <p className="mt-1 text-sm font-bold text-left w-60">
              Think Outside the Box
            </p>
          </Link>
        </div>

        {/* Visual 8 */}
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/p/CV44JQrFY0G/"
          >
            <Image
              src="/images/visuals/linearProgressions.jpg"
              width={300}
              height={40}
              alt="linearProgressions"
              className="transition duration-300 border dark:border-neutral-800 animate__animated animate__fadeIn md:w-60 lg:w-72 hover:-translate-y-1 hover:scale-100 rounded-xl"
            />
            <p className="mt-1 text-sm font-bold text-left w-60">
              Linear Progressions
            </p>
          </Link>
        </div>

        {/* Visual 9 */}
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/p/CVuPxnOFvpw/"
          >
            <Image
              src="/images/visuals/lifeIsUnpredictable.jpg"
              width={300}
              height={40}
              alt="lifeIsUnpredictable"
              className="transition duration-300 border dark:border-neutral-800 animate__animated animate__fadeIn md:w-60 lg:w-72 hover:-translate-y-1 hover:scale-100 rounded-xl"
            />
            <p className="mt-1 text-sm font-bold text-left w-60">
              Life is Unpredicatable
            </p>
          </Link>
        </div>

        {/* Visual 10 */}
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/p/CWMt9w0h_ub/"
          >
            <Image
              src="/images/visuals/weLearnWhoWeAreInPractice.jpg"
              width={300}
              height={40}
              alt="weLearnWhoWeAreInPractice"
              className="transition duration-300 border dark:border-neutral-800 animate__animated animate__fadeIn md:w-60 lg:w-72 hover:-translate-y-1 hover:scale-100 rounded-xl"
            />
            <p className="mt-1 text-sm font-bold text-left w-60">
              We Learn Who We Are In Practice, not in Theory
            </p>
          </Link>
        </div>

        {/* Visual 11 */}
        <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/p/CWfx5fOBvyO/"
          >
            <Image
              src="/images/visuals/humility.jpg"
              width={300}
              height={40}
              alt="humility"
              className="transition duration-300 border dark:border-neutral-800 animate__animated animate__fadeIn md:w-60 lg:w-72 hover:-translate-y-1 hover:scale-100 rounded-xl"
            />
            <p className="mt-1 text-sm font-bold text-left w-60">Humility</p>
          </Link>
        </div>

         {/* Visual 12 */}
         <div>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/p/CWUyA3YFjJ8/"
          >
            <Image
              src="/images/visuals/doGoodWork.jpg"
              width={300}
              height={40}
              alt="doGoodWork"
              className="transition duration-300 border dark:border-neutral-800 animate__animated animate__fadeIn md:w-60 lg:w-72 hover:-translate-y-1 hover:scale-100 rounded-xl"
            />
            <p className="mt-1 text-sm font-bold text-left w-60">Do Good Work</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
