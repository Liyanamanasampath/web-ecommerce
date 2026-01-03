"use client";

export default function OrderHistoryPage() {
  const orders = [
    {
      id: "W18391111",
      date: "Jul 6, 2026",
      total: "$160.00",
      status: "Delivered",
      items: [
        {
          name: "Micro Backpack",
          price: "$70.00",
          image: "https://via.placeholder.com/80",
        },
        {
          name: "Nomad Shopping Tote",
          price: "$90.00",
          image: "https://via.placeholder.com/80",
        },
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Order history</h1>
      <p className="text-slate-500 mb-8">
        Check the status of recent orders and view details.
      </p>

      {orders.map((order) => (
        <div key={order.id} className="border rounded-xl mb-8">
          {/* Header */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-50 p-6 text-sm">
            <div>
              <p className="text-slate-500">Order number</p>
              <p className="font-medium">{order.id}</p>
            </div>
            <div>
              <p className="text-slate-500">Date placed</p>
              <p className="font-medium">{order.date}</p>
            </div>
            <div>
              <p className="text-slate-500">Total amount</p>
              <p className="font-medium">{order.total}</p>
            </div>
            <div className="flex gap-2">
              <button className="border px-4 py-2 rounded-md text-sm">
                View Order
              </button>
              <button className="border px-4 py-2 rounded-md text-sm">
                View Invoice
              </button>
            </div>
          </div>

          {/* Items */}
          <div className="divide-y">
            {order.items.map((item, i) => (
              <div key={i} className="flex gap-4 p-6 items-center">
                <img
                  src={item.image}
                  className="h-20 w-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-emerald-600 mt-1">
                    Delivered
                  </p>
                </div>
                <div className="text-sm font-medium">{item.price}</div>
                <button className="text-indigo-600 text-sm hover:underline">
                  Buy again
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
