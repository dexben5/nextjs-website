"use client";

import { usePathname } from "next/navigation";
import HomePage from "./home-page";
import OtherPage from "./other-page";
import NavBarButton from "./navbar-button";

export default function HeaderNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <nav className="flex flex-wrap justify-center items-center text-2xl font-bold gap-36">
        <NavBarButton>Projects</NavBarButton>
        <div className="flex flex-col justify-center items-center pt-2">
          {isHome ? <HomePage /> : <OtherPage />}
        </div>
        <NavBarButton>Contact Information</NavBarButton>
      </nav>
    </>
  );
}
