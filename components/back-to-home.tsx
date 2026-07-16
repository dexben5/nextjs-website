"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function BackToHome() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    !isHome && (
      <>
        <div className="mt-12">
          <Link className="text-blue-600" href="/">
            Back to home
          </Link>
        </div>
      </>
    )
  );
}
