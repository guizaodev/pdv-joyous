import { useCartStore } from "@/store/CartStore";

export const CartProducts = () => {
    const [ cart ] = useCartStore((state) => [state.cart]);

    return (
        <div>
            <h1 onClick={()=>console.log(cart)}>Cart Products</h1>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}