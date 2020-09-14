import React from 'react';
import { FiDatabase } from 'react-icons/fi';
import { FaUsers } from 'react-icons/fa';
import {
  Container,
  HomeContent,
  Header,
  GroupInfo,
  NewestResearch,
  Title,
  Info,
} from './styles';
import Sidenav from '../../components/sidenav';

const Dashboard: React.FC = () => (
  <Container>
    <Sidenav />
    <HomeContent>
      <Header>
        <Title>
          <h1>Olá, Letícia!</h1>
          <p>Algumas Estatísticas do mês</p>
        </Title>
      </Header>
      <GroupInfo>
        <Info>
          <p>Suas Pesquisas</p>
          <div>
            <p>1500</p>
            <FiDatabase />
          </div>
        </Info>

        <Info blue>
          <p>Total Consultas</p>
          <div>
            <p>10</p>
            <FiDatabase />
          </div>
        </Info>

        <Info cyan>
          <p>Consultas Remanescentes</p>
          <div>
            <p>10</p>
            <FiDatabase />
          </div>
        </Info>

        <Info green>
          <p>Total Usuários</p>
          <div>
            <p>10</p>
            <FaUsers />
          </div>
        </Info>
      </GroupInfo>
      <NewestResearch />
    </HomeContent>
  </Container>
);

export default Dashboard;
