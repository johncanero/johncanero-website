import Image from "next/image";

const NotFound = () => {
  return (
    <div>
      <div className="flex justify-center mt-6 ">
        <Image
          src="/images/404Icon.png"
          width={650}
          height={650}
          alt="Udemy Certificate"
          className="rounded-2xl transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300"
        />
      </div>

      <div className="text-center font-Poppins text-gray-600 font-semibold text-lg md:text-xl mt-3">
        PAGE NOT FOUND 😢
      </div>

      {/* Home and Contact Us Buttons */}

    </div>
  );
};

export default NotFound;
