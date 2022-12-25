import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      {/* <div className="flex justify-center mt-2">
        <Image
          src="/images/404IconPage5.png"
          width={850}
          height={850}
          alt="404 Icon"
          className="w-80 md:w-8/12 rounded-2xl"
        />
      </div> */}

      <div className="mx-12 text-lg font-semibold text-center text-gray-600 mt-9 font-Poppins md:text-xl">
        Oops! 404 Error: Page not found!😢
      </div>


    </div>
  );
};

export default NotFound;
