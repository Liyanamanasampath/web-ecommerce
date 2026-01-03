export default function DashboardPage() {
    const stats = [
        { title: "Total Sales", value: "$3,799.00", change: "+34.7%" },
        { title: "Average Order Value", value: "$272.98", change: "-12.0%" },
        { title: "Total Orders", value: "578", change: "+27.9%" },
    ];

    const recentOrders = [
        { no: "#00745", status: "Pending", customer: "Giordano Bruno", date: "2020-11-02", total: "$2,742.00" },
        { no: "#00746", status: "Paid", customer: "John Smith", date: "2020-11-03", total: "$186.00" },
        { no: "#00747", status: "Cancelled", customer: "Alice", date: "2020-11-04", total: "$52.00" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold text-slate-800">Dashboard</h1>

                <div className="flex items-center gap-2">
                    <input
                        type="date"
                        className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
                    />
                    <button className="rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:brightness-95">
                        Export
                    </button>
                </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {stats.map((s) => (
                    <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                        <div className="text-sm text-slate-500">{s.title}</div>
                        <div className="mt-2 text-2xl font-bold text-slate-800">{s.value}</div>
                        <div
                            className={[
                                "mt-2 text-sm font-medium",
                                s.change.startsWith("+") ? "text-emerald-600" : "text-rose-600",
                            ].join(" ")}
                        >
                            {s.change} <span className="text-slate-400 font-normal">vs last period</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Middle row */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                {/* Active users */}
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="text-sm font-semibold text-slate-700">Active users</div>
                    <div className="mt-4 rounded-lg bg-sky-50 p-6 text-center">
                        <div className="text-4xl font-bold text-sky-700">148</div>
                        <div className="mt-1 text-sm text-slate-500">Users online</div>
                    </div>
                    <div className="mt-4 text-xs text-slate-500">
                        Tip: later you can add pages list here.
                    </div>
                </div>

                {/* Income chart placeholder */}
                <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold text-slate-700">Income statistics</div>
                        <button className="text-slate-400 hover:text-slate-600">⋮</button>
                    </div>

                    <div className="mt-4 h-64 rounded-lg border border-dashed border-slate-300 bg-slate-50 flex items-center justify-center text-slate-500">
                        Chart area (later we can add Recharts)
                    </div>
                </div>
            </div>

            {/* Recent orders */}
            <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="px-5 py-4 flex items-center justify-between border-b border-slate-200">
                    <div className="text-sm font-semibold text-slate-700">Recent orders</div>
                    <button className="text-slate-400 hover:text-slate-600">⋮</button>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead className="bg-slate-50 text-slate-600">
                            <tr>
                                <th className="px-5 py-3 text-left font-semibold">No.</th>
                                <th className="px-5 py-3 text-left font-semibold">Status</th>
                                <th className="px-5 py-3 text-left font-semibold">Customer</th>
                                <th className="px-5 py-3 text-left font-semibold">Date</th>
                                <th className="px-5 py-3 text-right font-semibold">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map((o) => (
                                <tr key={o.no} className="border-t border-slate-100">
                                    <td className="px-5 py-3">{o.no}</td>
                                    <td className="px-5 py-3">
                                        <StatusPill status={o.status} />
                                    </td>
                                    <td className="px-5 py-3">{o.customer}</td>
                                    <td className="px-5 py-3 text-slate-500">{o.date}</td>
                                    <td className="px-5 py-3 text-right font-semibold">{o.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function StatusPill({ status }: { status: string }) {
    const base = "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold";
    if (status === "Paid") return <span className={`${base} bg-emerald-100 text-emerald-700`}>Paid</span>;
    if (status === "Cancelled") return <span className={`${base} bg-rose-100 text-rose-700`}>Cancelled</span>;
    return <span className={`${base} bg-amber-100 text-amber-700`}>Pending</span>;
}
