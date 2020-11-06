/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { Container, Content, ChipsArea, Chip, Form } from './styles';
import Sidenav from '../../core/components/sidenav';
import Input from '../../core/components/input';
import Button from '../../core/components/button';
import { useAuth } from '../../core/hooks/AuthContext';
import IsLoggedService from '../../services/security/isLogged';
import ISendSearchDTO from '../../core/dtos/ISendSearchDTO';
import SendEnterpriseToSearchService from '../../services/search/sendEnterpriseToSearch';

const Search: React.FC = () => {
  const { signOut } = useAuth();
  const sendEnterpriseInfo = new SendEnterpriseToSearchService();

  const [isLoading, setIsLoading] = useState(false);

  const [enterprises, setEnterprise] = useState<string>('');
  const [tags, setTags] = useState<string>('');
  const [search, setSearch] = useState<ISendSearchDTO>({
    empresas: [],
    tags: [],
    useTagsDefault: false,
  } as ISendSearchDTO);

  // run on init function
  useEffect(() => {
    const getUserSettings = new IsLoggedService();
    getUserSettings.exec().then(userSettings => {
      if (userSettings.error && userSettings.status === 401) {
        signOut();
      }
    });
  }, [signOut]);

  function handleAddChip(
    item: 'tag' | 'emp',
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    const array = item === 'emp' ? search?.empresas : search?.tags;
    const splittedWords =
      item === 'tag' ? tags.split(';') : enterprises.split(';');

    array?.push(...splittedWords);

    setSearch({
      empresas: item === 'emp' ? array : search?.empresas,
      tags: item === 'tag' ? array : search?.tags,
      useTagsDefault: search.useTagsDefault,
    });

    if (item === 'tag') {
      setTags('');
    } else {
      setEnterprise('');
    }
  }

  function handleRemoveChip(
    item: 'tag' | 'emp',
    event: React.MouseEvent<SVGElement, MouseEvent>,
  ) {
    const { id } = event.currentTarget;

    const array = item === 'tag' ? search?.tags : search?.empresas;

    const newArray = array?.filter(val => val !== id);

    setSearch({
      tags: item === 'tag' ? newArray : search?.tags,
      empresas: item === 'emp' ? newArray : search?.empresas,
      useTagsDefault: search.useTagsDefault,
    });
  }

  function handleAddTagOrEnterprise(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    if (name === 'tag') {
      setTags(value);
    } else {
      setEnterprise(value);
    }
  }

  function handleUseTagsDefault() {
    setSearch({
      ...search,
      useTagsDefault: !search.useTagsDefault,
    });
  }

  async function handleSubmit() {
    setIsLoading(true);

    if (
      search.empresas.length === 0 ||
      (search.tags.length === 0 && search.useTagsDefault === false)
    ) {
      toast.warn(
        'Empresas e tags são necessárias para realização da pesquisa',
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: 'toast-signin',
        },
      );
      setIsLoading(false);
      return;
    }

    const res = await sendEnterpriseInfo.exec(search);

    if (res.error) {
      toast.error(
        'Algo inesperado ocorreu. Tente novamente em alguns instantes.',
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          className: 'toast-signin',
        },
      );
    } else {
      toast.success('Sua pesquisa foi submetida com sucesso !', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: 'toast-signin',
      });

      search.empresas = [];
      search.tags = [];
      search.useTagsDefault = false;
    }

    setIsLoading(false);
  }

  return (
    <Container>
      <Sidenav />
      <Content>
        <Form onSubmit={event => handleAddChip('emp', event)}>
          <div>
            <Input
              name="enterprise"
              placeholder="Digite a Empresa"
              value={enterprises}
              onChange={handleAddTagOrEnterprise}
            />
            <Button type="submit">Add</Button>
          </div>
          <ChipsArea>
            {search.empresas.map(emp => {
              return (
                <Chip id={`emp:${emp}`} key={`emp:${emp}`}>
                  <p>{emp}</p>
                  <AiFillCloseCircle
                    id={emp}
                    name={emp}
                    onClick={event => handleRemoveChip('emp', event)}
                  />
                </Chip>
              );
            })}
          </ChipsArea>
        </Form>
        <hr />
        <Form onSubmit={event => handleAddChip('tag', event)}>
          <div>
            <Input
              name="tag"
              placeholder="Digite a tag"
              value={tags}
              onChange={handleAddTagOrEnterprise}
            />
            <Button type="submit">Add</Button>
          </div>
          <span>
            <input
              type="checkbox"
              name="default_tags"
              id="default_tags"
              placeholder="Usar tags"
              onChange={handleUseTagsDefault}
            />
            <label htmlFor="default_tags">Inserir tags padrão</label>
          </span>
          <ChipsArea>
            {search.tags.map(tag => {
              return (
                <Chip id={`tag:${tag}`} key={`tag:${tag}`}>
                  <p>{tag}</p>
                  <AiFillCloseCircle
                    id={tag}
                    name={tag}
                    onClick={event => handleRemoveChip('tag', event)}
                  />
                </Chip>
              );
            })}
          </ChipsArea>
          <hr />
        </Form>
        <Button onClick={handleSubmit}>
          {isLoading ? (
            <BeatLoader size={15} color="#FFF" />
          ) : (
            'Enviar Pesquisa'
          )}
        </Button>
      </Content>
    </Container>
  );
};

export default Search;
