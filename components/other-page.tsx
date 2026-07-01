import Image from "next/image";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

// pass this as prop later
const name = "Dexter Benson";

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
