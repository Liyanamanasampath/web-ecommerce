import { create } from "zustand";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
};

type AddItemPayload = {
  id: number;
  name: string;
  price: number;
  image: string;
  qty?: number;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;

  addItem: (item: AddItemPayload) => void;
  removeItem: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;

  openCart: () => void;
  closeCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  isOpen: false,

  addItem: (item) =>
    set((state) => {
      const qtyToAdd = item.qty ?? 1;
      const existing = state.items.find((i) => i.id === item.id);

      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === item.id
              ? { ...i, qty: i.qty + qtyToAdd }
              : i
          ),
        };
      }

      return {
        items: [
          ...state.items,
          {
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            qty: qtyToAdd,
          },
        ],
      };
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),

  increaseQty: (id) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, qty: i.qty + 1 } : i
      ),
    })),

  decreaseQty: (id) =>
    set((state) => ({
      items: state.items
        .map((i) =>
          i.id === id ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0),
    })),

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
}));
