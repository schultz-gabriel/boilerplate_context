import React from 'react';
import styled, { css } from 'styled-components';

import HomeScreen from '../src/screens/HomeScreen';
import websitePageHOC from '../src/wrappers/websitePage/hoc';
import breakpointMedia from '../src/theme/utils/breakpointMedia';

const Title = styled.h1`
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
  font-size: 50px;
  ${breakpointMedia({
    md: css`
    color: red
    `,
  })}
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
