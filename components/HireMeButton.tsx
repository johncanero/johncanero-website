import React from "react";
import Link from "next/link";

const HireMeButton = () => {
  return (
    <div>
        <header className="flex justify-center items-center md:justify-between">
          <div>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/feed/"
            >
              <button
                className="md:mx-0 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-gray-100 dark:text-white font-bold py-2 px-4 rounded-lg"
                onClick={undefined}
              >
                Hire Me!
              </button>
            </Link>
          </div>
        </header>
    </div>
  );
};

export default HireMeButton;

