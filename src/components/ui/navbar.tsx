'use client';
import styled from 'styled-components';
import { theme } from '@/theme';
import Button from './button';
import { LoginButton } from "@/components/auth/loginButton";
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { LogoutButton } from '../auth/logoutButton';
import { Cart } from '@styled-icons/bootstrap';
import Link from 'next/link';
import { useCartStore } from '@/store/CartStore';
import { usePathname } from 'next/navigation';

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

const CartIcon = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: ${theme.colors.main2};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
`;

// Contador da quantidade de produtos no carrinho
const ItemCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

const Navbar = () => {
    const [ cart ] = useCartStore(state => [state.cart]);
    const user = useCurrentUser();
    const pathname = usePathname();
    return (
        <Nav>
            <a href='/'> 
                <Logo src={`/logos/Logo-joyous.svg`} alt="logo"/>
            </a>
            <Pages>
            {user 
                ?
                <>
                    {pathname !== '/cart' &&
                    <Link href="/cart">
                        <CartIcon>
                            <ItemCount>{cart.reduce((total, product) => total + product.quantity, 0)}</ItemCount>
                            <Cart size={25} />
                        </CartIcon>
                    </Link>}
                    <LogoutButton>
                        <Button color='#0561FF'>Logout</Button>
                    </LogoutButton>
                </>
                :
                <LoginButton>
                    <Button color='#0561FF'>Login</Button>
                </LoginButton>}
            </Pages>
        </Nav>
    );
}

export default Navbar;