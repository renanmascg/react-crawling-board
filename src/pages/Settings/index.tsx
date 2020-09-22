import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Container, Content, Title, Form, Chip, ChipsArea } from './styles';
import Sidenav from '../../components/sidenav';
import Input from '../../components/input';
import Button from '../../components/button';

const Settings: React.FC = () => {
  return (
    <Container>
      <Sidenav />
      <Content>
        <Form>
          <Title>
            <h1>Tags Default</h1>
            <hr />
          </Title>
          <div>
            <Input name="enterprise" placeholder="Digite a Tag" />
            <Button type="submit">Add</Button>
          </div>
          <ChipsArea>
            <Chip>
              <p>BANCO VOTORANTIM</p>
              <AiFillCloseCircle
                id="banco votorantim"
                name="BANCO VOTORANTIM"
                onClick={event => console.log(event.currentTarget.id)}
              />
            </Chip>
          </ChipsArea>
        </Form>
        <Form>
          <Title>
            <h1>Excluir URL</h1>
            <hr />
          </Title>
          <div>
            <Input name="enterprise" placeholder="Digite a URL" />
            <Button type="submit">Add</Button>
          </div>
          <ChipsArea>
            <Chip>
              <p>BANCO VOTORANTIM</p>
              <AiFillCloseCircle
                id="banco votorantim"
                name="BANCO VOTORANTIM"
                onClick={event => console.log(event.currentTarget.id)}
              />
            </Chip>
          </ChipsArea>
        </Form>
      </Content>
    </Container>
  );
};

export default Settings;
