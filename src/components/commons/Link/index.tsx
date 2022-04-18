/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

import Text from '../../foundations/Text';

import { ComponentTypes } from '../../types';

interface LinkTypes extends ComponentTypes {
    href: string,
    // eslint-disable-next-line react/require-default-props
    tag?: string
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

export default function Link({
  href, children, tag, ...props
}:LinkTypes) {
  const textTag = tag || 'subTitle';
  return (
    <NextLink href={href} passHref>
      <StyledLink {...props}>
        <Text variant={textTag} as="span">
          {children}
        </Text>
      </StyledLink>
    </NextLink>
  );
}
