"use client";
import * as z from 'zod';
import { useState, useTransition } from 'react';
import { useForm } from "react-hook-form"; 
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductSchema } from '@/schemas';
import { StyledForm, FormGroup, FormLabel, FormInput, FormButton, FormSelector } from '../form';
import { theme } from '@/theme';
import { FormError } from '../../formError';
import { FormSuccess } from '../../formSuccess';
import { loginAction } from '@/actions/loginAction';
import Modal from '../modal';
import { useShopStore } from '@/store/ShopStore';
import { toast } from 'sonner';
import { FSProduct, FSProducts } from '@/types/fake-store';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface UpdateProductFormProps {
    product: FSProduct;
}

export const UpdateProductForm = ({product}: UpdateProductFormProps) => {
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();
    const [ addProduct, products, getProductById ] = useShopStore((state) => [state.addProduct, state.products, state.getProductById]);

    const { handleSubmit, register, formState: {errors}} = useForm<z.infer<typeof ProductSchema>>({
        resolver: zodResolver(ProductSchema),
        defaultValues: {
            title: product?.title,
            price: product?.price,
            description: product?.description,
            category: product?.category,
            image: product?.image,
            rating: {
                rate: product?.rating.rate,
                count: product?.rating.count
            }
        },
    })

    const updateProduct = async () => {
        const res = await axios.put<FSProducts>(`https://fakestoreapi.com/products/${product.id}`,{
            id: '',
            title: '',
            description: '',
            category: '',
            image: '',
            rating: {
                rate: 0,
                count: 0
            }
        
        });
        return res.data;
      }

    const { mutateAsync: addProductFn } = useMutation({
        mutationFn: updateProduct,
    });

    async function handleAddProduct(data: z.infer<typeof ProductSchema>) {
        try {
            const res = await addProduct(data);
            setSuccess('Product added successfully.');
            toast.success('Product added successfully.');
            return res;
        } catch (error) {
            setError('Error adding product.');
            toast.error('Error adding product.');
        }
    }

    const onSubmit = (data: z.infer<typeof ProductSchema>) => {
        console.log(data);
        startTransition(() => {
            addProduct(data);
            toast.success('Product added successfully.');
        });
    }

    return (
        <Modal ButtonText="Edit product" ButtonColor={theme.colors.primary2}>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <FormLabel>Product name</FormLabel>
                    <FormInput disabled={isPending} {...register("title")} placeholder='Tomato' />
                    {errors.title && <p style={{color: theme.colors.warning1}}>{errors.title.message}</p>}
                </FormGroup>
                <FormGroup>
                    <FormLabel>Description</FormLabel>
                    <FormInput disabled={isPending} {...register("description")} placeholder='Fruit' />
                    {errors.description && <p style={{color: theme.colors.warning1}}>{errors.description.message}</p>}
                </FormGroup>
                <FormGroup>
                    <FormLabel>Category</FormLabel>
                    <FormSelector defaultValue="" disabled={isPending} {...register("category")}>
                        <option value="" hidden>Select...</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="men's clothing">Men&apos;s clothing</option>
                        <option value="women's clothing">Women&apos;s clothing</option>
                    </FormSelector>
                    {errors.category && <p style={{color: theme.colors.warning1}}>{errors.category.message}</p>}
                </FormGroup>
                <FormGroup>
                    <FormLabel>Price</FormLabel>
                    <FormInput disabled={isPending} {...register("price")} placeholder='999.99' />
                    {errors.price && <p style={{color: theme.colors.warning1}}>{errors.price.message}</p>}
                </FormGroup>
                <FormGroup>
                    <FormLabel>Image url</FormLabel>
                    <FormInput disabled={isPending} {...register("image")} placeholder='https://ex.com/image.png' />
                    {errors.image && <p style={{color: theme.colors.warning1}}>{errors.image.message}</p>}
                </FormGroup>
                <FormError message={error} />
                <FormSuccess message={success} />
                <FormButton disabled={isPending} type="submit">Update</FormButton>
            </StyledForm>
        </Modal>
    )
}