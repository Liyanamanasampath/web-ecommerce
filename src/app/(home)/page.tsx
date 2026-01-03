"use client";

import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "@/src/store/useCartStore";
import ProductItem from "@/src/components/product/ProductItem";


export default function HomePage() {
    const { addItem } = useCartStore();
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState<any[]>([]);

    const dishes = [
        {
            id: 1,
            name: "Chicken Fried Rice",
            price: 1250,
            image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
            category: "Rice",
        },
        {
            id: 2,
            name: "Cheese Kottu",
            price: 1400,
            image: null,
            category: "Kottu",
        },
        {
            id: 3,
            name: "Chicken Burger",
            price: 100,
            image: null,
            category: "Fast Food",
        },
        {
            id: 4,
            name: "Seafood Noodles",
            price: 1500,
            image: null,
            category: "Noodles",
        },
    ];

    const addToCart = (dish: any) => {
        setCartItems((prev) => [...prev, dish]);
        setCartOpen(true);
    };

    const total = cartItems.reduce((s, i) => s + i.price, 0);

    return (
        <>
            {/* HERO */}
            <section className="bg-emerald-700 text-white">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Freshly Cooked Meals,
                        <br /> Delivered With Care
                    </h1>

                    <p className="text-emerald-100 max-w-2xl mb-8">
                        Enjoy authentic flavors made from fresh ingredients.
                        Order online, dine-in, or reserve your table effortlessly.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/menu"
                            className="rounded-lg bg-white text-emerald-700 px-6 py-3 font-semibold hover:bg-emerald-50"
                        >
                            View Menu
                        </Link>

                        <Link
                            href="/reserve"
                            className="rounded-lg border border-white/40 px-6 py-3 hover:bg-white/10"
                        >
                            Reserve a Table
                        </Link>
                    </div>
                </div>
            </section>

            {/* POPULAR DISHES */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-2xl font-semibold text-slate-800">
                            Popular Dishes
                        </h2>

                        <Link
                            href="/menu"
                            className="text-sm text-emerald-700 hover:underline"
                        >
                            View full menu
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {dishes.map((dish) => (
                            <ProductItem
                                key={dish.id}
                                id={dish.id}
                                name={dish.name}
                                price={dish.price}
                                image={dish?.image}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY US */}
            <section className="bg-emerald-50 py-20">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[
                        {
                            title: "Fresh Ingredients",
                            desc: "Only high-quality, fresh ingredients in every dish.",
                        },
                        {
                            title: "Quick Preparation",
                            desc: "Fast service without compromising on taste.",
                        },
                        {
                            title: "Easy Ordering",
                            desc: "Order, dine-in, or reserve with just a few clicks.",
                        },
                    ].map((f) => (
                        <div
                            key={f.title}
                            className="p-6 rounded-xl bg-white shadow-sm"
                        >
                            <h3 className="font-semibold text-lg mb-2 text-slate-800">
                                {f.title}
                            </h3>
                            <p className="text-slate-600 text-sm">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
