import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white body-font backdrop-blur-lg bg-transparent md:h-[10vh]">
      <div className="md:px-[15%] py-6 md:py-0 mx-auto flex items-center sm:flex-row flex-col font-thin">
        <Link
          href="/"
          className="hidden md:flex title-font font-medium items-center md:justify-start justify-center"
        >
          <Image src="/icon.png" alt="XronTrix Logo" width="30" height="60" />
          <span className="ml-3 text-xl">Xron Trix</span>
        </Link>
        <p className="text-gray-500 text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:py-2 sm:mt-0 mt-4">
          © 2024 <span className="red-text">Xron Trix</span>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-3">
          <Link
            href="https://github.com/XronTrix10"
            className="hover:text-red-600"
          >
            <i className="uil uil-github text-2xl"></i>
          </Link>
          <Link
            href="https://youtube.com/@XronTrix10"
            className="hover:text-red-600"
          >
            <i className="uil uil-youtube text-2xl"></i>
          </Link>
          <Link
            href="https://gitlab.com/XronTrix10"
            className="hover:text-red-600"
          >
            <i className="uil uil-gitlab text-2xl"></i>
          </Link>
          <Link
            href="https://twitter.com/XronTrix10"
            className="hover:text-red-600"
          >
            <i className="uil uil-twitter text-2xl"></i>
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
