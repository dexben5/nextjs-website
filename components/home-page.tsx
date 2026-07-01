import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

// pass this in as a prop later
const name = "Dexter Benson";

export default function HomePage() {
  return (
    <>
      <Image
        priority
        src="/images/profile.jpg"
        className={utilStyles.borderCircle}
        height={144}
        width={144}
        alt={name}
      />
      <h1 className={utilStyles.heading2Xl}>{name}</h1>
    </>
  );
}
