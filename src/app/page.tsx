"use client"
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import styled from "styled-components";
import { theme } from "@/theme";
import { ProductSession, ProductSessionTitle, ProductsContainer, ProductCard, ProductImage, ProductTitle, ProductPrice } from "@/components/ui/products/productSession";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FSCategories, FSProduct, FSProducts } from "@/types/fake-store";
import Link from "next/link";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { toast } from "sonner";
import { useCartStore } from "@/store/CartStore";
import { useShopStore } from "@/store/shopStore";

const Banner = styled.img`
  max-width: 100%;
  height: 100%;
`;

export default function Home() {
  const user = useCurrentUser();
  const [addToCart, cart] = useCartStore((state) => [state.addToCart, state.cart]);
  const [ updateProducts, products, addProduct ] = useShopStore((state) => [state.updateProducts, state.products, state.addProduct]);

  const getCategories = async () => {
    const res = await axios.get<FSCategories>('https://fakestoreapi.com/products/categories/');
    return res.data;
  }

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  const getProducts = async () => {
    const res = await axios.get<FSProducts>('https://fakestoreapi.com/products/');

    if(products.length === 0){
      console.log(products);
      updateProducts(res.data);
    }
    return res.data;
  }

  const { data: productsLive } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  const handleAddToCart = async(prod: FSProduct) => {
    await addToCart(prod);
    toast.success("Product added to cart.");
};

  return (
    <Container>
      <div style={{backgroundColor: theme.colors.main1, width: '100vw', justifyContent: 'center', display: 'flex'}}>
        <Banner src="/images/banner.png" alt="logo" />
      </div>

      {
        categories && categories.map((category)=>{
          return (
            <ProductSession key={category}>
              <ProductSessionTitle key={category}>{category.replace(/^\w/, (c: string) => c.toUpperCase())}</ProductSessionTitle>
              <ProductsContainer>
                {products && products.map((product)=>{
                  if(product.category === category){
                    return (
                      <ProductCard  key={product.id} >
                          <Link href={`/products/${product.id}`} style={{textAlign: 'center'}} key={product.id}>
                            <ProductImage src={product.image} alt="product" width={300} height={300} />
                            <ProductTitle>{product.title.substring(0, 12)}</ProductTitle>
                            <ProductPrice>$ {product.price}</ProductPrice>
                          </Link>
                          <Button onClick={()=>user? handleAddToCart(product) : toast.error("User must be logged.") }>Add to Cart</Button>
                        </ProductCard>
                    )
                  }
                })}
              </ProductsContainer>
            </ProductSession>
          )
        })
      }

    </Container>
  );
}
