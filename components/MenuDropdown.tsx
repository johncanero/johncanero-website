import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
// Icons
import { Bars3Icon } from "@heroicons/react/20/solid";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { IoMdPerson } from "@react-icons/all-files/io/IoMdPerson";
import { VscLinkExternal } from "@react-icons/all-files/vsc/VscLinkExternal";
import { FaConnectdevelop } from "@react-icons/all-files/fa/FaConnectdevelop";
import { AiOutlineProject } from "@react-icons/all-files/ai/AiOutlineProject";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";

const MenuDropdown = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "light") {
      return (
        <Button
          className="mr-2"
          onClick={() => setTheme("dark")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </Button>
      );
    } else {
      return (
        <Button
          className="mr-3 bg-gray-200 dark:bg-neutral-900"
          onClick={() => setTheme("light")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      );
    }
  };
  return (
    // Mobile Visiblity
    <div className="flex justify-between px-4 mt-3 text-right md:hidden top-16 ">
      {/* Image */}
      <Link rel="noopener noreferrer" href="/">
        <div>
          <Image
            src="/images/letterJ.png"
            width={33}
            height={33}
            alt="jLogo"
            className="animate__animated animate__fadeIn"
          />
        </div>
      </Link>
      {/* Dark Mode and Toggle */}
      <div className="z-10">
        {renderThemeChanger()}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex justify-center w-full px-2 py-2 text-sm font-medium text-white rounded-md bg-gradient-to-r from-neutral-800 to-neutral-900 dark:from-cyan-500 dark:to-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
              <Bars3Icon className="w-5 h-5 text-white" aria-hidden="true" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {/* Home and About Section */}
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/">
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm font-Poppins`}
                      >
                        <FaHome size={17} />
                        <span className="ml-2">Home</span>
                      </button>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/about">
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-72 items-center rounded-md px-2 py-2 text-sm font-Poppins`}
                      >
                        <IoMdPerson size={17} />
                        <span className="ml-2">About Me</span>
                      </button>
                    </Link>
                  )}
                </Menu.Item>
              </div>
              {/* Create a New Section */}
              <div className="px-1 py-1 pb-2">
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/techstack">
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-72 items-center rounded-md px-2 py-2 text-sm font-Poppins`}
                      >
                        <FaConnectdevelop size={17} />

                        <span className="ml-2">Tech Stack</span>
                      </button>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/projects">
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-72 items-center rounded-md px-2 py-2 text-sm font-Poppins`}
                      >
                        <AiOutlineProject size={17} />

                        <span className="ml-2">Projects</span>
                      </button>
                    </Link>
                  )}
                </Menu.Item>
              </div>

              {/* Contact */}
              <div className="px-1 py-1 pb-2">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      // target="_blank"
                      rel="noopener noreferrer"
                      href="/contact"
                    >
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-72 items-center rounded-md px-2 py-1 text-sm font-Poppins`}
                      >
                        <AiOutlineMail size={17} />{" "}
                        <span className="ml-2">Contact</span>
                      </button>
                    </Link>
                  )}
                </Menu.Item>
              </div>

              {/* Bio Link */}
              <div className="px-1 py-1 pb-2">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      // target="_blank"
                      rel="noopener noreferrer"
                      href="https://bio.link/johncanero"
                    >
                      <button
                        className={`${
                          active ? "bg-violet-500 text-white" : "text-gray-900"
                        } group flex w-72 items-center rounded-md px-2 py-1 text-sm font-Poppins`}
                      >
                        <VscLinkExternal size={17} />{" "}
                        <span className="ml-2">@johncanero</span>
                      </button>
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default MenuDropdown;
