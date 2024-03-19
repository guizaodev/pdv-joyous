"use server";

import { signOut } from "@/auth";

export const logoutAction = async () => {
    //something to do before fully loggout
    console.log('Logging out...');
    await signOut();
    return { success: 'Logged out!'};
}