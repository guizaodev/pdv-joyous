'use client';
import styled from 'styled-components';
import { theme } from '@/theme';
import Button from './button';
import { LoginButton } from "@/components/auth/loginButton";
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { LogoutButton } from '../auth/logoutButton';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: ${theme.colors.main1};
    color: ${theme.colors.white1};
    font-family: ${theme.fonts.body};
    height: 78px;
    flex-direction: row;
    `;

const Pages = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 10vw;
    gap: 1rem;
    a {
        color: ${theme.colors.white1};
        text-decoration: none;
    }
    `;

const Logo = styled.img`
    width: 170px;
    margin-left: 10vw;
    `;

const Navbar = () => {

    const user = useCurrentUser();
    return (
        <Nav>
            <a href='/'> 
                <Logo src={`/logos/Logo-joyous.svg`} alt="logo"/>
            </a>
            <Pages>
                <LoginButton>
                    { user ? <LogoutButton>Logout</LogoutButton> : <Button color='#0561FF'>Login</Button>}
                </LoginButton>
            </Pages>
        </Nav>
    );
}

export default Navbar;