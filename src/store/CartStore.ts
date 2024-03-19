import { ExtendedFSProduct, FSProduct } from '@/types/fake-store';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartStore = {
    cart: ExtendedFSProduct[];
    addToCart: (item: FSProduct) => void;
    removeFromCart: (item: FSProduct) => void;
    resetCart: () => void;
}

export const useCartStore = create(
    persist<CartStore>(
        (set) => ({
            cart: [],
            // addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
            addToCart: (item) => {
                set((state) => {
                    const existingItemIndex = state.cart.findIndex(cartItem => cartItem.id === item.id);
                    if (existingItemIndex !== -1) {
                        const updatedCart = [...state.cart];
                        updatedCart[existingItemIndex].quantity += 1;
                        return { cart: updatedCart };
                    } else {
                        return { cart: [...state.cart, { ...item, quantity: 1 }] };
                    }
                });
            },
            // removeFromCart: (item) => set((state) => ({ cart: state.cart.filter((i) => i !== item) })),
            removeFromCart: (item) => {
                set((state) => {
                    const existingItemIndex = state.cart.findIndex(cartItem => cartItem.id === item.id);
                    if (existingItemIndex !== -1) {
                        const updatedCart = [...state.cart];
                        updatedCart[existingItemIndex].quantity -= 1;
                        if (updatedCart[existingItemIndex].quantity === 0) {
                            updatedCart.splice(existingItemIndex, 1);
                        }
                        return { cart: updatedCart };
                    }
                    return state; // Se o item não existir no carrinho, retorna o estado atual sem modificação
                });
            },
            resetCart: () => set({ cart: [] }),
        }),
        {
            name: "cart-store",
        }
        )
);