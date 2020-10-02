import React, { FormEvent, useState, ChangeEvent } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';

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

  const { signIn } = useAuth();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      await signIn({
        email: formData.email,
        password: formData.password,
      });
    } catch (e) {
      console.error(e);
    }
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
          <Button type="submit">Logar</Button>
        </form>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
