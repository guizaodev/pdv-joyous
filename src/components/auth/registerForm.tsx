"use client";
import * as z from 'zod';
import { useState, useTransition } from 'react';
import { useForm } from "react-hook-form"; 
import { zodResolver } from "@hookform/resolvers/zod";
import { CardWrapper } from "./cardWrapper"
import { RegisterSchema } from '@/schemas';
import { StyledForm, FormGroup, FormLabel, FormInput, FormButton } from '../ui/form';
import { theme } from '@/theme';
import { FormError } from '../formError';
import { FormSuccess } from '../formSuccess';
import { registerAction } from '@/actions/registerAction';

export const RegisterForm = () => {
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();

    const { handleSubmit, register, formState: {errors}} = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: '',
            password: '',
            name: '',
        },
    })

    const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
        setError('');
        setSuccess('');

        startTransition(() => {
            registerAction(data)
                .then((res) => {
                    setError(res.error);
                    setSuccess(res.success);
                })
        });
    }

    return (
        <CardWrapper
            headerLabel="Create an account"
            backButtonLabel="Already have an account?"
            backButtonHref="/auth/login"
        >
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <FormLabel>Name</FormLabel>
                    <FormInput disabled={isPending} {...register("name")} placeholder='John Doe' />
                    {errors.name && <p style={{color: theme.colors.warning1}}>{errors.name.message}</p>}
                </FormGroup>
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
                <FormButton disabled={isPending} type="submit">Register</FormButton>
            </StyledForm>
        </CardWrapper>
    )
}