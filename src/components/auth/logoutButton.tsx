"use client";

import { logoutAction } from "@/actions/logoutAction";
import Button from "../ui/button";

interface LogoutButtonProps {
    children?: React.ReactNode;
};

export const LogoutButton = ({
    children
}:LogoutButtonProps) => {
    const onClick = () => {
        logoutAction();
    }

    return(
        <button color="#0561FF" onClick={onClick}>
            { children }
        </button>
    )
}

    
