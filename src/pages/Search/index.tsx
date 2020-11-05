/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Container, Content, ChipsArea, Chip, Form } from './styles';
import Sidenav from '../../core/components/sidenav';
import Input from '../../core/components/input';
import Button from '../../core/components/button';
import { useAuth } from '../../core/hooks/AuthContext';
import IsLoggedService from '../../services/security/isLogged';
import ISendSearchDTO from '../../core/dtos/ISendSearchDTO';

const Search: React.FC = () => {
  const { signOut } = useAuth();

  // run on init function
  useEffect(() => {
    const getUserSettings = new IsLoggedService();
    getUserSettings.exec().then(userSettings => {
      if (userSettings.error && userSettings.status === 401) {
        signOut();
      }
    });
  }, [signOut]);

  const [enterprises, setEnterprise] = useState<string>('');
  const [tags, setTags] = useState<string>('');
  const [search, setSearch] = useState<ISendSearchDTO>({
    empresas: [],
    tags: [],
    useTagsDefault: false,
  } as ISendSearchDTO);

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
    if (value === '') {
      return;
    }

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
        <Button>Enviar Pesquisa</Button>
      </Content>
    </Container>
  );
};

export default Search;
