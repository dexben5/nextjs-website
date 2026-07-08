import Image from "next/image";
import utilStyles from "@styles/utils.module.css";
import { OWNER_NAME } from "@lib/constants";

export default function HomePage() {
  return (
    <>
      <Image
        priority
        src="/images/profile.jpg"
        className={utilStyles.borderCircle}
        height={144}
        width={144}
        alt={OWNER_NAME}
      />
      <h1 className={utilStyles.heading2Xl}>{OWNER_NAME}</h1>
    </>
  );
}
