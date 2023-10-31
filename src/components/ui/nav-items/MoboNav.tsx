"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { LayoutGrid } from "lucide-react";

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
      <LayoutGrid size={30} />
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
