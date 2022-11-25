import React from "react";
import Image from "next/image";

const contact = () => {
  return (
    <div>
      <div className="mt-4 text-2xl font-semibold text-center text-gray-600 font-Poppins">
        Contact
      </div>

      <div className="container flex justify-center px-6 mx-auto my-6">
        <section className="mb-32 text-gray-800">
          <div className="relative overflow-hidden bg-no-repeat bg-cover">
            <Image
              src="/images/contactBackground.jpg"
              width={800}
              height={800}
              alt="contactBackground"
              className="rounded-xl md:h-80"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default contact;
