import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface NavitemProps {
  active?: boolean;
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Navbar = styled.nav`
  background: #cadfff;

  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;
  max-width: 80px;
`;

export const NavbarContent = styled.div`
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    margin-bottom: 80px;
  }

  ul {
    list-style: none;
    flex: 1;
    margin-bottom: auto;
    width: 100%;
  }

  a {
    padding: 5px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    color: #6078eb;
  }
`;

export const Navitem = styled.li<NavitemProps>`
  height: 50px;
  transition: background-color 0.2s;

  & + li {
    margin-top: 30px;
  }

  &:hover {
    background: ${shade(0.05, '#cadfff')};
  }

  ${props =>
    props.active &&
    css`
      background: #6078eb;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

      &:hover {
        background: #6078eb;
      }
    `}

  a {
    padding: 5px;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  svg {
    color: #6078eb;

    ${props =>
      props.active &&
      css`
        color: #fff;
      `}
  }
`;
