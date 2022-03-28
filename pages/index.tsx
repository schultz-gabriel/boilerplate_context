import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
  font-size: 50px;
`;

const HtmlComponent = styled.div`
  background-color: blue;
`;

export default function Home() {
  return (
    <HtmlComponent>
      <Title>
        Gabriel is building it
      </Title>
    </HtmlComponent>
  );
}
