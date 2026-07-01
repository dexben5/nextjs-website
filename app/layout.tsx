import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import styles from "../components/layout.module.css";
import HeaderNav from "./header-nav";

const name = "Dexter Benson";
export const siteTitle = "Dexter Benson's Website";

export const metadata: Metadata = {
  title: siteTitle,
  description: "Welcome to Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>
          <div className={styles.container}>
            <header className={styles.header}>
              <HeaderNav />
            </header>
            <main>{children}</main>
          </div>
        </body>
      </html>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
/*
TODO: Get this working
{!home && (
            <div className={styles.backToHome}>
              <Link href="/">Back to home</Link>
            </div>
          )}
*/
