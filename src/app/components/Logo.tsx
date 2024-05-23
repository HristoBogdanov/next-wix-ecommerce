import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-2xl tracking-wider font-bold bg-gradient-to-tr from-violet-600 to-indigo-600 text-transparent bg-clip-text"
    >
      E-CO
    </Link>
  );
}
