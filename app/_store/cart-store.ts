import type { Product } from "@prisma/client";
import { create } from "zustand";

export interface ICartItem extends Product {
  quantity: number;
}
interface updateItem {
  quantity: number;
  id: string;
}
interface CartState {
  items: ICartItem[] | [];
  addItem: (item: ICartItem) => void;
  removeItem: (id: string) => void;
  updateItem: ({ id, quantity }: updateItem) => void;
}
export const cartStore = create<CartState>((set, get) => ({
  items: [],
  addItem: (newItem) => {
    let exist = false;
    get().items.map((item) => {
      if (newItem.restaurantId === item.restaurantId) {
        exist = true;
      }
    });

    switch (exist === false) {
      case true:
        if (get().items.length === 0) {
          set((state) => ({ items: [...state.items, newItem] }));

          console.log("Item adicionado");
          break;
        }
        console.log("Você não pode adicionar um item de outro restaurante");
        break;
      case false:
        set((state) => ({ items: [...state.items, newItem] }));
        console.log("Item adicionado");
        break;
    }
  },
  removeItem: (id) => {
    const filtered = get().items.filter((item) => item.id !== id);
    set({ items: filtered });
  },
  updateItem: ({ id, quantity }) => {
    const updatedItems = get().items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: quantity,
        };
      }

      return item;
    });
    set({ items: updatedItems });
  },
}));
