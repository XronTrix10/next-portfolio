"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./Dropdown-menu";

export const navItems = [
  {
    link: "about",
    title: "About",
  },
  {
    link: "skills",
    title: "Skills",
  },
  {
    link: "projects",
    title: "Projects",
  },
  {
    link: "certificates",
    title: "Certificates",
  },
  {
    link: "contact",
    title: "Contact",
  },
];

export function MoboNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="red-text outline-none md:hidden rotate-45 focus:rotate-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-layout-grid"
        >
          <rect width="7" height="7" x="3" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="14" rx="1" />
          <rect width="7" height="7" x="3" y="14" rx="1" />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-[#161616] dark:bg-[#161616] text-white mt-5 shadow-sm border-none p-2 rounded-lg"
        align="end"
      >
        {navItems.map((navItem, index) => (
          <DropdownMenuItem asChild key={index}>
            <Link href={`#${navItem.link}`}>{navItem.title}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
