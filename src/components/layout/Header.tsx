export default function Header() {
    return (
        <header className="sticky top-0 z-20 bg-white border-b border-slate-200">
            <div className="h-16 px-4 md:px-6 flex items-center justify-between gap-3">
                <div className="flex-1 max-w-2xl">
                    <input
                        placeholder="Search..."
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-sm text-slate-600">Admin</span>
                    <div className="h-9 w-9 rounded-full bg-slate-200" />
                </div>
            </div>
        </header>
    );
}
