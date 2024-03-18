'use client';

import Card from "../ui/card";
import { Footer } from "./footer";
import { Header } from "./header";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocials?: boolean;
}

export const CardWrapper = ({children, headerLabel, backButtonLabel, backButtonHref, showSocials}:CardWrapperProps) => {
    return(
        <Card>
            <Header label={headerLabel} />
            { children }
            <Footer label={backButtonLabel} href={backButtonHref} />
        </Card>
    )
}