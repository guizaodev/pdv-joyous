import { FSProduct, FSProducts } from '@/types/fake-store';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ShopStore = {
    products: FSProducts;
    updateProducts: (products: FSProducts) => void;
    addProduct: (item: FSProduct) => void;
    removeProduct: (item: number) => void;
    editProduct: (productId: number, newData: Partial<FSProduct>) => void;
}

export const useShopStore = create(
    persist<ShopStore>(
        (set) => ({
            products: [],
            updateProducts: (products) => set({ products }),
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
        }
        )
);