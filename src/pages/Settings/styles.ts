import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  flex: 1;
  overflow: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;

  hr {
    margin: 20px 0;
    border: 1px solid #cadfff;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    margin-right: 10px;
    font-size: 25px;
    color: #3c3c3c;
  }

  hr {
    flex: 1;
  }
`;

export const ChipsArea = styled.div`
  background: #f8f9fa;
  border-radius: 10px;
  border: 2px solid #eeeff2;
  padding: 16px;
  width: 100%;
  height: 150px;
  color: #9da1a6;
  display: flex !important;
  justify-content: start !important;
  align-items: start !important;
  margin-top: 15px;
  flex-wrap: wrap;
  overflow: auto;
`;

export const Chip = styled.div`
  background: #6078eb;
  padding: 5px;
  border-radius: 5px;
  margin: 5px 5px 0px 0px;

  p {
    background: #fff;
    border-radius: 5px;
    padding: 0 5px;
    color: #9da1a6;
    margin-right: 5px;
  }

  svg {
    color: #fff;

    &:hover {
      color: ${shade(0.2, '#cadfff')};
      cursor: pointer;
    }
  }
`;

export const Form = styled.form`
  & + form {
    margin-top: 20px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      margin-left: 20px;
      margin-top: 0px;
      width: 80px;
    }
  }

  span {
    display: flex;
    align-items: center;
    margin-top: 15px;

    input {
      border: 0px solid #eeeff2;
      cursor: pointer;
    }

    label {
      margin-left: 10px;
      cursor: pointer;
    }
  }
`;
