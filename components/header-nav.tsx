"use client";

import { usePathname } from "next/navigation";
import HomePage from "./home-page";
import OtherPage from "./other-page";

export default function HeaderNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <nav className="flex flex-wrap justify-center items-center text-2xl font-bold gap-36">
        <div>Projects</div>
        <div className="flex flex-col justify-center items-center pt-2">
          {isHome ? <HomePage /> : <OtherPage />}
        </div>
        <div>Contact Information</div>
      </nav>
    </>
  );
}
