import React, { FormEvent, useState, ChangeEvent } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';

import { toast } from 'react-toastify';
import BeatLoader from 'react-spinners/BeatLoader';

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.png';
import Input from '../../components/input';
import Button from '../../components/button';

import { useAuth } from '../../hooks/AuthContext';

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useAuth();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setIsLoading(true);

    try {
      await signIn({
        email: formData.email,
        password: formData.password,
      });
    } catch (e) {
      toast.warn('Email/Senha incorretos', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: 'toast-signin',
      });

      console.error(e);
    }

    setIsLoading(false);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Achaki News" />
        <form onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <Input
            name="email"
            icon={FiMail}
            type="text"
            placeholder="E-mail"
            onChange={handleInputChange}
          />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
            onChange={handleInputChange}
          />
          <Button type="submit">
            {isLoading ? <BeatLoader size={15} color="#FFF" /> : 'Logar'}
          </Button>
        </form>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
