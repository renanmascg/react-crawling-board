import styled, { css } from 'styled-components';

interface InfoProps {
  width: number;
  blue?: boolean;
  brown?: boolean;
  cyan?: boolean;
  green?: boolean;
}

export const InfoStyle = styled.div<InfoProps>`
  background: #ffd5a9;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  margin-top: 10px;

  ${props =>
    props.width &&
    css`
      width: ${props.width}px;
    `}

  ${props =>
    props.blue &&
    css`
      background: #c9deff;
    `}

  ${props =>
    props.cyan &&
    css`
      background: #fdc0c3;
    `}

${props =>
    props.green &&
    css`
      background: #c4efb5;
    `}

> p {
    padding-top: 9px;
    width: 100%;
    text-align: center;
    height: 40px;
    background: #c7925a;
    color: #fff;
    font-weight: 500;
    ${props =>
      props.blue &&
      css`
        background: #7da3de;
      `}

    ${props =>
      props.cyan &&
      css`
        background: #bb565b;
      `}

  ${props =>
      props.green &&
      css`
        background: #84c46e;
      `}
  }

  div {
    margin: 20px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-weight: bold;
      font-size: 40px;
      color: #80490f;
      flex: 1;
      ${props =>
        props.blue &&
        css`
          color: #002661;
        `}

      ${props =>
        props.cyan &&
        css`
          color: #640005;
        `}

    ${props =>
        props.green &&
        css`
          color: #1a6500;
        `}
    }

    svg {
      width: 50px;
      height: 50px;
      color: #000000;
    }
  }
`;
