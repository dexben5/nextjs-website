import Link from "next/link";

export default function HomePage({
  children,
  isHome,
}: {
  children: React.ReactNode;
  isHome: boolean;
}) {
  return (
    <div>
      {isHome ? (
        <div className="flex items-center gap-2">{children}</div>
      ) : (
        <Link className="flex items-center gap-2" href="/">
          {children}
        </Link>
      )}
    </div>
  );
}
