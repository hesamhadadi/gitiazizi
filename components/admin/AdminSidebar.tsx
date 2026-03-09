"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const nav = [
  { href: "/admin", label: "Dashboard", icon: "⊞" },
  { href: "/admin/collections", label: "Collections", icon: "◫" },
  { href: "/admin/research", label: "Research", icon: "◳" },
  { href: "/admin/settings", label: "Settings", icon: "◉" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-56 min-h-screen flex flex-col border-r border-white/5 bg-[#0a0a0a]">
      <div className="px-6 py-8 border-b border-white/5">
        <p className="text-[8px] tracking-[0.5em] uppercase text-[#af0019] mb-1">Admin</p>
        <p className="text-[#f5f0eb] text-sm tracking-widest" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Giti Azizi
        </p>
      </div>

      <nav className="flex-1 px-3 py-6 space-y-1">
        {nav.map(item => {
          const active = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 text-[10px] tracking-[0.35em] uppercase transition-all duration-200 ${
                active
                  ? "text-[#f5f0eb] bg-white/5 border-l border-[#af0019]"
                  : "text-[#8a8a8a] hover:text-[#f5f0eb] hover:bg-white/[0.03]"
              }`}
            >
              <span className="text-sm">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-6 border-t border-white/5 space-y-2">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-3 py-2 text-[10px] tracking-[0.3em] uppercase text-[#8a8a8a] hover:text-[#f5f0eb] transition-colors"
        >
          <span className="text-sm">↗</span>
          View Site
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: "/admin-auth" })}
          className="flex w-full items-center gap-3 px-3 py-2 text-[10px] tracking-[0.3em] uppercase text-[#8a8a8a] hover:text-[#af0019] transition-colors"
        >
          <span className="text-sm">⤬</span>
          Sign Out
        </button>
      </div>
    </aside>
  );
}
