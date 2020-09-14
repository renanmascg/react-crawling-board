import React from 'react';
import { FiHome, FiLogOut, FiSearch, FiSettings } from 'react-icons/fi';
import { Navbar, NavbarContent } from './styles';
import logoImg from '../../assets/logo.png';

const Sidenav: React.FC = () => (
  <Navbar>
    <NavbarContent>
      <img src={logoImg} alt="Achaki Logo" />

      <ul>
        <li>
          <a href="#">
            <FiHome size={25} />
          </a>
        </li>
        <li>
          <a href="#">
            <FiSearch size={25} />
          </a>
        </li>
        <li>
          <a href="#">
            <FiSettings size={25} />
          </a>
        </li>
      </ul>

      <a href="#">
        <FiLogOut />
      </a>
    </NavbarContent>
  </Navbar>
);

export default Sidenav;
