import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiLogOut, FiSearch, FiSettings } from 'react-icons/fi';
import { Navbar, NavbarContent, Navitem } from './styles';
import logoImg from '../../assets/logo.png';

const Sidenav: React.FC = () => (
  <Navbar>
    <NavbarContent>
      <img src={logoImg} alt="Achaki Logo" />

      <ul>
        <Navitem active={window.location.pathname.includes('/dashboard')}>
          <Link to="/dashboard">
            <FiHome size={25} />
          </Link>
        </Navitem>
        <Navitem active={window.location.pathname.includes('/search')}>
          <Link to="/search">
            <FiSearch size={25} />
          </Link>
        </Navitem>
        <Navitem>
          <a href="#">
            <FiSettings size={25} />
          </a>
        </Navitem>
      </ul>

      <a href="#">
        <FiLogOut />
      </a>
    </NavbarContent>
  </Navbar>
);

export default Sidenav;
