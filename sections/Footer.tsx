import React from "react";
import Link from "next/link";

// Input Footer Name and All Rights Reserved text
// Create a function for updated year 

const Footer = () => {
  return (
    // Hide in Mobile
    <footer className="hidden text-sm text-center text-gray-500 md:block md:py-6 font-Poppins">
       <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/johncanero/"
      >

      <span className="mr-2 text-lg font-bold text-gray-900 dark:text-gray-100">
        John Cañero
      </span>
      </Link>
      &copy; {new Date().getFullYear()} All Rights Reserved
    </footer>
  );
};

export default Footer;
