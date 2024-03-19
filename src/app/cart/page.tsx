"use client";
import Container from "@/components/ui/container";
import { CartProducts } from "@/components/ui/products/cartProducts";
import { CartColumn, CartContainer, CartItem, CartItemImage, CartItemPrice, CartItemQuantity, CartItemTitle } from "./_components/cart";
import { useCartStore } from "@/store/CartStore";
import { PlusSquareFill, DashSquareFill } from '@styled-icons/bootstrap';
import { theme } from "@/theme";
import { FormError } from "@/components/formError";
import Button from "@/components/ui/button";
import { toast } from "sonner";
import { ExtendedFSProduct } from "@/types/fake-store";
import Modal from "@/components/ui/modal";

const CartPage = () => {
  const [ cart, removeFromCart, addToCart, resetCart ] = useCartStore((state) => [state.cart, state.removeFromCart, state.addToCart, state.resetCart]);

  const handlePayment = (cart: ExtendedFSProduct[]) => {
    if(cart.reduce((total, item) => total + (item.quantity*item.price), 0) != 0){
      toast.success("Paid successfully!");
      resetCart();
    }
  }
    return (
      <Container>
        <Modal>
          <h2>Modal Content</h2>
          <p>This is the content of the modal.</p>
        </Modal>
        <CartContainer>
          <CartColumn style={{minWidth: 500}}>
            <h2>Cart Items</h2>
            {cart.length > 0 ? cart.map((item) => {
              return (
              <CartItem key={item.id}>
                <CartItemImage src={item.image} alt={item.title} />
                <CartItemTitle>{item.title.substring(0, 20)} ...</CartItemTitle>
                <CartItemPrice>$ {item.price}</CartItemPrice>
                <CartItemQuantity>
                  <DashSquareFill onClick={() => removeFromCart(item)} size={30} color={theme.colors.main1} />
                  <span>{item.quantity}</span>
                  <PlusSquareFill onClick={() => addToCart(item)} size={30} color={theme.colors.main1} />
                </CartItemQuantity>
              </CartItem>
              );
            }) : <FormError message="No items in cart." />}

          </CartColumn>
          <CartColumn style={{minWidth: 300, justifyContent: 'space-between'}}>
            <h2>Cart Summary</h2>
            <h3>Total: {cart.reduce((total, item) => total + (item.quantity*item.price), 0).toFixed(2)}</h3>
            <Button color={theme.colors.main1} style={{width: '100%'}} onClick={()=>handlePayment(cart)}>Checkout</Button>
          </CartColumn>
        </CartContainer>
      </Container>
    );
}

export default CartPage;