"use client";

import { usePathname } from "next/navigation";
import styles from "../components/layout.module.css";
import Link from "next/link";

export default function BackToHome() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    !isHome && (
      <div className={styles.backToHome}>
        <Link href="/">Back to home</Link>
      </div>
    )
  );
}
