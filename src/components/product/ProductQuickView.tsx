"use client";

import { useRef, useState } from "react";
import { useCartStore } from "@/src/store/useCartStore";

type Props = {
    onClose: () => void;
};

const product = {
    id: 1,
    name: "Zip Tote Basket",
    price: 1400,
    rating: 4,
    description:
        "The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, shoulder sling, or backpack this convenient and spacious bag.",
    images: [
        "https://images.unsplash.com/photo-1550547660-d9450f859349",
        "https://images.unsplash.com/photo-1604908554027-9d0b89ed5b63",
        "https://images.unsplash.com/photo-1548365328-5b5b2d8b6b91",
        "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
    ],

    features: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Water-resistant canvas",
    ],
    reviews: [
        { user: "Alex", rating: 5, comment: "Amazing quality, feels very premium." },
        { user: "Nuwan", rating: 4, comment: "Good build, perfect for daily use." },
    ],
};

export default function ProductViewModal({ onClose }: Props) {
    const { addItem, openCart } = useCartStore();

    const [activeImage, setActiveImage] = useState(product.images[0]);
    const [qty, setQty] = useState(1);
    const [tab, setTab] = useState<"desc" | "reviews">("desc");

    const detailsRef = useRef<HTMLDivElement | null>(null);

    const goToTab = (target: "desc" | "reviews") => {
        setTab(target);
        detailsRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const addToCart = () => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: activeImage,
        });
        openCart();
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white w-full max-w-7xl max-h-[90vh] rounded-2xl shadow-xl flex flex-col overflow-hidden">
                {/* Header */}
                <div className="h-16 px-6 flex items-center justify-between shrink-0
  bg-white/80 backdrop-blur">
                    <h2 className="text-lg font-semibold text-slate-800">
                        {product.name}
                    </h2>

                    <button
                        onClick={onClose}
                        className="w-9 h-9 rounded-full flex items-center justify-center
            text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition"
                    >
                        ✕
                    </button>
                </div>

                {/* Body (scroll only here) */}
                <div className="flex-1 overflow-y-auto px-6 py-10">
                    {/* TOP */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                        {/* Images */}
                        <div>
                            <div className="bg-slate-50 rounded-2xl p-6 mb-4">
                                <img
                                    src={activeImage}
                                    alt={product.name}
                                    className="w-full object-contain"
                                />
                            </div>

                            <div className="flex gap-3">
                                {product.images.map((img) => (
                                    <button
                                        key={img}
                                        onClick={() => setActiveImage(img)}
                                        className={`rounded-lg border p-2 ${activeImage === img
                                            ? "border-emerald-600"
                                            : "border-slate-200"
                                            }`}
                                    >
                                        <img
                                            src={img}
                                            className="w-20 h-20 object-contain"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Info */}
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900">
                                {product.name}
                            </h1>

                            <p className="text-2xl font-semibold mt-3">
                                LKR {product.price.toLocaleString()}
                            </p>

                            {/* Rating */}
                            <div className="flex gap-1 mt-2 text-lg">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i}>{i < product.rating ? "⭐" : "☆"}</span>
                                ))}
                            </div>

                            <p className="text-slate-600 mt-6 leading-relaxed">
                                {product.description}
                            </p>

                            {/* More links */}
                            <div className="mt-4 flex gap-4 text-sm">
                                <button
                                    onClick={() => goToTab("desc")}
                                    className="text-emerald-600 hover:underline"
                                >
                                    More details
                                </button>

                                <button
                                    onClick={() => goToTab("reviews")}
                                    className="text-slate-500 hover:underline"
                                >
                                    Read reviews ({product.reviews.length})
                                </button>
                            </div>

                            {/* Quantity */}
                            <div className="mt-6 flex items-center gap-4">
                                <span className="font-medium">Quantity</span>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setQty((q) => Math.max(1, q - 1))}
                                        className="w-9 h-9 rounded-full border hover:bg-slate-100"
                                    >
                                        −
                                    </button>

                                    <span className="w-8 text-center font-medium">
                                        {qty}
                                    </span>

                                    <button
                                        onClick={() => setQty((q) => q + 1)}
                                        className="w-9 h-9 rounded-full border hover:bg-slate-100"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Add to cart */}
                            <button
                                onClick={addToCart}
                                className="mt-8 w-full rounded-xl bg-emerald-600
                text-white py-4 text-lg font-medium hover:bg-emerald-700 transition"
                            >
                                Add to Order
                            </button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div ref={detailsRef} className="mt-20">
                        <div className="flex gap-8">
                            <button
                                onClick={() => setTab("desc")}
                                className={`pb-3 font-medium ${tab === "desc"
                                    ? "border-b-2 border-emerald-600 text-emerald-600"
                                    : "text-slate-500"
                                    }`}
                            >
                                Description
                            </button>

                            <button
                                onClick={() => setTab("reviews")}
                                className={`pb-3 font-medium ${tab === "reviews"
                                    ? "border-b-2 border-emerald-600 text-emerald-600"
                                    : "text-slate-500"
                                    }`}
                            >
                                Reviews
                            </button>
                        </div>

                        <div className="mt-8">
                            {tab === "desc" && (
                                <ul className="list-disc pl-6 space-y-3 text-slate-600">
                                    {product.features.map((f) => (
                                        <li key={f}>{f}</li>
                                    ))}
                                </ul>
                            )}

                            {tab === "reviews" && (
                                <div className="space-y-6">
                                    {product.reviews.map((r, i) => (
                                        <div key={i} className="border rounded-xl p-5">
                                            <p className="font-medium">{r.user}</p>
                                            <p className="text-sm text-slate-500">
                                                {"⭐".repeat(r.rating)}
                                            </p>
                                            <p className="mt-2 text-slate-600">
                                                {r.comment}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
