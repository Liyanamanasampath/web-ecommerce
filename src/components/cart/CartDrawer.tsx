"use client";

import Link from "next/link";
import { useCartStore } from "@/src/store/useCartStore";

export default function CartDrawer() {
  const { items, isOpen, closeCart, increaseQty, decreaseQty, removeItem } =
    useCartStore();

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <aside
      className={`fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-xl
      transform transition-transform duration-300 ease-out
      ${isOpen ? "translate-x-0" : "translate-x-full"}
      flex flex-col h-dvh`}
    >
      {/* Header (fixed) */}
      <div className="h-16 px-6 border-b flex items-center justify-between shrink-0">
        <h3 className="text-lg font-semibold text-slate-800">Your Order</h3>
        <button
          onClick={closeCart}
          className="text-slate-400 hover:text-slate-700 text-xl"
        >
          ✕
        </button>
      </div>

      {/* Items (ONLY this scrolls) */}
      <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
        {items.length === 0 && (
          <p className="text-slate-500 text-sm text-center mt-10">
            Your cart is empty.
          </p>
        )}

        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-lg object-cover border"
            />

            <div className="flex-1">
              <p className="font-medium text-slate-800">{item.name}</p>
              <button
                onClick={() => removeItem(item.id)}
                className="text-xs text-rose-600 hover:underline mt-1"
              >
                Remove
              </button>
            </div>

            {/* Price + Qty (right side) */}
            <div className="text-right">
              <p className="font-medium text-slate-800 whitespace-nowrap">
                LKR {(item.price * item.qty).toLocaleString()}
              </p>

              <div className="mt-1 flex items-center justify-end gap-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="w-7 h-7 rounded-full border text-sm hover:bg-slate-100"
                >
                  −
                </button>

                <span className="text-sm font-medium w-4 text-center">
                  {item.qty}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="w-7 h-7 rounded-full border text-sm hover:bg-slate-100"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer (fixed) */}
      <div className="border-t px-6 py-5 bg-white shrink-0">
        <div className="flex justify-between font-semibold text-lg mb-4">
          <span>Total</span>
          <span>LKR {total.toLocaleString()}</span>
        </div>

        <Link
          href="/cart"
          onClick={closeCart}
          className="block w-full text-center rounded-xl bg-emerald-600
  text-white py-3 font-medium hover:bg-emerald-700 transition"
        >
          Go to Checkout
        </Link>

      </div>
    </aside>
  );
}
