import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";
import MenuDropdown from "../components/MenuDropdown";
// import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
// Icons
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { IoMdPerson } from "@react-icons/all-files/io/IoMdPerson";
import { FaConnectdevelop } from "@react-icons/all-files/fa/FaConnectdevelop";
import { AiOutlineProject } from "@react-icons/all-files/ai/AiOutlineProject";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Button
          className="bg-gray-200 dark:bg-neutral-900"
          onClick={() => setTheme("light")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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
    } else {
      return (
        <Button
          className="bg-neutral-800 text-white"
          onClick={() => setTheme("dark")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </Button>
      );
    }
  };

  return (
    <div>
      <div className="hidden md:block">
        <header className="h-20 flex items-center justify-between">
          <div className="">
            <ul className="flex gap-5 md:gap-7 text-sm">
              <Link rel="noopener noreferrer" href="/">
                <Image
                  src="/images/letterJ.png"
                  width={40}
                  height={40}
                  alt="jLogo"
                  className="animate__animated animate__fadeIn"
                />
              </Link>

              {/* Header Links */}
              <Link
                rel="noopener noreferrer"
                href="/"
                className="font-semibold text-gray-600 dark:text-gray-300 border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300"
              >
                <FaHome size={23} className="ml-2" />
                Home
              </Link>

              <Link
                rel="noopener noreferrer"
                href="/about"
                className="font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-800 border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300"
              >
                <IoMdPerson size={23} className="ml-5" />
                About Me
              </Link>

              <Link
                rel="noopener noreferrer"
                href="/techstack"
                className="font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-800 border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300"
              >
                <FaConnectdevelop size={23} className="ml-5" />
                Tech Stack
              </Link>

              <Link
                rel="noopener noreferrer"
                href="/projects"
                className="font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-800 border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300"
              >
                <AiOutlineProject size={23} className="ml-3" />
                Projects
              </Link>

              <Link
                rel="noopener noreferrer"
                href="/contact"
                className="font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-800 border-b-2 border-transparent hover:border-gray-600 dark:hover:border-gray-300"
              >
                <AiOutlineMail size={23} className="ml-3" />
                Contact
              </Link>
            </ul>
          </div>

          <div className="flex">
            <Link
              // target="_blank"
              rel="noopener noreferrer"
              href="https://bio.link/johncanero"
              className="flex mt-1 mr-4 font-Poppis font-semibold text-gray-600 hover:text-gray-800 animate__animated animate__bounceInDown"
            >
              @johncanero
            </Link>
            {renderThemeChanger()}
          </div>
        </header>
      </div>
      {/* Mobile - Menu */}
      <MenuDropdown />
    </div>
  );
};

export default Header;
