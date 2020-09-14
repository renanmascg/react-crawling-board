import React from 'react';
import {
  Container,
  HomeContent,
  Header,
  GroupInfo,
  NewestResearch,
} from './styles';
import Sidenav from '../../components/sidenav';

const Dashboard: React.FC = () => (
  <Container>
    <Sidenav />
    <HomeContent>
      <Header />
      <GroupInfo />
      <NewestResearch />
    </HomeContent>
  </Container>
);

export default Dashboard;
