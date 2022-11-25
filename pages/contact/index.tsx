import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoLocation } from "@react-icons/all-files/go/GoLocation";
import { IoMdCall } from "@react-icons/all-files/io/IoMdCall";
import { BsEnvelope } from "@react-icons/all-files/bs/BsEnvelope";

const contact = () => {
  return (
    <div>
      {/* <div className="mt-4 text-2xl font-semibold text-center text-gray-600 font-Poppins">
        Contact
      </div> */}
      <div className="container flex justify-center mx-auto mt-8 md:px-6">
        <section className="mb-32 text-gray-800">
          {/* Background Image */}
          <div className="relative overflow-hidden bg-no-repeat bg-cover rounded-t-2xl">
            <Image
              src="/images/contactBackground.jpg"
              width={1150}
              height={800}
              alt="contactBackground"
              className="md:h-80"
            />
          </div>

          {/* Get in Touch and Forms */}
          <div className="relative flex justify-center bg-white md:px-3 lg:px-6 items-top rounded-b-3xl dark:bg-neutral-900 sm:items-center font-Poppins">
            <div className="mx-auto md:max-w-5xl sm:px-3 lg:px-6">
              <div className="mt-3 md:mt-8 md:overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-3 mb-8 mr-2 md:px-3 lg:px-10 md:py-0 sm:rounded-lg">
                    <h1 className="text-4xl font-extrabold tracking-tight text-center text-gray-800 md:text-left dark:text-white">
                      Get in touch
                    </h1>
                    <p className="mt-3 text-base font-medium text-gray-600 md:text-lg md:text-left text-normal dark:text-gray-400">
                      Fill in the form to start a conversation
                    </p>

                    {/* Location */}
                    <div className="flex items-center mt-5 text-gray-600 dark:text-gray-400">
                      <GoLocation size={20} />
                      <div className="ml-4 font-semibold tracking-wide w-72 text-md">
                        Quezon City, Philippines
                      </div>
                    </div>

                    <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                      <IoMdCall size={20} />
                      <div className="w-40 ml-4 font-semibold tracking-wide text-md">
                        +63 9876543210
                      </div>
                    </div>

                    <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                      <BsEnvelope size={20} />
                      <div className="w-40 ml-4 text-xs font-semibold tracking-wide break-normal md:text-xs">
                        johncanero.official@gmail.com
                      </div>
                    </div>
                  </div>

                  {/* Form and Input */}
                  <form className="flex flex-col md:mx-3 lg:mx-0 font-Poppins">
                    {/* Name */}
                    <h1 className="font-bold dark:text-white">Your Name</h1>
                    <div className="flex flex-col">
                      <label htmlFor="name" className="hidden">
                        Full Name
                      </label>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        className="px-3 py-3 mx-auto mt-2 text-gray-800 bg-white border border-gray-400 rounded-lg dark:text-white md:mx-0 lg:w-11/12 md:w-56 w-72 dark:bg-neutral-800 dark:border-neutral-700 focus:border-gray-800 focus:outline-none"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col mt-2">
                      <h1 className="font-bold dark:text-white">
                        Email Address
                      </h1>
                      <label htmlFor="email" className="hidden">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email address"
                        className="px-3 py-3 mx-auto mt-2 text-gray-800 bg-white border border-gray-400 rounded-lg dark:text-white md:mx-0 lg:w-11/12 md:w-56 w-72 dark:bg-neutral-800 dark:border-neutral-700 focus:border-gray-800 focus:outline-none"
                      />
                    </div>

                    {/* Number */}
                    {/* <div className="flex flex-col mt-2">
                      <h1 className="font-bold dark:text-white">
                        Message
                      </h1>
                      <label htmlFor="tel" className="hidden">
                        Your Message
                      </label>
                      <input
                        type="tel"
                        name="tel"
                        id="tel"
                        placeholder="Enter your telephone number"
                        className="px-3 py-3 mx-auto mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg dark:text-white lg:w-100 md:mx-0 md:w-56 w-72 dark:bg-gray-800 dark:border-gray-700 focus:border-gray-800 focus:outline-none"
                      />
                    </div> */}

                    <div className="mb-6 form-group">
                      <h1 className="mt-2 font-bold dark:text-white">
                        Your Message
                      </h1>
                      <textarea
                        className="block mt-2 text-gray-700 transition ease-in-out bg-white rounded form-control lg:w-11/12 md:w-56 w-72 h-52 dark:text-white dark:bg-gray-800 bg-clip-padding font-Poppins dark:bg-neutral-800 dark:border-neutral-700 focus:outline-none"
                        id="exampleFormControlTextarea13"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    {/* <div className="flex mb-6 text-center form-group form-check">
                      <input
                        type="checkbox"
                        className="w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                        id="exampleCheck87"
                        checked
                      />
                      <label
                        className="inline-block text-gray-800 dark:text-gray-400 form-check-label"
                        htmlFor="exampleCheck87"
                      >
                        Send me a copy of this message
                      </label>
                    </div> */}

                    {/* Button */}
                    <button
                      type="submit"
                      className="px-6 py-3 mb-6 font-bold text-center text-white transition duration-300 ease-in-out bg-gray-900 rounded-lg dark:text-gray-800 hover:dark:text-white dark:bg-gray-100 md:w-32 hover:bg-blue-dark hover:bg-gray-700 dark:hover:bg-gray-800"
                    >
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                
                      >
                        Submit
                      </Link>
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
