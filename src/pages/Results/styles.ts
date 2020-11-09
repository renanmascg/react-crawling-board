import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  flex: 1;
  overflow: auto;
  hr {
    margin: 20px 0;
    border: 1px solid #cadfff;
  }
`;

export const SearchBar = styled.div`
  height: 80px;
  padding: 20px;
  background: #cadfff;
  display: flex;
  align-items: center;
  justify-content: stretch;

  form {
    flex: 1;
    display: flex;
    align-items: center;

    div {
      height: 50px;
    }

    button {
      margin-top: 0;
      max-width: 100px;
      margin-left: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const SearchResults = styled.div`
  padding: 0 30px 10px 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  a {
    text-decoration: none;
  }
`;

export const Result = styled.div`
  width: 500px;
  height: 320px;
  background: #c9deff;
  border-radius: 10px;
  margin: 40px 0 0 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  & + div {
    margin-left: 10px;
  }

  hr {
    border: 1px solid #94c0fc;
    margin: 10px 5px 10px 5px;
  }
`;

export const ResultTitle = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background: #6078eb;
  align-items: center;
  justify-content: center;

  h1 {
    color: white;
    font-size: 20px;
  }
`;

export const ResultBody = styled.div`
  padding: 10px;
  flex: 1;

  div {
    display: flex;
    justify-content: space-between;

    & + div {
      margin-top: 5px;
    }

    p {
      font-weight: 500;
      color: #3c3c3c;
    }

    span {
      width: 200px;
      background: #dcf9ed;
      border-radius: 10px;
      text-align: center;
      font-weight: 500;
      color: #026b3c;
    }

    h3 {
      font-size: 16px;
      width: 200px;
      background: white;
      border-radius: 10px;
      text-align: center;
      font-weight: normal;
      color: #3c3c3c;
    }
  }

  hr {
    border: 1px solid #94c0fc;
    margin: 10px 5px 10px 5px;
  }
`;

export const ResultButtons = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0px 10px 10px 10px;

  hr {
    border: 1px solid #94c0fc;
    margin: 10px 5px 10px 5px;
  }

  button,
  a {
    height: 50px;
    width: 120px;
    background: #6078eb;
    border: none;
    border-radius: 10px;
    color: white;
    font-weight: 500;
    text-align: center;

    &:hover {
      background: ${shade(0.2, '#6078EB')};
    }

    &:disabled {
      background: lightgray;
    }
  }
`;

export const Center = styled.div`
  margin: auto;
`;
