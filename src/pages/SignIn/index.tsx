import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.png';
import Input from '../../components/input';
import Button from '../../components/button';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Achaki News" />
      <form>
        <h1>Faça seu login</h1>
        <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">Logar</Button>
      </form>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
