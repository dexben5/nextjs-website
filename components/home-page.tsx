import Image from "next/image";
import { OWNER_NAME } from "@lib/constants";

export default function HomePage() {
  return (
    <>
      <Image
        priority
        src="/images/profile.jpg"
        className="rounded-full"
        height={144}
        width={144}
        alt={OWNER_NAME}
      />
      <h1 className="font-extrabold text-[2.5rem] leading-[1.2] tracking-[-0.05rem] my-4">
        {OWNER_NAME}
      </h1>
    </>
  );
}
