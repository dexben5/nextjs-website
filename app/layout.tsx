import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import styles from "@components/layout.module.css";
import HeaderNav from "@components/header-nav";
import BackToHome from "@components/back-to-home";
import "@styles/global.css";

export const siteTitle = "Dexter Benson's Website";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description:
    "Welcome to Dexter Benson's website, a home for my journey as a software engineer",
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
            <BackToHome />
          </div>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </>
  );
}
