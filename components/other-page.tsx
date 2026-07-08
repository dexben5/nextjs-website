import Image from "next/image";
import Link from "next/link";
import utilStyles from "@styles/utils.module.css";
import { OWNER_NAME } from "@lib/constants";

export default function OtherPage() {
  return (
    <>
      <Link href="/">
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={108}
          width={108}
          alt={OWNER_NAME}
        />
      </Link>
      <h2 className={utilStyles.headingLg}>
        <Link href="/" className={utilStyles.colorInherit}>
          {OWNER_NAME}
        </Link>
      </h2>
    </>
  );
}
