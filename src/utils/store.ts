import { create } from "zustand";
import { ActionTypes, CartType } from "@/types/types";

const INITIAL_STATE = {
  product: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create<CartType & ActionTypes>((get, set) => ({
    products: INITIAL_STATE.product,
    totalItems: INITIAL_STATE.totalItems,
    totalPrice: INITIAL_STATE.totalPrice,
    addToCart(item) {
        
    }
}));
