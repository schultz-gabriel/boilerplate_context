import React from 'react';
import { WebsitePageTypes } from './types';

import SEO from '../../SEO';
// toggleTheme já está funcionando

// eslint-disable-next-line no-unused-vars
export default ({ children, seoProps, toggleTheme }:WebsitePageTypes) => (
  <>
    <SEO {...seoProps} />
    <div
      style={{ width: '100%', display: 'flex' }}
    >
      {children}
    </div>
  </>
);
