import Container from "@/components/ui/container";

const AuthLayout = ({ children }: {children: React.ReactNode}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default AuthLayout;