import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <Image
          src="/images/404Icon.png"
          width={620}
          height={620}
          alt="Udemy Certificate"
          className="rounded-2xl"
          // className="rounded-2xl transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300"
        />
      </div>

      <div className="text-center font-Poppins text-gray-600 font-semibold text-lg md:text-xl mt-3">
        Oops! Page not found!😢
      </div>

      {/* Home and Contact Us Buttons */}
      <div className="flex justify-center mt-8 font-Poppins">
        <Link
          // target="_blank"
          rel="noopener noreferrer"
          href="/"
        >
          <button className="mx-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-gray-100 dark:text-white font-bold py-2 px-4 rounded-lg">
            GO HOME
          </button>
        </Link>

        <button className="mx-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-gray-100 dark:text-white font-bold py-2 px-4 rounded-lg">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default NotFound;
