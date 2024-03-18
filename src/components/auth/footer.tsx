import { Poppins } from "next/font/google";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });

interface FooterProps {
    label: string;
    href: string;
}

export const Footer = ({label, href}:FooterProps) => {
    return (
        <div>
            <a href={href}>{label}</a>
        </div>
    );
};