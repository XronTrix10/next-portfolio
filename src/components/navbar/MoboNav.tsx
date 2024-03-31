"use client";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import CustomLink from "./CustomLink";
import { LayoutGrid } from "lucide-react";
import { useState } from "react";

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
  const [activeSection, setActiveSection] = useState<string>("");

  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };

  return (
    <Sheet>
      <SheetTrigger
        className="red-text outline-none md:hidden rotate-45 data-[state=open]:-rotate-90 duration-200"
      >
        <LayoutGrid size={27} />
      </SheetTrigger>
      <SheetContent className="bg-[#1f1f1f6e] backdrop-blur-md text-white border-none p-2 flex flex-col justify-between">
        <div className="flex flex-col gap-y-2 px-4 py-10 pt-16">
          {navItems.map((navItem, index) => (
            <p key={index} className="px-2 py-4 rounded-md text-lg">
              <CustomLink
                activeSection={activeSection}
                handleSetActive={handleSetActive}
                title={navItem.title}
                to={navItem.link}
              />
            </p>
          ))}
        </div>
        <span className="px-6 mb-6 opacity-80">Made at night ❤️</span>
      </SheetContent>
    </Sheet>
  );
}
