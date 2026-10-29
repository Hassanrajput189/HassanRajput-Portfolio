"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contactMe" },
];

export default function Nav() {
  const path = usePathname();
  return (
    <header className="border-b border-slate-100">
      <nav className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-slate-900">Hassan Rajput</Link>
        <ul className="flex gap-5 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={path === l.href ? "text-slate-900 font-medium" : "text-slate-500 hover:text-slate-900"}>
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
