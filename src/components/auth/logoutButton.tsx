"use client";

import { logoutAction } from "@/actions/logoutAction";
import { useCartStore } from "@/store/CartStore";

interface LogoutButtonProps {
    children?: React.ReactNode;
};

export const LogoutButton = ({
    children
}:LogoutButtonProps) => {
    const [resetCart] = useCartStore((state) => [state.resetCart]);
    const onClick = () => {
        resetCart(); 
        logoutAction();
    }

    return(
        <span onClick={onClick}>
            {children}
        </span>
    )
}

    
