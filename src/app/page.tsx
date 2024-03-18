"use client"
import Button from "@/components/ui/button";
import { LoginButton } from "@/components/auth/loginButton";
import Container from "@/components/ui/container";
import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/theme";
import { ProductSession, ProductSessionTitle, ProductsContainer, ProductCard, ProductImage, ProductTitle, ProductPrice } from "@/components/ui/products/productSession";

const Banner = styled.img`
  max-width: 100%;
  height: 100%;
`;

export default function Home() {
  return (
    <Container>
      <div style={{backgroundColor: theme.colors.main1, width: '100vw', justifyContent: 'center', display: 'flex'}}>
        <Banner src="/images/banner.png" alt="logo" />
      </div>
      <ProductSession>
        <ProductSessionTitle>Joias</ProductSessionTitle>
        <ProductsContainer>
          <ProductCard>
            <ProductImage src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="product" width={300} height={300} />
            <ProductTitle>Fjallraven</ProductTitle>
            <ProductPrice>$ 109.95</ProductPrice>
            <Button>Order now</Button>
          </ProductCard>
          <ProductCard>
            <ProductImage src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="product" width={300} height={300} />
            <ProductTitle>Product 1</ProductTitle>
            <ProductPrice>Product description</ProductPrice>
            <Button>Buy</Button>
          </ProductCard>
          <ProductCard>
            <ProductImage src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="product" width={300} height={300} />
            <ProductTitle>Product 1</ProductTitle>
            <ProductPrice>Product description</ProductPrice>
            <Button>Buy</Button>
          </ProductCard>

        </ProductsContainer>
      </ProductSession>

      <ProductSession>
        <ProductSessionTitle>Roupas</ProductSessionTitle>
        <ProductsContainer>
          <ProductCard>
            <ProductImage src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="product" width={300} height={300} />
            <ProductTitle>Fjallraven</ProductTitle>
            <ProductPrice>$ 109.95</ProductPrice>
            <Button>Order now</Button>
          </ProductCard>
          <ProductCard>
            <ProductImage src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="product" width={300} height={300} />
            <ProductTitle>Product 1</ProductTitle>
            <ProductPrice>Product description</ProductPrice>
            <Button>Buy</Button>
          </ProductCard>
          <ProductCard>
            <ProductImage src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="product" width={300} height={300} />
            <ProductTitle>Product 1</ProductTitle>
            <ProductPrice>Product</ProductPrice>
            <Button>Buy</Button>
          </ProductCard>

        </ProductsContainer>
      </ProductSession>
    </Container>
  );
}
