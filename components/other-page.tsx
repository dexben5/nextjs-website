import Image from "next/image";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

export default function OtherPage({ name }: { name: string }) {
  return (
    <>
      <Link href="/">
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={108}
          width={108}
          alt={name}
        />
      </Link>
      <h2 className={utilStyles.headingLg}>
        <Link href="/" className={utilStyles.colorInherit}>
          {name}
        </Link>
      </h2>
    </>
  );
}
