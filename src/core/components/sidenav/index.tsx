import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiLogOut, FiSearch, FiSettings } from 'react-icons/fi';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { Navbar, NavbarContent, Navitem } from './styles';
import logoImg from '../../../assets/logo.png';
import { useAuth } from '../../hooks/AuthContext';

const Sidenav: React.FC = () => {
  const { signOut } = useAuth();

  return (
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
          <Navitem active={window.location.pathname.includes('/results')}>
            <Link to="/results">
              <AiOutlineFileSearch size={25} />
            </Link>
          </Navitem>
          <Navitem active={window.location.pathname.includes('/settings')}>
            <Link to="/settings">
              <FiSettings size={25} />
            </Link>
          </Navitem>
        </ul>

        <button type="button" onClick={signOut}>
          <FiLogOut />
        </button>
      </NavbarContent>
    </Navbar>
  );
};

export default Sidenav;
