"use client";
import React, { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { MoboNav } from "./ui/nav-items/MoboNav";
import CustomLink from "./ui/nav-items/CustomLink";
import { Link } from "react-scroll";
import { navItems } from "./ui/nav-items/MoboNav";

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useLayoutEffect(() => {
    const storedNavbarBg = localStorage.getItem("navbarBg");
    if (storedNavbarBg) {
      setNavbarBg(JSON.parse(storedNavbarBg));
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    localStorage.setItem("navbarBg", JSON.stringify(navbarBg));
  }, [navbarBg]);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };

  return (
    <header>
      <nav className="backdrop-blur-lg fixed top-0 z-50 w-full">
        <div className="container flex flex-wrap items-center justify-between mx-auto p-4 px-10 md:px-[15%]">
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            onSetActive={handleSetActive}
            className={`${
              activeSection === "hero"
            } cursor-pointer flex title-font  font-bold items-center  mb-0`}
          >
            <Image src="/icon.png" alt="Flowbite Logo" width="40" height="70" />
          </Link>

          <MoboNav />
          <div className="hidden w-full md:flex md:w-auto " id="navbar-default">
            <ul className="text-md font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0 text-white">
              {navItems.map((navItem, index) => (
                <li key={index}>
                  <CustomLink
                    activeSection={activeSection}
                    handleSetActive={handleSetActive}
                    title={navItem.title}
                    to={navItem.link}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;