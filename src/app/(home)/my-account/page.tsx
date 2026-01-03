"use client";

import AddressSection from "@/src/components/my-account/AddressSection";
import OrdersSection from "@/src/components/my-account/OrdersSection";
import ProfileSection from "@/src/components/my-account/ProfileSection";
import { useState } from "react";

type Tab = "profile" | "address" | "orders";

export default function MyAccountPage() {
  const [tab, setTab] = useState<Tab>("profile");

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1 shadow-xl rounded-xl p-4 space-y-2 h-fit sticky top-24">
          <SidebarItem label="Profile" active={tab === "profile"} onClick={() => setTab("profile")} />
          <SidebarItem label="Address" active={tab === "address"} onClick={() => setTab("address")} />
          <SidebarItem label="Orders" active={tab === "orders"} onClick={() => setTab("orders")} />
          <SidebarItem label="Sign out" danger onClick={() => alert("logout")} />
        </aside>

        {/* Content */}
        <section className="md:col-span-3 bg-white shadow-xl rounded-xl p-6">
          {tab === "profile" && <ProfileSection />}
          {tab === "address" && <AddressSection />}
          {tab === "orders" && <OrdersSection />}
        </section>
      </div>
    </div>
  );
}

function SidebarItem({
  label,
  onClick,
  active,
  danger,
}: any) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-2 rounded-lg text-sm transition
        ${active ? "bg-emerald-50 text-emerald-700 font-medium" : "hover:bg-slate-100"}
        ${danger ? "text-red-600 hover:bg-red-50" : ""}
      `}
    >
      {label}
    </button>
  );
}
