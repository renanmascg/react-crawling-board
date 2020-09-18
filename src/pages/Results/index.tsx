import React from 'react';
import { FiSearch } from 'react-icons/fi';
import {
  Container,
  Content,
  SearchBar,
  SearchResults,
  Result,
  ResultTitle,
  ResultBody,
  ResultButtons,
} from './styles';
import Sidenav from '../../components/sidenav';
import Input from '../../components/input';
import Button from '../../components/button';

const Results: React.FC = () => {
  return (
    <Container>
      <Sidenav />
      <Content>
        <SearchBar>
          <form>
            <Input name="search" placeholder="Pesquisar nas suas requisições" />
            <Button type="submit">
              <FiSearch size={25} />
            </Button>
          </form>
        </SearchBar>
        <SearchResults>
          <Result>
            <ResultTitle>
              <h1>NOME DA EMPRESA</h1>
            </ResultTitle>
            <ResultBody>
              <div>
                <p>Status: </p>
                <span>Concluído</span>
              </div>
              <hr />
              <div>
                <p>Número de Resultados: </p>
                <h3>0</h3>
              </div>
              <div>
                <p>Numero de Tags: </p>
                <h3>10</h3>
              </div>
              <div>
                <p>Data da Pesquisa: </p>
                <h3>26/01/1996</h3>
              </div>
              <div>
                <p>Usuário: </p>
                <h3>renan.goncalves</h3>
              </div>
            </ResultBody>
            <hr />
            <ResultButtons>
              <button type="button">CSV</button>
              <button type="button">Resultados</button>
            </ResultButtons>
          </Result>
          <Result />
          <Result />
          <Result />
        </SearchResults>
      </Content>
    </Container>
  );
};

export default Results;
