"use server";

import { signOut } from "@/auth";

export const logoutAction = async () => {
    //something to do before fully loggout
    await signOut();
}