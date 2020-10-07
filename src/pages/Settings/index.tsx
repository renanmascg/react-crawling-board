import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { css } from '@emotion/core';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { toast } from 'react-toastify';
import {
  Container,
  Content,
  Title,
  Form,
  Chip,
  ChipsArea,
  Center,
} from './styles';
import Sidenav from '../../core/components/sidenav';
import Input from '../../core/components/input';
import Button from '../../core/components/button';
import GetUserSettingsService from '../../services/settings/getUserSettings';
import IUserSettings from '../../core/dtos/IUserSettingsDTO';
import SetNewUserSettingsService from '../../services/settings/setNewUserSettings';

const Settings: React.FC = () => {
  const setUserSettings = new SetNewUserSettingsService();

  // run on init function
  useEffect(() => {
    const getUserSettings = new GetUserSettingsService();
    getUserSettings.exec().then(userSettings => {
      setSettings(userSettings);
    });
  }, []);

  const [tags, setTags] = useState<string>('');
  const [urls, setUrls] = useState<string>('');
  const [settings, setSettings] = useState<IUserSettings>({} as IUserSettings);

  function showToast(value: boolean) {
    if (value) {
      toast.success('Configurações Atualizadas com Sucesso', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: 'toast-signin',
      });
    } else {
      toast.warn('Algo inesperado ocorreu, tente novamente.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: 'toast-signin',
      });
    }
  }

  function handleAddChip(
    item: 'tag' | 'url',
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    const array = item === 'tag' ? settings?.tagsDefault : settings?.urlRemove;
    const splittedWords = item === 'tag' ? tags.split(';') : urls.split(';');

    array?.push(...splittedWords);

    setSettings({
      userId: settings?.userId || '',
      tagsDefault: item === 'tag' ? array : settings?.tagsDefault,
      urlRemove: item === 'url' ? array : settings?.urlRemove,
    });

    if (item === 'tag') {
      setTags('');
    } else {
      setUrls('');
    }

    setUserSettings
      .exec({
        tagsDefault: item === 'tag' ? array : settings.tagsDefault,
        urlRemove: item === 'url' ? array : settings.urlRemove,
      })
      .then(val => {
        showToast(val);
      });
  }

  function handleRemoveChip(
    item: 'tag' | 'url',
    event: React.MouseEvent<SVGElement, MouseEvent>,
  ) {
    const { id } = event.currentTarget;

    const array = item === 'tag' ? settings?.tagsDefault : settings?.urlRemove;

    const newArray = array?.filter(val => val !== id);

    console.log(item);
    setSettings({
      userId: settings?.userId || '',
      tagsDefault: item === 'tag' ? newArray : settings?.tagsDefault,
      urlRemove: item === 'url' ? newArray : settings?.urlRemove,
    });

    setUserSettings
      .exec({
        tagsDefault: item === 'tag' ? newArray : settings.tagsDefault,
        urlRemove: item === 'url' ? newArray : settings.urlRemove,
      })
      .then(val => {
        showToast(val);
      });
  }

  function handleAddTagOrUrl(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    console.log(name, value);
    if (value === '') {
      return;
    }

    if (name === 'tag') {
      setTags(value);
    } else {
      setUrls(value);
    }
  }

  return (
    <Container>
      <Sidenav />
      {settings !== undefined ? (
        <Content>
          <Form onSubmit={event => handleAddChip('tag', event)}>
            <Title>
              <h1>Tags Default</h1>
              <hr />
            </Title>
            <div>
              <Input
                name="tag"
                placeholder="Digite a Tag"
                value={tags}
                onChange={handleAddTagOrUrl}
              />
              <Button type="submit">Add</Button>
            </div>
            <ChipsArea>
              {settings.tagsDefault?.map(tag => {
                return (
                  <Chip id={`tag:${tag}`}>
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
          </Form>
          <Form>
            <Title>
              <h1>Excluir URL</h1>
              <hr />
            </Title>
            <div>
              <Input
                name="url"
                placeholder="Digite a URL"
                value={urls}
                onChange={handleAddTagOrUrl}
              />
              <Button type="submit">Add</Button>
            </div>
            <ChipsArea>
              {settings.urlRemove?.map(url => {
                return (
                  <Chip id={`url:${url}`}>
                    <p>{url}</p>
                    <AiFillCloseCircle
                      id={url}
                      name={url}
                      onClick={event => handleRemoveChip('url', event)}
                    />
                  </Chip>
                );
              })}
            </ChipsArea>
          </Form>
        </Content>
      ) : (
        <Center>
          <PacmanLoader color="#6078eb" size={30} />
        </Center>
      )}
    </Container>
  );
};

export default Settings;
