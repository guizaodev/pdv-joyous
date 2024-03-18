'use server';

import * as z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export const registerAction = async(values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if(!validatedFields.success){
        return { error: 'Invalid fields!'};
    }

    const { email, password, name } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 11);

    const existingUser = await getUserByEmail(email);

    if(existingUser){
        return { error: 'User already exists!'};
    }

    await db.user.create({
        data: {
            email,
            password: hashedPassword,
            name
        }
    });

    return { success: 'Registered'};

}