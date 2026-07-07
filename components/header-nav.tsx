"use client";

import { usePathname } from "next/navigation";
import HomePage from "./home-page";
import OtherPage from "./other-page";

export default function HeaderNav({ name }: { name: string }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return isHome ? <HomePage name={name} /> : <OtherPage name={name} />;
}
