import Button from "@/components/ui/button";
import { LoginButton } from "@/components/auth/loginButton";
import Container from "@/components/ui/container";

export default function Home() {
  return (
    <Container>

      <LoginButton>
        <Button>Login</Button>
      </LoginButton>
    
    </Container>
  );
}
