import React from 'react';

import Link from '../Link';

import { NavWrapper, LinkList, LinkItem } from './Nav.styled';

const navItems = [
  {
    label: 'Início',
    link: '/123',
  },
  {
    label: '123',
    link: '/123',
  },
];

export default () => (
  <NavWrapper>
    <LinkList>
      {navItems.map((item) => (
        <LinkItem key={item.label}>
          <Link href={item.link}>{item.label}</Link>
        </LinkItem>
      ))}
    </LinkList>
  </NavWrapper>
);
