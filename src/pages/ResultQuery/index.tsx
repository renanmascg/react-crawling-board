import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Container, Content } from './styles';
import Sidenav from '../../components/sidenav';

interface IParams {
  id: string;
}

const ResultQuery: React.FC = () => {
  const { id } = useRouteMatch<IParams>().params;
  console.log(`=================> ${id}`);
  return (
    <Container>
      <Sidenav />
      <Content />
    </Container>
  );
};

export default ResultQuery;
