"use client";

import { useCartStore } from "@/src/store/useCartStore";

export default function CartButton() {
  const { items, openCart,isOpen ,closeCart } = useCartStore();

  return (
    <button
      onClick={isOpen ?  closeCart : openCart}
      className="relative rounded-lg border px-4 py-2 hover:bg-slate-50"
    >
      🛒 Cart

      {items.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {items.length}
        </span>
      )}
    </button>
  );
}
