import StyledComponentsRegistry from "@/app/registry";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import ReactQueryProvider from "./react-query";

interface PrimeProviderProps {
    children: React.ReactNode;
}

const PrimeProvider = async({ children }: PrimeProviderProps) => {
    const session = await auth();
    return (
        <>
        <ReactQueryProvider >
            <SessionProvider session={session}>
                <StyledComponentsRegistry>
                {children}
                </StyledComponentsRegistry>
            </SessionProvider>
        </ReactQueryProvider>
        </>
    );
}

export default PrimeProvider;