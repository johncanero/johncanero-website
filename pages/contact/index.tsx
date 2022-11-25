import React from "react";
import Image from "next/image";

const contact = () => {
  return (
    <div>
      {/* <div className="mt-4 text-2xl font-semibold text-center text-gray-600 font-Poppins">
        Contact
      </div> */}

      <div className="container flex justify-center mx-auto mt-8 md:px-6">
        <section className="mb-32 text-gray-800">
          {/* Background Image */}
          <div className="relative overflow-hidden bg-no-repeat bg-cover">
            <Image
              src="/images/contactBackground.jpg"
              width={1150}
              height={800}
              alt="contactBackground"
              className="md:h-80"
            />
          </div>

          {/* Get in Touch and Forms */}
          <div className="relative flex justify-center bg-white md:px-6 items-top dark:bg-gray-900 sm:items-center">
            <div className="mx-auto md:max-w-5xl sm:px-3 lg:px-6">
              <div className="mt-3 md:mt-8 md:overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-3 mb-8 mr-2 md:p-6 md:dark:bg-gray-800 sm:rounded-lg">
                    <h1 className="text-4xl font-extrabold tracking-tight text-center text-gray-800 md:text-left dark:text-white">
                      Get in touch
                    </h1>
                    <p className="mt-2 text-lg font-medium text-center text-gray-600 md:text-left text-normal sm:text-2xl dark:text-gray-400">
                      Fill in the form to start a conversation
                    </p>

                    <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        className="w-8 h-8 text-gray-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div className="w-40 ml-4 font-semibold tracking-wide text-md">
                        Manila, NCR, Philippines
                      </div>
                    </div>

                    <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        className="w-8 h-8 text-gray-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div className="w-40 ml-4 font-semibold tracking-wide text-md">
                        +44 1234567890
                      </div>
                    </div>

                    <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        className="w-8 h-8 text-gray-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div className="w-40 ml-4 text-sm font-semibold tracking-wide break-normal md:text-base">
                        johncanero.official@gmail.com
                      </div>
                    </div>
                  </div>

                  {/* Form */}
                  <form className="flex flex-col md:p-6">
                    {/* Name */}
                    <div className="flex flex-col">
                      <label htmlFor="name" className="hidden">
                        Full Name
                      </label>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        className="px-3 py-3 mx-auto mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg dark:text-white md:mx-0 lg:w-100 md:w-56 w-72 dark:bg-gray-800 dark:border-gray-700 focus:border-indigo-500 focus:outline-none"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col mt-2">
                      <label htmlFor="email" className="hidden">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="px-3 py-3 mx-auto mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg dark:text-white md:mx-0 lg:w-100 md:w-56 w-72 dark:bg-gray-800 dark:border-gray-700 focus:border-indigo-500 focus:outline-none"
                      />
                    </div>

                    {/* Number */}
                    <div className="flex flex-col mt-2">
                      <label htmlFor="tel" className="hidden">
                        Number
                      </label>
                      <input
                        type="tel"
                        name="tel"
                        id="tel"
                        placeholder="Telephone Number"
                        className="px-3 py-3 mx-auto mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg dark:text-white lg:w-100 md:mx-0 md:w-56 w-72 dark:bg-gray-800 dark:border-gray-700 focus:border-indigo-500 focus:outline-none"
                      />
                    </div>

                    {/* Button */}

                    <button
                      type="submit"
                      className="px-6 py-3 mt-4 mb-8 font-bold text-white transition duration-300 ease-in-out bg-indigo-600 rounded-lg md:mt-4 md:w-32 hover:bg-blue-dark hover:bg-indigo-500"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default contact;
