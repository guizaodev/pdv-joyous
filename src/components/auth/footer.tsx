import { theme } from "@/theme";
import { Poppins } from "next/font/google";
import styled from "styled-components";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });

interface FooterProps {
    label: string;
    href: string;
}

const Link = styled.a`
    color: ${theme.colors.primary1};
    font-size: 14px;

    &:hover {
        text-decoration: underline;
    }
`;

export const Footer = ({label, href}:FooterProps) => {
    return (
        <div>
            <Link href={href}>{label}</Link>
        </div>
    );
};