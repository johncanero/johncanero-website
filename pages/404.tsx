import Image from "next/image";

const NotFound = () => {
  return (
    <div>
      <div className="flex justify-center mt-6 ">
        <Image
          src="/images/404Icon.png"
          width={800}
          height={800}
          alt="Udemy Certificate"
          className="rounded-2xl transition ease-in-out  hover:-translate-y-1 hover:scale-105 duration-300"
        />
      </div>

      <div className="text-center font-Poppins text-gray-600 font-semibold text-xl">
        Oops! page not found 😢
      </div>

    </div>
  );
};

export default NotFound;
