"use client";
import { logoutAction } from "@/actions/logoutAction";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const SettingsPage = () => {
    const user = useCurrentUser();

    const onClick = () => {
        logoutAction();
    }
    
    return (
        <div>
           <form >
                <button onClick={onClick} type="submit">
                    Sign Out
                </button>
           </form>
        </div>
    );
}

export default SettingsPage;