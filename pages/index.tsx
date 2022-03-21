import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
  font-size: 50px;
`;

export default function Home() {
  return <Title>harleyjayy_xo</Title>;
}
