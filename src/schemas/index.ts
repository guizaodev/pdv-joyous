import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1,{
        message: "Password is required"
    }),
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(6,{
        message: "Minimum 6 characters required"
    }),
    name: z.string().min(1,{
        message: "Name is required"
    }),
});

export const ProductSchema = z.object({
    id: z.coerce.number().int().min(1, {
        message: "Id is required"
    }),
    title: z.string().min(1,{
        message: "Title is required"
    }),
    price: z.coerce.number().min(1,{
        message: "Price is required"
    }),
    description: z.string().min(1,{
        message: "Description is required"
    }),
    category: z.string().min(1,{
        message: "Category is required"
    }),
    image: z.string().url("Image must have a valid url").min(1,{
        message: "Image is required"
    }),
    rating: z.object({
        rate: z.number(),
        count: z.number()
    })
});