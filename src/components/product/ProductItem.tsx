"use client";

import { useState } from "react";
import { useCartStore } from "@/src/store/useCartStore";
import ProductQuickView from "./ProductQuickView";
import { PhotoIcon } from "@heroicons/react/24/outline";

export type ProductItemProps = {
  id: number;
  name: string;
  price: number;
  image?: string | null;
  category?: string;
};

export default function ProductItem({
  id,
  name,
  price,
  image,
  category,
}: ProductItemProps) {
  const { addItem, openCart } = useCartStore();
  const [open, setOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();

    addItem({
      id,
      name,
      price,
      image: image || "",
    });

    openCart();
  };

  const showPlaceholder = !image || imgError;

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setOpen(true)}
        className="rounded-xl shadow-xl  bg-white overflow-hidden transition cursor-pointer"
      >
        {/* Image / Placeholder */}
        <div className="h-48 w-full bg-slate-100 flex items-center justify-center">
          {showPlaceholder ? (
            <div className="flex flex-col items-center text-slate-400">
              <PhotoIcon className="w-10 h-10 mb-1" />
              <span className="text-xs">No image</span>
            </div>
          ) : (
            <img
              src={image}
              alt={name}
              onError={() => setImgError(true)}
              className="h-full w-full object-cover"
            />
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-medium text-slate-800 mb-1">
            {name}
          </h3>

          {category && (
            <p className="text-xs text-slate-500 mb-1">
              {category}
            </p>
          )}

          <p className="text-slate-600 text-sm mb-4">
            LKR {price.toLocaleString()}
          </p>

          {/* Add to cart */}
          <button
            onClick={handleAddToCart}
            className="w-full rounded-lg bg-emerald-600
            text-white py-2 text-sm font-medium
            hover:bg-emerald-700 transition"
          >
            Add to Order
          </button>
        </div>
      </div>

      {/* Product View Modal */}
      {open && (
        <ProductQuickView
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
