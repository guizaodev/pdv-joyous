"use client";

import { RoleGate } from "@/components/auth/roleGate";
import { useCurrentRole } from "@/hooks/useCurrentRole";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";

const AdminPage = () => {
    const role = useCurrentRole();
    const onApiRouteClick = () => {
        fetch('/api/admin')
            .then(response => {
                if(response.ok) {
                    toast.success('Successo');
                }
                if(response.status === 403) {
                    toast.error('Forbidden');
                }
            
            })
    }

    return (
        <div>
            <h1>Role: {role}</h1>
            <RoleGate allowedRole={UserRole.ADMIN}>
                <button onClick={onApiRouteClick}>
                    <h2>Isso você não vê</h2>
                </button>
            </RoleGate>
            <h2>Isso você vê</h2>
        </div>
    )
}

export default AdminPage;