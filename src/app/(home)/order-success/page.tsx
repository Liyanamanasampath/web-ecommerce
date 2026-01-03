"use client";

import { useRouter } from "next/navigation";

export default function OrderSuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center border rounded-2xl p-8">
        {/* Success Icon */}
        <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center">
          <svg
            className="h-8 w-8 text-emerald-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold mb-2">
          Order Placed Successfully
        </h1>

        <p className="text-slate-600 mb-6">
          Thank you for your order. Your food is being prepared and will
          be delivered soon.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => router.push("/orders")}
            className="w-full rounded-lg bg-emerald-600 text-white py-3 hover:bg-emerald-500"
          >
            View My Orders
          </button>

          <button
            onClick={() => router.push("/")}
            className="w-full rounded-lg border py-3 hover:bg-slate-50"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
