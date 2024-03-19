import { FSProduct, FSProducts } from '@/types/fake-store';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type ShopStore = {
    products: FSProducts;
    updateProducts: (products: FSProducts) => void;
    getProductById: (id: number) => FSProduct | undefined;
    addProduct: (item: FSProduct) => void;
    removeProduct: (item: number) => void;
    editProduct: (productId: number, newData: Partial<FSProduct>) => void;
}

export const useShopStore = create(
    persist<ShopStore>(
        (set, get) => ({
            products: [],
            updateProducts: (products) => set({ products }),
            getProductById: (id) => get().products.find((product) => product.id === id),
            addProduct: (newProduct) =>
            set((state) => ({
              products: [...state.products, newProduct],
            })),
            removeProduct: (productId) =>
            set((state) => ({
              products: state.products.filter((product) => product.id !== productId),
            })),
            editProduct:(productId, newData) =>
                set((state) => ({
                products: state.products.map((product) =>
                    product.id === productId ? { ...product, ...newData } : product
                ),
                })),
        }),
        {
            name: "shop-store",
            storage: createJSONStorage(() => localStorage)
        }
        )
);