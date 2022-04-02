import React from "react";
import Layout from "~/components/Layout";

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-col w-full mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl title-font">
            Have Any Questions?
          </h1>
          <p className="mx-auto text-xl leading-relaxed text-gray-400 lg:px-24 lg:w-2/3">
            Want to collaborate on any project or participate in a hackathon?
            Feel free to contact me on any of the socials mentioned below or by
            filling the form.
          </p>
        </div>
        <div className="px-12 py-8 mx-auto rounded-lg lg:w-1/2 md:w-2/3 bg-primary-dark">
          <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl title-font">
            Contact Me
          </h1>
          <div className="flex flex-wrap -m-2">
            <div className="w-1/2 p-2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="text-sm text-gray-600 leading-7"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="off"
                  className="w-full px-3 py-1 text-base text-white bg-secondary-dark border-gray-500 border rounded outline-none focus:bg-primary-dark leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="text-sm text-gray-600 leading-7"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-1 text-base text-white bg-secondary-dark border-gray-500 border rounded outline-none focus:bg-primary-dark leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="w-full p-2">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="text-sm text-gray-600 leading-7"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-3 py-1 text-base text-white bg-secondary-dark border-gray-500 border rounded outline-none focus:bg-primary-dark leading-8 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <button className="flex items-center justify-center w-full px-8 py-3 mx-2 mt-4 text-white border rounded-lg space-x-2 active:outline-soft-red transition duration-200 ease-in-out border-soft-red hover:bg-soft-red">
              <span className="text-xl font-medium">Submit</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
