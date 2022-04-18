// eslint-disable-next-line no-unused-vars
import React from 'react';

import HomeScreen from '../src/screens/HomeScreen';
import websitePageHOC from '../src/wrappers/websitePage/hoc';

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Início',
      prevImage: '',
    },
  },
});
