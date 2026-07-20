"use client";

import { usePathname } from "next/navigation";
import HomePage from "./home-page";
import NavBarButton from "./navbar-button";
import Image from "next/image";
import { OWNER_NAME } from "@lib/constants";

export default function HeaderNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const navItems = [
    {
      label: "Projects",
      dropdown: [
        { label: "Project One", slug: "project-one" },
        { label: "Project Two", slug: "project-two" },
      ],
    },
    { label: "About Me", href: "/about" },
  ];

  return (
    <nav className="overflow-auto flex flex-wrap justify-center items-center text-2xl font-bold gap-36 bg-blue-50">
      <div className="flex justify-center items-center pt-2">
        <HomePage isHome={isHome}>
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className="rounded-full"
              height={96}
              width={96}
              alt={OWNER_NAME}
            />
            <h1 className="font-extrabold text-[2.5rem] leading-[1.2] tracking-[-0.05rem] my-4">
              {OWNER_NAME}
            </h1>
          </>
        </HomePage>
      </div>
      {navItems.map((item) => (
        <NavBarButton key={item.label} {...item} />
      ))}
    </nav>
  );
}
