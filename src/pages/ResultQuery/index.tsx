import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Pie, ChartComponentProps } from 'react-chartjs-2';
import {
  Container,
  Content,
  ChartsInfo,
  ChartstTitle,
  ChartsBody,
  NumberInfo,
} from './styles';
import Sidenav from '../../components/sidenav';

interface IParams {
  id: string;
}

const ResultQuery: React.FC = () => {
  const { id } = useRouteMatch<IParams>().params;
  console.log(`=================> ${id}`);

  const dataset = {
    datasets: [
      {
        data: [15, 20],
        backgroundColor: ['#36A2EB', '#FFCE56', '#36A2EB'],
        // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderColor: '#F4F6F9',
      },
    ],
    labels: ['Avaliados', 'Não Avaliados'],
  };

  const data: ChartComponentProps = {
    data: dataset,
    legend: {
      display: true,
      position: 'top',
      fullWidth: true,
      reverse: false,
      labels: {
        fontColor: '#3c3c3c',
        fontFamily: 'Poppins',
      },
    },
    options: {
      maintainAspectRatio: false,
    },
  };

  return (
    <Container>
      <Sidenav />
      <Content>
        <ChartsInfo>
          <ChartstTitle>
            <h1>Estatísticas da Pesquisa</h1>
            <hr />
          </ChartstTitle>
          <ChartsBody>
            <NumberInfo>
              <p>Número de resultados:</p>
              <span>
                <h1>1234 Resultados</h1>
              </span>
            </NumberInfo>
            <div>
              <Pie {...data} redraw />
            </div>
            <div>
              <Pie {...data} />
            </div>
            <div>
              <Pie {...data} />
            </div>
            <div>
              <Pie {...data} />
            </div>
          </ChartsBody>
        </ChartsInfo>
      </Content>
    </Container>
  );
};

export default ResultQuery;
