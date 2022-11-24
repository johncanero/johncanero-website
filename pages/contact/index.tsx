import React from "react";
import { useState } from "react";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import { validate } from "../../utils/validate";
import Image from "next/image";

interface IValues {
  name: string;
  email: string;
  message: string;
}

interface IErrors extends Partial<IValues> {}

const contact = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [values, setValues] = useState<IValues>({
    name: "",
    email: "",
    message: "",
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [errors, setErrors] = useState<IErrors>({});
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(values);
    if (errors && Object.keys(errors).length > 0) {
      return setErrors(errors);
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setValues({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <div className="mt-4 text-2xl font-semibold text-center text-gray-600 font-Poppins">
        Contact
      </div>

      <div className="w-full h-screen">
        <div className="px-3 mt-6">
          <form
            className="flex flex-col items-center w-1/3 mx-auto"
            onSubmit={handleSubmit}
          >
            <Input
              value={values.name}
              onChange={handleChange}
              id="name"
              name="name"
              label="Your Name"
              placeholder="Enter your name"
              error={!!errors.name}
              errorMessage={!!errors.name ? errors.name : ""}
            />
            <Input
              value={values.email}
              onChange={handleChange}
              id="email"
              name="email"
              label="Your Email"
              placeholder="Enter your email address"
              error={!!errors.email}
              errorMessage={!!errors.email ? errors.email : ""}
            />
            <TextArea
              value={values.message}
              onChange={handleChange}
              id="message"
              name="message"
              label="Your message to me"
              placeholder="Enter your message"
              error={!!errors.message}
              errorMessage={!!errors.message ? errors.message : ""}
            />
         

            <button className="py-2 mt-6 text-lg text-white rounded-md outline-none dark:text-neutral-900 bg-neutral-900 dark:bg-neutral-200 w-80 md:w-96 active:bg-neutral-500 dark:active:bg-neutral-500 focus:ring-2 focus:ring-neutral-800 disabled:bg-opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={loading}
            >
              {!loading ? (
                "Submit"
              ) : (
                <div className="flex items-center justify-center w-full h-full ">
                  {/* <Image
                    src="/loader.svg"
                    className="animate-spin"
                    width="30"
                    height="30"
                  /> */}
                </div>
              )}
            </button>

            
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
