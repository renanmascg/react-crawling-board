import styled from 'styled-components';

interface InfoProps {
  blue?: boolean;
  brown?: boolean;
  cyan?: boolean;
  green?: boolean;
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const HomeContent = styled.div`
  height: 100vh;
  width: 100%;
  display: block;

  padding: 30px;
`;

export const Header = styled.div`
  height: 80px;
`;

export const Title = styled.div`
  color: #26334a;

  h1 {
    font-size: 25px;
    font-weight: bold;
    line-height: 48px;
  }

  p {
    margin-top: -15px;
    font-size: 16px;
    font-weight: 500;
    color: #716b6b;
    line-height: 33px;
  }
`;

export const GroupInfo = styled.div`
  display: flex;
  height: 150px;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;

export const NewestResearch = styled.div``;
