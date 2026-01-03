"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { label: "Dashboard", href: "/admin/dashboard" },
  { label: "Products", href: "/admin/products" },
  { label: "Categories", href: "/admin/categories" },
  { label: "Users", href: "/admin/users" },
  { label: "Orders", href: "/admin/orders" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile menu button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-40 rounded-lg bg-yellow-400 px-3 py-2 font-semibold text-slate-900 md:hidden"
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={[
          // size & color
          "w-64 bg-slate-900 text-slate-100",

          // height
          "h-screen",

          // positioning:
          // mobile = fixed overlay
          // desktop = normal flex item
          "fixed left-0 top-0 z-40 md:relative md:z-auto",

          // animation
          "transition-transform duration-200",

          open ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        ].join(" ")}
      >
        {/* Logo / Title */}
        <div className="h-16 flex items-center px-5 border-b border-slate-800">
          <span className="text-lg font-bold tracking-wide">ADMIN PANEL</span>

          <button
            onClick={() => setOpen(false)}
            className="ml-auto text-slate-300 md:hidden"
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-3 space-y-1 overflow-y-auto h-[calc(100vh-64px)]">
          {nav.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={[
                  "block rounded-lg px-4 py-3 text-sm font-medium transition",
                  active
                    ? "bg-slate-800 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
