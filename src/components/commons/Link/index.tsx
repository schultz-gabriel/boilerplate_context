/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

import { ComponentTypes } from '../../types';

interface LinkTypes extends ComponentTypes {
    href: string,
}

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default function Link({ href, children, ...props }:LinkTypes) {
  return (
    <NextLink href={href} passHref>
      <StyledLink {...props}>
        {children}
      </StyledLink>
    </NextLink>
  );
}
