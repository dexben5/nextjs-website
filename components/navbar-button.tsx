import Link from "next/link";

export default function NavBarButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <Link href="/projects">
      <div
        className={`bg-blue-300 rounded-2xl p-5 hover:rounded-4xl opacity-70 hover:opacity-100 transition-all shadow-2xl justify-center items-center ${className}`}
      >
        {children}
      </div>
    </Link>
  );
}
