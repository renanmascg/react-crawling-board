import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ICardProps {
  negative?: boolean;
  positive?: boolean;
}

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

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 20px 0 20px;

  h1 {
    margin-right: 10px;
    font-size: 22px;
    color: #3c3c3c;
  }

  hr {
    flex: 1;
    color: #cadfff;
  }
`;

export const ChartsInfo = styled.div`
  height: 300px;
  min-height: 300px;
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

export const NewsCards = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 0px 20px;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Card = styled.div<ICardProps>`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  width: 100%;
  max-width: 400px;
  height: 400px;
  background: white;
  overflow: hidden;
  border-radius: 10px;
  ${props =>
    props.positive &&
    css`
      border: 1px solid #83c46f;
    `}

  ${props =>
    props.negative &&
    css`
      border: 1px solid #fdc0c3;
    `}
`;

export const CardTitle = styled.a`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #cadfff;
  font-weight: 500;
  font-size: 18px;
  padding: 10px;
  text-align: center;
`;

export const CardBody = styled.div`
  flex: 1;
  padding: 10px 15px 0 15px;

  span {
    font-weight: bold;
  }
`;

export const CardTags = styled.div`
  padding: 0px 20px;

  hr {
    margin: 10px 0 10px 0;
  }

  div {
    display: flex;
    flex-wrap: wrap;

    p {
      padding: 5px;
      font-size: 14px;
      margin-top: 5px;
      font-weight: bold;

      & + p {
        margin-left: 5px;
        border: 1px solid #cadfff;
        border-radius: 5px;
        font-weight: 500;
        color: #3c3c3c;
      }
    }
  }
`;

export const CardButtons = styled.div`
  margin-top: 10px;
  height: 60px;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #cadfff;
`;

export const CardButton = styled.button<ICardProps>`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: none;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.05, 'white')};
  }

  svg {
    color: white;
  }

  ${props =>
    props.positive &&
    css`
      background: #c3efb4;

      &:hover {
        background: ${shade(0.05, '#c3efb4')};
      }
    `}

  ${props =>
    props.negative &&
    css`
      background: #fdc0c3;

      &:hover {
        background: ${shade(0.05, '#fdc0c3')};
      }
    `}
`;
