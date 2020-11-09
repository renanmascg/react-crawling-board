import React, { useEffect, useState } from 'react';
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
import { useAuth } from '../../core/hooks/AuthContext';
import { IEnterprisesFullDTO } from '../../core/dtos/IEnterpriseFullInfo';
import GetEnterpriseFullInfo from '../../services/search/getEnterpriseFullInfo';
import UpdateOrganicResult from '../../services/search/updateOrganicResults';

interface IParams {
  id: string;
}

const ResultQuery: React.FC = () => {
  const updateOrganicResult = new UpdateOrganicResult();

  const [results, setResults] = useState<IEnterprisesFullDTO>({
    enterprises: [],
  } as IEnterprisesFullDTO);

  const { id } = useRouteMatch<IParams>().params;

  const { signOut } = useAuth();

  // run on init function
  useEffect(() => {
    const getUserResults = new GetEnterpriseFullInfo();
    getUserResults.exec(id).then(searched => {
      if (searched.error && searched.status === 401) {
        signOut();
      }

      setResults(searched.enterprises);
    });
  }, [signOut, id]);

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

  function handleGoodBadNews(
    apiId: string,
    organicId: string,
    isGood: boolean,
  ) {
    updateOrganicResult
      .exec({
        apiId,
        organicId,
        isGood,
      })
      .then(res => {
        if (res.error) {
          console.log('ERRO OCURRED');
          return;
        }

        console.log('acertou');

        console.log(res.enterprise);

        const ents = results.enterprises.map(ent => {
          if (ent.apiId === apiId) {
            return res.enterprise;
          }
          return ent;
        });

        setResults({
          enterprises: [...ents],
        });
      });
  }

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
          {results.enterprises.map(ent => {
            const cards = ent?.organic_result?.map(or => {
              const tag = ent.search_parameters.q.substring(
                ent.search_parameters.q.indexOf('+ "') + 3,
                ent.search_parameters.q.length - 1,
              );

              return (
                <Card
                  positive={or.isGood !== null && or.isGood}
                  negative={or.isGood !== null && !or.isGood}
                >
                  <CardTitle href={or.link} target="__blank">
                    {or.title}
                  </CardTitle>
                  <CardBody>
                    <span>Snippet:</span>
                    {or.snippet}
                  </CardBody>
                  <CardTags>
                    <hr />
                    <div>
                      <p>Tags:</p>
                      <p>{tag}</p>
                    </div>
                  </CardTags>
                  <CardButtons>
                    <CardButton
                      type="button"
                      positive={or.isGood !== null && or.isGood}
                      onClick={() => handleGoodBadNews(ent.apiId, or._id, true)}
                    >
                      <GrLike size={20} />
                    </CardButton>
                    <CardButton
                      type="button"
                      negative={or.isGood !== null && !or.isGood}
                      onClick={() =>
                        handleGoodBadNews(ent.apiId, or._id, false)}
                    >
                      <GrDislike size={20} />
                    </CardButton>
                  </CardButtons>
                </Card>
              );
            });

            return cards;
          })}
        </NewsCards>
      </Content>
    </Container>
  );
};

export default ResultQuery;
