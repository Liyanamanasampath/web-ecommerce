"use client";

type Props = {
    onClose: () => void;
};

export default function OrderViewModal({ onClose }: Props) {
    const order = {
        id: "14034056",
        tracking: "515478875554848512",
        status: "It's on the way!",
        items: [
            {
                id: 1,
                name: "Cold Brew Bottle",
                price: 3200,
                qty: 1,
                image: "https://images.unsplash.com/photo-1526401485004-2aa7f3f7d6b3?w=400",
            },
        ],
        shippingAddress: {
            name: "Kristin Watson",
            address: "7363 Cynthia Pass",
            city: "Toronto",
            country: "Canada",
            zip: "ON N3Y 4H8",
        },
        billingAddress: {
            name: "Kristin Watson",
            address: "7363 Cynthia Pass",
            city: "Toronto",
            country: "Canada",
            zip: "ON N3Y 4H8",
        },
        paymentMethod: "Apple Pay •••• 1545",
        shippingMethod: "DHL (Up to 3 working days)",
        subtotal: 3200,
        shipping: 500,
        tax: 300,
    };

    const total = order.subtotal + order.shipping + order.tax;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-xl overflow-hidden flex flex-col">
                {/* Header */}
                <div className="h-16 px-6 flex items-center justify-between border-b">
                    <h2 className="text-lg font-semibold">
                        Order #{order.id}
                    </h2>
                    <button
                        onClick={onClose}
                        className="w-9 h-9 rounded-full hover:bg-slate-100"
                    >
                        ✕
                    </button>
                </div>

                <div className="w-full max-w-3xl bg-white rounded-2xl shadow-sm p-10">
                    {/* HEADER */}
                    <p className="text-sm text-emerald-600 font-medium mb-1">
                        Thank you!
                    </p>

                    <h1 className="text-3xl font-bold mb-2">
                        {order.status}
                    </h1>

                    <p className="text-slate-500 mb-6">
                        Your order #{order.id} has been shipped and will be with you soon.
                    </p>

                    {/* TRACKING */}
                    <div className="mb-8">
                        <p className="text-sm font-medium text-slate-700">
                            Tracking number
                        </p>
                        <p className="text-emerald-600 font-mono">
                            {order.tracking}
                        </p>
                    </div>

                    {/* ITEMS */}
                    <div className="border-t border-b py-6 space-y-6">
                        {order.items.map((item) => (
                            <div key={item.id} className="flex gap-6">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 rounded-lg object-cover shadow-md"
                                />

                                <div className="flex-1">
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-slate-500">
                                        Quantity {item.qty}
                                    </p>
                                </div>

                                <p className="font-medium">
                                    LKR {(item.price * item.qty).toLocaleString()}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* ADDRESSES */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8">
                        <div>
                            <h3 className="text-sm font-semibold mb-2">
                                Shipping address
                            </h3>
                            <p className="text-sm text-slate-600">
                                {order.shippingAddress.name}
                                <br />
                                {order.shippingAddress.address}
                                <br />
                                {order.shippingAddress.city}
                                <br />
                                {order.shippingAddress.country},{" "}
                                {order.shippingAddress.zip}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold mb-2">
                                Billing address
                            </h3>
                            <p className="text-sm text-slate-600">
                                {order.billingAddress.name}
                                <br />
                                {order.billingAddress.address}
                                <br />
                                {order.billingAddress.city}
                                <br />
                                {order.billingAddress.country},{" "}
                                {order.billingAddress.zip}
                            </p>
                        </div>
                    </div>

                    {/* PAYMENT + SHIPPING */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-8">
                        <div>
                            <h3 className="text-sm font-semibold mb-2">
                                Payment method
                            </h3>
                            <p className="text-sm text-slate-600">
                                {order.paymentMethod}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold mb-2">
                                Shipping method
                            </h3>
                            <p className="text-sm text-slate-600">
                                {order.shippingMethod}
                            </p>
                        </div>
                    </div>

                    {/* TOTAL */}
                    <div className="border-t pt-6 space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-slate-500">Subtotal</span>
                            <span>LKR {order.subtotal.toLocaleString()}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-slate-500">Shipping</span>
                            <span>LKR {order.shipping.toLocaleString()}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-slate-500">Tax</span>
                            <span>LKR {order.tax.toLocaleString()}</span>
                        </div>

                        <div className="flex justify-between font-semibold text-lg pt-3">
                            <span>Total</span>
                            <span>LKR {total.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
