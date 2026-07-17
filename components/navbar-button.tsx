import Link from "next/link";

export default function NavBarButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Link href="/projects">
      <div className="bg-blue-300 rounded-2xl p-5 hover:rounded-4xl transition-all">
        {children}
      </div>
    </Link>
  );
}
