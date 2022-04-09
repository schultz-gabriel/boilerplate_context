import React from 'react';
import hocProps from './types';

import SEO from '../../SEO';
// toggleTheme já está funcionando

// eslint-disable-next-line no-unused-vars
export default ({ children, seoProps, toggleTheme }:hocProps) => (
  <>
    <SEO {...seoProps} />
    <div
      style={{ width: '100%', display: 'flex' }}
    >
      {children}
    </div>
  </>
);
