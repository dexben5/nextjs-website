import Image from "next/image";
import Link from "next/link";
import { OWNER_NAME } from "@lib/constants";

export default function OtherPage() {
  return (
    <>
      <Link href="/">
        <Image
          priority
          src="/images/profile.jpg"
          className="rounded-full"
          height={108}
          width={108}
          alt={OWNER_NAME}
        />
      </Link>
      <h2 className="text-2xl font-extrabold leading-[1.4] my-4">
        <Link href="/" className="text-inherit">
          {OWNER_NAME}
        </Link>
      </h2>
    </>
  );
}
