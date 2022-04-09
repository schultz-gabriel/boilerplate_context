import React from 'react';
import styled from 'styled-components';

import HomeScreen from '../src/screens/HomeScreen';
import websitePageHOC from '../src/wrappers/websitePage/hoc';

const Title = styled.h1`
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
  font-size: 50px;
`;

const HtmlComponent = styled.div`
  background-color: ${(theme) => theme.color};
`;

const Home = () => (
  <HomeScreen>
    <HtmlComponent>
      <Title>
        Gabriel is building it
      </Title>
    </HtmlComponent>
  </HomeScreen>
);

export default websitePageHOC(Home, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Início',
      prevImage: '',
    },
  },
});
