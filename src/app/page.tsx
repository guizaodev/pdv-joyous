"use client"
import Button from "@/components/ui/button";
import { LoginButton } from "@/components/auth/loginButton";
import Container from "@/components/ui/container";
import Image from "next/image";
import styled from "styled-components";
import { theme } from "@/theme";

const Banner = styled.img`
  max-width: 100%;
  height: 100%;
`;

export default function Home() {
  return (
    <Container>
      <div style={{backgroundColor: theme.colors.main1, width: '100vw', justifyContent: 'center', display: 'flex'}}>
        <Banner src="/images/banner.png" alt="logo" />
      </div>
    
    </Container>
  );
}
