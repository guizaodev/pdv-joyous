"use client";

import { useCurrentRole } from "@/hooks/useCurrentRole";
import { UserRole } from "@prisma/client";

interface RoleGateProps {
    children: React.ReactNode;
    allowedRole: UserRole;
}

export const RoleGate = ({
    children,
    allowedRole
}: RoleGateProps) => {
    const role = useCurrentRole();

    if(role !== allowedRole) return null;

    return (
        <>
            {children}
        </>
    )
};