import React from "react";

// Input Footer Name and All Rights Reserved text
// Create a function for updated year 

const Footer = () => {
  return (
    // Hide in Mobile
    <footer className="hidden text-sm text-center text-gray-500 md:block md:py-6">
      <span className="mr-2 text-lg font-bold text-gray-900 dark:text-gray-100">
        John Cañero
      </span>
      &copy; {new Date().getFullYear()} All Rights Reserved
    </footer>
  );
};

export default Footer;
