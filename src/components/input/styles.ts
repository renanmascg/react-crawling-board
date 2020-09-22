import styled from 'styled-components';

export const Container = styled.div`
  background: #f8f9fa;
  border-radius: 10px;
  border: 2px solid #eeeff2;
  padding: 16px;
  width: 100%;
  color: #9da1a6;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #9da1a6;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
