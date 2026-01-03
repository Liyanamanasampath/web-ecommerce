export default function Button({
    children,
    onClick,
    variant = "primary",
    className = "",
  }: any) {
    const variants: any = {
      primary:
        "bg-slate-900 text-white hover:bg-slate-800",
      secondary:
        "bg-slate-100 text-slate-700 hover:bg-slate-200",
      danger:
        "bg-rose-600 text-white hover:bg-rose-500",
    };
  
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  }
  