"use client";
import * as z from 'zod';
import { useForm } from "react-hook-form"; 
import { zodResolver } from "@hookform/resolvers/zod";
import { CardWrapper } from "./cardWrapper"
import { LoginSchema } from '@/schemas';
import { StyledForm, FormGroup, FormLabel, FormInput, FormButton } from '../ui/form';

export const LoginForm = () => {

    const { handleSubmit, register} = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit = (data: z.infer<typeof LoginSchema>) => {
        console.log("data");
        console.log(data);
    }

    return (
        <CardWrapper
            headerLabel="Welcome to the Auth Page!"
            backButtonLabel="You don't have an account? Back to Home"
            backButtonHref="/"
        >
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormInput {...register("email")} placeholder='john.doe@example.com' id='email' />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormInput {...register("password")} placeholder='********' type='password' id="password"/>
                </FormGroup>
                <FormButton type="submit">Login</FormButton>
            </StyledForm>
        </CardWrapper>
    )
}