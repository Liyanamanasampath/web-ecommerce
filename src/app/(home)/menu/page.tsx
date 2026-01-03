import ProductItem from "@/src/components/product/ProductItem";

export default function MenuPage() {
    const products = [
        {
            id: 1,
            name: "Chicken Fried Rice",
            price: 1250,
            image:  "https://images.unsplash.com/photo-1550547660-d9450f859349",
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
            price:  1500,
            image: null,
            category: "Noodles",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold mb-8">Our Menu</h1>

            {/* Category filter (UI only for now) */}
            <div className="flex gap-3 mb-8">
                {["All", "Rice", "Kottu", "Fast Food", "Noodles"].map((c) => (
                    <button
                        key={c}
                        className="rounded-full border px-4 py-2 text-sm hover:bg-slate-100"
                    >
                        {c}
                    </button>
                ))}
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((dish) => (
                    <ProductItem
                        key={dish.id}
                        id={dish.id}
                        name={dish.name}
                        price={dish.price}
                        image={dish.image}
                    />
                ))}
            </div>
        </div>
    );
}
