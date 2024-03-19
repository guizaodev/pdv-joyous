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
import { FSProducts } from '@/types/fake-store';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const AddProductForm = () => {
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();
    const [ addProduct, products ] = useShopStore((state) => [state.addProduct, state.products]);

    const generateUniqueRandomId = (productsArray: FSProducts) => { let randomId:number; do { randomId = Math.floor(Math.random() * 1000) + 1; } while (productsArray.some(product => product.id === randomId)); return randomId; };

    const { handleSubmit, register, formState: {errors}} = useForm<z.infer<typeof ProductSchema>>({
        resolver: zodResolver(ProductSchema),
        defaultValues: {
            id: generateUniqueRandomId(products),
            title: '',
            price: 0,
            description: '',
            category: '',
            image: '',
            rating: {
                rate: 0,
                count: 0
            }
        },
    })

    const addProducts = async () => {
        const res = await axios.post<FSProducts>('https://fakestoreapi.com/products/',{
            id: generateUniqueRandomId(products),
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
        mutationFn: addProducts,
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
        startTransition(() => {
            addProduct(data);
            toast.success('Product added successfully.');
        });
    }

    return (
        <Modal ButtonText="Add product" ButtonColor={theme.colors.primary1}>
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
                <FormButton disabled={isPending} type="submit">Add</FormButton>
            </StyledForm>
        </Modal>
    )
}