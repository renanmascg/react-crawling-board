import React, { HTMLAttributes } from 'react';
import { InfoStyle } from './styles';

interface DivProps extends HTMLAttributes<HTMLDivElement> {
  width: number;
  blue?: boolean;
  brown?: boolean;
  cyan?: boolean;
  green?: boolean;
}

const Info: React.FC<DivProps> = ({ children, ...rest }) => (
  <InfoStyle {...rest}>{children}</InfoStyle>
);

export default Info;
