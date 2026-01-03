"use client";

import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();

  const items = [
    {
      id: 1,
      name: "Chicken Fried Rice",
      price: 1250,
      qty: 2,
      image: "https://via.placeholder.com/120x100",
    },
    {
      id: 2,
      name: "Cheese Kottu",
      price: 1400,
      qty: 1,
      image: "https://via.placeholder.com/120x100",
    },
  ];

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);

  const handlePlaceOrder = () => {
    router.push("/checkout"); 
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Items */}
        <div className="md:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 shadow-md rounded-xl p-4">
              <img
                src={item.image}
                className="h-24 w-28 object-cover rounded"
              />

              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-slate-500">
                  LKR {item.price}
                </p>

                <div className="flex items-center gap-3 mt-2">
                  <span className="text-sm">Qty: {item.qty}</span>
                  <button className="text-rose-600 text-sm hover:underline">
                    Remove
                  </button>
                </div>
              </div>

              <div className="font-semibold">
                LKR {item.price * item.qty}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="shadow-xl rounded-xl p-6 h-fit">
          <h2 className="font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>LKR {subtotal}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Service charge</span>
            <span>LKR 0</span>
          </div>

          <div className="flex justify-between font-bold border-t pt-3 mb-6">
            <span>Total</span>
            <span>LKR {subtotal}</span>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full rounded-lg bg-slate-900 text-white py-3 hover:bg-slate-800"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
