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
} from './styles';
import Sidenav from '../../components/sidenav';
import Info from '../../components/Info';

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
        <Info width={250}>
          <p>Suas Pesquisas</p>
          <div>
            <p>1500</p>
            <FiDatabase />
          </div>
        </Info>

        <Info width={250} blue>
          <p>Total Consultas</p>
          <div>
            <p>10</p>
            <FiDatabase />
          </div>
        </Info>

        <Info width={250} cyan>
          <p>Consultas Remanescentes</p>
          <div>
            <p>10</p>
            <FiDatabase />
          </div>
        </Info>

        <Info width={250} green>
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
