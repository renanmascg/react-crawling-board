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
  display: flex;
  flex-direction: column;

  hr {
    margin: 20px 0;
    border: 1px solid #cadfff;
  }
`;

export const ChartsInfo = styled.div`
  height: 300px;
  background: #6078eb;
  padding: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const ChartstTitle = styled.div`
  display: flex;
  padding: 5px;
  border-radius: 5px;
  align-items: center;

  h1 {
    margin-right: 10px;
    color: white;
    font-size: 22px;
  }

  hr {
    flex: 1;
    margin: 20px 0;
    border: 1px solid #cadfff;
    height: 1px;
    background: #cadfff;
  }
`;

export const ChartsBody = styled.div`
  flex: 1;
  padding-top: 5px;
  display: flex;
  overflow: auto;

  div {
    background: white;
    width: 300px;
    height: 100%;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

    & + div {
      margin-left: 15px;
    }
  }
`;

export const NumberInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px !important;

  p {
    width: 270px;
    font-size: 16px;
    font-weight: normal;
  }

  span {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 30px;
  }
`;
