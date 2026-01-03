"use client";

import Link from "next/link";
import CartButton from "@/src/components/cart/CartButton";

export default function WebHeader() {
  const isLoggedIn = true;
  const isAdmin = false;

  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-slate-900">
          ShopX
        </Link>

        <nav className="flex items-center gap-3 text-sm font-medium">
          {!isAdmin && <CartButton />}

          {isAdmin ? (
            <Link
              href="/admin/dashboard"
              className="rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
            >
              Dashboard
            </Link>
          ) : isLoggedIn ? (
            <Link
              href="/account"
              className="rounded-lg border px-4 py-2 hover:bg-slate-50"
            >
              My Account
            </Link>
          ) : (
            <Link
              href="/login"
              className="rounded-lg bg-slate-900 px-4 py-2 text-white"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
