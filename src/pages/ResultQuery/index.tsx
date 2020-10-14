import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Pie, ChartComponentProps } from 'react-chartjs-2';
import { GrDislike, GrLike } from 'react-icons/gr';
import {
  Container,
  Content,
  Title,
  ChartsInfo,
  ChartstTitle,
  ChartsBody,
  NumberInfo,
  NewsCards,
  Card,
  CardTitle,
  CardBody,
  CardTags,
  CardButtons,
  CardButton,
} from './styles';
import Sidenav from '../../core/components/sidenav';
import newsJson from '../../utils/return.json';

interface IParams {
  id: string;
}

const resultExample = newsJson.organic_results;

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
        <Title>
          <h1>Noticias Encontradas</h1>
          <hr />
        </Title>
        <NewsCards>
          {resultExample.map(result => {
            return (
              <Card>
                <CardTitle href={result.link} target="__blank">
                  {result.title}
                </CardTitle>
                <CardBody>
                  <span>Snippet:</span>
                  {result.snippet}
                </CardBody>
                <CardTags>
                  <hr />
                  <div>
                    <p>Tags:</p>
                    <p>QUEIMADAS</p>
                    <p>ALIMENTAÇÃO</p>
                    <p>QUEIMADAS</p>
                  </div>
                </CardTags>
                <CardButtons>
                  <CardButton type="button">
                    <GrLike size={20} />
                  </CardButton>
                  <CardButton type="button">
                    <GrDislike size={20} />
                  </CardButton>
                </CardButtons>
              </Card>
            );
          })}
        </NewsCards>
      </Content>
    </Container>
  );
};

export default ResultQuery;
