import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { Link } from 'react-router-dom';
import {
  Container,
  Content,
  SearchBar,
  SearchResults,
  Result,
  ResultTitle,
  ResultBody,
  ResultButtons,
  Center,
} from './styles';
import Sidenav from '../../core/components/sidenav';
import Input from '../../core/components/input';
import Button from '../../core/components/button';
import { useAuth } from '../../core/hooks/AuthContext';
import IEnterprisesDTO from '../../core/dtos/IEnterprises';
import GetUserSearchedEnterprisesService from '../../services/search/getUserSearchedEnterprises';

const Results: React.FC = () => {
  const [searches, setSearches] = useState<IEnterprisesDTO>({
    enterprises: [],
  });
  const [email, setEmail] = useState<string>('');
  const { signOut } = useAuth();

  // run on init function
  useEffect(() => {
    const getUserSearches = new GetUserSearchedEnterprisesService();
    getUserSearches.exec().then(searched => {
      if (searched.error && searched.status === 401) {
        signOut();
      }

      setSearches(searched.searches);

      setEmail(searched.email);
    });
  }, [signOut]);

  return (
    <Container>
      <Sidenav />
      {searches.enterprises !== undefined ? (
        <Content>
          <SearchBar>
            <form>
              <Input
                name="search"
                placeholder="Pesquisar nas suas requisições"
              />
              <Button type="submit">
                <FiSearch size={25} />
              </Button>
            </form>
          </SearchBar>
          <SearchResults>
            {searches.enterprises.map(ent => {
              console.log(ent);
              return (
                <Result>
                  <ResultTitle>
                    <h1>{ent.name}</h1>
                  </ResultTitle>
                  <ResultBody>
                    <div>
                      <p>Status: </p>
                      <span>{ent.status}</span>
                    </div>
                    <hr />
                    <div>
                      <p>Numero de Tags: </p>
                      <h3>{ent.tags.length}</h3>
                    </div>
                    <div>
                      <p>Data da Pesquisa: </p>
                      <h3>{new Date(ent.createdAt).toLocaleDateString()}</h3>
                    </div>
                    <div>
                      <p>Usuário: </p>
                      <h3>{email}</h3>
                    </div>
                  </ResultBody>
                  <hr />
                  <ResultButtons>
                    <button type="button" disabled>
                      CSV
                    </button>
                    <Link
                      to={`/results/${ent._id}`}
                      style={{ textAlign: 'center', paddingTop: '10px' }}
                    >
                      Resultados
                    </Link>
                  </ResultButtons>
                </Result>
              );
            })}
          </SearchResults>
        </Content>
      ) : (
        <Center>
          <PacmanLoader color="#6078eb" size={30} />
        </Center>
      )}
    </Container>
  );
};

export default Results;
