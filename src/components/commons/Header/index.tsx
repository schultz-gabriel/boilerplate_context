import React from 'react';

import HeaderWrapper from './Header.styled';

import { ComponentTypes } from '../../types';

export default ({ children }:ComponentTypes) => (
  <HeaderWrapper>
    {children}
  </HeaderWrapper>
);
