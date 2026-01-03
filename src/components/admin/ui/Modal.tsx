"use client";

import { useEffect } from "react";

export default function Modal({
    open,
    onClose,
    title,
    children,
    size = "lg",
}: {
    open: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    size?: "sm" | "md" | "lg" | "xl";
}) {
    useEffect(() => {
        const onEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onEsc);
        document.body.style.overflow = open ? "hidden" : "auto";

        return () => {
            document.removeEventListener("keydown", onEsc);
            document.body.style.overflow = "auto";
        };
    }, [open, onClose]);

    if (!open) return null;

    const sizes = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-2xl",
        xl: "max-w-4xl",
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div
                className={`relative w-full ${sizes[size]} bg-white rounded-2xl shadow-2xl animate-modal`}>
                <div className="flex items-center justify-between px-6 py-4">
                    <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-600 text-xl"
                    >
                        ✕
                    </button>
                </div>


                {/* Content */}
                <div className="px-6 py-6">{children}</div>
            </div>
        </div>
    );
}
