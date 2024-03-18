"use client";
import * as z from 'zod';
import { useState, useTransition } from 'react';
import { useForm } from "react-hook-form"; 
import { zodResolver } from "@hookform/resolvers/zod";
import { CardWrapper } from "./cardWrapper"
import { LoginSchema } from '@/schemas';
import { StyledForm, FormGroup, FormLabel, FormInput, FormButton } from '../ui/form';
import { theme } from '@/theme';
import { FormError } from '../formError';
import { FormSuccess } from '../formSuccess';
import { loginAction } from '@/actions/loginAction';

export const LoginForm = () => {
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();

    const { handleSubmit, register, formState: {errors}} = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit = (data: z.infer<typeof LoginSchema>) => {
        setError('');
        setSuccess('');

        startTransition(() => {
            loginAction(data)
                .then((res) => {
                    if(res){
                        setError(res.error);
                        setSuccess(res.success);
                    }
                })
        });
    }

    return (
        <CardWrapper
            headerLabel="Welcome to the Auth Page!"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
        >
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormInput disabled={isPending} {...register("email")} placeholder='john.doe@example.com' />
                    {errors.email && <p style={{color: theme.colors.warning1}}>{errors.email.message}</p>}
                </FormGroup>
                <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <FormInput disabled={isPending} {...register("password")} placeholder='********' type='password' />
                    {errors.password && <p style={{color: theme.colors.warning1}}>{errors.password.message}</p>}
                </FormGroup>
                <FormError message={error} />
                <FormSuccess message={success} />
                <FormButton disabled={isPending} type="submit">Login</FormButton>
            </StyledForm>
        </CardWrapper>
    )
}