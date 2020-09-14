import styled from 'styled-components';

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
    padding: 0 10px;

    li {
      height: 50px;
      background: #6078eb;
      border-radius: 5px;

      & + li {
        margin-top: 30px;
      }

      a {
        padding: 5px;
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
      }

      svg {
        color: #fff;
      }
    }
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

export const HomeContent = styled.div``;
