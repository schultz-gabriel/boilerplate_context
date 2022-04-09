/* eslint-disable react/destructuring-assignment */
import React from 'react';
import WebsitePageWrapper from '..';
// import WebsiteGlobalProvider from '../Provider';

interface teste {
  pageWrapperProps: {
    seoProps: {
      headTitle: string,
      prevImage: string
    },
  },
  toggleTheme: Function,
}

export default function websitePageHOC(
  PageComponent:any,
  { pageWrapperProps } = { pageWrapperProps: {} },
) {
  return (props:teste) => (
    <WebsitePageWrapper
      {...pageWrapperProps}
      {...props.pageWrapperProps}
      toggleTheme={props.toggleTheme}
    >
      <PageComponent {...props} />
    </WebsitePageWrapper>
  );
}
