"use client";

import { useCartStore } from "@/src/store/useCartStore";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { items } = useCartStore();
  const router = useRouter();

  const subtotal = items.reduce(
    (sum, i) => sum + i.price * i.qty,
    0
  );

  const shipping = subtotal > 0 ? 350 : 0;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  const confirmOrder = ()=>{
    router.push('/order-success')
  }
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT – FORM */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-xl font-semibold mb-6">
              Checkout
            </h2>

            {/* Contact */}
            <div className="mb-8">
              <h3 className="text-sm font-medium mb-3">
                Contact information
              </h3>
              <input
                placeholder="Email address"
                className="w-full rounded-lg border px-4 py-3 text-sm"
              />
            </div>

            {/* Shipping */}
            <div className="mb-8">
              <h3 className="text-sm font-medium mb-3">
                Shipping information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  placeholder="First name"
                  className="rounded-lg border px-4 py-3 text-sm"
                />
                <input
                  placeholder="Last name"
                  className="rounded-lg border px-4 py-3 text-sm"
                />
              </div>

              <input
                placeholder="Company (optional)"
                className="mt-4 w-full rounded-lg border px-4 py-3 text-sm"
              />

              <input
                placeholder="Address"
                className="mt-4 w-full rounded-lg border px-4 py-3 text-sm"
              />

              <input
                placeholder="Apartment, suite, etc."
                className="mt-4 w-full rounded-lg border px-4 py-3 text-sm"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <input
                  placeholder="City"
                  className="rounded-lg border px-4 py-3 text-sm"
                />
                <input
                  placeholder="Postal code"
                  className="rounded-lg border px-4 py-3 text-sm"
                />
              </div>

              <input
                placeholder="Phone"
                className="mt-4 w-full rounded-lg border px-4 py-3 text-sm"
              />
            </div>

            {/* Payment */}
            {/* <div>
              <h3 className="text-sm font-medium mb-3">
                Payment
              </h3>

              <div className="space-y-4">
                <input
                  placeholder="Card number"
                  className="w-full rounded-lg border px-4 py-3 text-sm"
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    placeholder="MM / YY"
                    className="rounded-lg border px-4 py-3 text-sm"
                  />
                  <input
                    placeholder="CVC"
                    className="rounded-lg border px-4 py-3 text-sm"
                  />
                </div>
              </div>
            </div> */}
          </div>

          {/* RIGHT – ORDER SUMMARY */}
          <div className="bg-white rounded-2xl p-6 shadow-md h-fit">
            <h3 className="text-lg font-semibold mb-6">
              Order summary
            </h3>

            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover shadow-md"
                  />

                  <div className="flex-1">
                    <p className="font-medium text-sm">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      Qty {item.qty}
                    </p>
                  </div>

                  <p className="text-sm font-medium">
                    LKR {(item.price * item.qty).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Subtotal</span>
                <span>LKR {subtotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">Shipping</span>
                <span>LKR {shipping.toLocaleString()}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">Tax</span>
                <span>LKR {tax.toLocaleString()}</span>
              </div>

              <div className="border-t pt-3 flex justify-between font-semibold">
                <span>Total</span>
                <span>LKR {total.toLocaleString()}</span>
              </div>
            </div>

            <button
              className="mt-6 w-full rounded-xl bg-emerald-600
              text-white py-4 font-medium hover:bg-emerald-700 transition"
              onClick={confirmOrder}
            >
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
