import React from "react";
import Link from "next/link";

const Header = () => {
  const navigations = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
  ];

  
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
      <button>Icon</button>
    </header>
  );
};

export default Header;
