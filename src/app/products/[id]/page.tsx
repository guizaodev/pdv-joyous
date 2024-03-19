"use client"
import Container from "@/components/ui/container";
import { ProductCategory, ProductColumn, ProductContainer, ProductDescription, ProductImage, ProductInfo, ProductPrice, ProductTitle } from "./_components/product";
import axios from "axios";
import { FSProduct } from "@/types/fake-store";
import { useQuery } from "@tanstack/react-query";
import { Rating } from '@smastrom/react-rating'
import Button from "@/components/ui/button";
import { useCartStore } from "@/store/CartStore";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { toast } from "sonner";

const ProductPage = ({ params}: { params: {id: string}}) => {
    const user = useCurrentUser();
    const [addToCart, cart] = useCartStore((state) => [state.addToCart, state.cart]);

    const getProduct = async () => {
        const res = await axios.get<FSProduct>(`https://fakestoreapi.com/products/${params.id}`);
        return res.data;
      }

    const { data: product} = useQuery({
        queryKey: ['product'],
        queryFn: getProduct,
    })

    const handleAddToCart = async(prod: FSProduct) => {
        await addToCart(prod);
        toast.success("Product added to cart.");
    };

    return (
        <Container>
            {
                product && (
                    <>
                    <ProductContainer>
                        <ProductColumn>

                            <ProductImage src={product.image} />
                        </ProductColumn>
                        <ProductColumn>

                            <ProductInfo>
                                <ProductTitle>{product.title}</ProductTitle>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <Rating style={{height: 20, width: 100}} value={product.rating.rate} readOnly />
                                    <ProductCategory> {product.rating.rate} ({product.rating.count} votes)</ProductCategory>
                                </div>
                                <ProductCategory>Category: {product.category}</ProductCategory>
                                <ProductDescription>{product.description}</ProductDescription>
                                <ProductPrice>$ {product.price}</ProductPrice>
                                <Button onClick={()=>user? handleAddToCart(product) : toast.error("User must be logged.")}>Add to Cart</Button>
                            </ProductInfo>
                        </ProductColumn>
                    </ProductContainer>
                    </>
                )
            }

        </Container>
    )
}

export default ProductPage;