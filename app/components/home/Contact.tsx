import React from "react";
import { Buttons, H2Style, H3Style } from "../ui/Styles";

function Contact() {
  return (
    <section
      className="w-full bg-transparent min-h-screen text-white p-[3.4em] md:p-[10em] grid place-content-center"
      id="contact"
    >
      <div className="text-center mb-4 md:mb-8">
        <h2 className={H2Style}>Contact Me</h2>
        <h3 className={H3Style}>Email Me</h3>
      </div>

      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 md:mb-4">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-900 border border-red-500 rounded-lg py-2 md:py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Xron"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-900 border border-red-500 rounded-lg py-2 md:py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-last-name"
              type="text"
              placeholder="Trix"
            />
          </div>
        </div>
        <div className="flex flex-wrap md:mb-4">
          <div className="md:mb-4 w-full">
            <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
              Your Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-900 border border-red-600 rounded-lg py-2 md:py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="username"
              type="text"
              placeholder="Email ID"
            />
          </div>
          <div className="md:mb-4 w-full">
            <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
              Your Message
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-900 border border-red-600 rounded-lg py-2 md:py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="username"
              placeholder="Your message here"
              rows={5}
            />
          </div>
        </div>

        <div className="mt-8 md:mt-0 text-center w-auto">
          <button type="submit" className={Buttons + "text-center"}>
            Send{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-send-horizontal"
            >
              <path d="m3 3 3 9-3 9 19-9Z" />
              <path d="M6 12h16" />
            </svg>
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
