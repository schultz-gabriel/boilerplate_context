import React from 'react';
import styled, { css } from 'styled-components';

import PageWrapper from '../../components/layout/PageWrapper';

import breakpointMedia from '../../theme/utils/breakpointMedia';

const HtmlComponent = styled.div`
  background-color: ${(theme) => theme.color};
  ${breakpointMedia({
    md: css`
    `,
  })}
`;

const Home = () => (
  <PageWrapper>
    <HtmlComponent>
      <h1>
        Gabriel is building it
      </h1>
    </HtmlComponent>
  </PageWrapper>
);

export default Home;
