import { Poppins } from "next/font/google";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });

interface HeaderProps {
    label: string;
}

export const Header = ({label}:HeaderProps) => {
    return (
        <div>
            <h1>Auth</h1>
            <div>{label}</div>
        </div>
    );
};