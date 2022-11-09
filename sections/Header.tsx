import React from "react";
import Link from "next/link";
import Button from "../components/Button";

const Header = () => {
  const navigations = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
  ];

  const renderThemeChanger = () => {
    return (
      <Button className='bg-gray-100' onClick={undefined}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </Button>
    );
  };

  return (
    <header className="h-16 flex items-center justify-between">
      <ul className="flex gap-4">
        {navigations.map((nav) => (
          // eslint-disable-next-line react/jsx-key
          <Link
            href={nav.path}
            className="font-semibold text-gray-600 hover:text-gray-00"
          >
            {nav.label}
          </Link>
        ))}
      </ul>
      {renderThemeChanger()}
    </header>
  );
};

export default Header;
