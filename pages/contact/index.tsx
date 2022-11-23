import React from "react";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea"

const contact = () => {
  return (
    <div>
      <div className="mt-4 text-2xl font-semibold text-center text-gray-600 font-Poppins">
        Contact
      </div>

      <div className="w-full h-screen">
        <div className="px-3 mt-6">
            <form className="flex flex-col items-center w-1/3 mx-auto">
              <Input id="name" name="name" placeholder="Your Name" label="Name" />
              <Input id="email" name="name" placeholder="email@gmail.com" label="Email" />
              <TextArea id="message" name="message" placeholder="Hi There!" label="Your message" />
              <button className="py-2 mt-6 text-lg text-white rounded-md outline-none dark:text-neutral-900 bg-neutral-900 dark:bg-neutral-200 w-80 md:w-96 active:bg-neutral-500 dark:active:bg-neutral-500 focus:ring-2 focus:ring-neutral-800 disabled:bg-opacity-50 disabled:cursor-not-allowed" type="submit" 
              
              >Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
