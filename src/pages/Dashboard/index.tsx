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
import Sidenav from '../../core/components/sidenav';
import Info from '../../core/components/Info';

const Dashboard: React.FC = () => {
  const user: { name: string } = JSON.parse(
    localStorage.getItem('@Achaki:user') || '',
  );

  return (
    <Container>
      <Sidenav />
      <HomeContent>
        <Header>
          <Title>
            <h1>
              Olá,
              {` ${user.name}!`}
            </h1>
            <p>Página ainda em construção</p>
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
};

export default Dashboard;
