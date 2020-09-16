import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Container, Content, ChipsArea, Chip, Form } from './styles';
import Sidenav from '../../components/sidenav';
import Input from '../../components/input';
import Button from '../../components/button';

const Search: React.FC = () => {
  return (
    <Container>
      <Sidenav />
      <Content>
        <Form>
          <div>
            <Input name="enterprise" placeholder="Digite a Empresa" />
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
        <hr />
        <Form>
          <div>
            <Input name="tags" placeholder="Digite a tag" />
            <Button type="submit">Add</Button>
          </div>
          <span>
            <input
              type="checkbox"
              name="default_tags"
              id="default_tags"
              placeholder="Usar tags"
            />
            <label htmlFor="default_tags">Inserir tags padrão</label>
          </span>
          <ChipsArea />
          <hr />
        </Form>
        <Button>Enviar Pesquisa</Button>
      </Content>
    </Container>
  );
};

export default Search;
