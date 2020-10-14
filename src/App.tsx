import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './styles/global';

import Routes from './routes';

import { AuthProvider } from './core/hooks/AuthContext';

const App: React.FC = () => (
  <>
    <ToastContainer />
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>

    <GlobalStyle />
  </>
);

export default App;
