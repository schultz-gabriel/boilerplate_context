import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Moon, Sun } from '../../../../public/icons/SwitchIcons';

import { ComponentTypes } from '../../types';

interface SwitcherTypes extends ComponentTypes {
    onChange: () => void
}

export default ({ onChange }:SwitcherTypes) => {
  const theme = useContext(ThemeContext);

  return (
    <Switch
      onChange={onChange}
      checked={theme.title === 'dark'}
      onColor={theme.secondary}
      offColor={theme.secondary}
      checkedIcon={<Sun />}
      uncheckedIcon={<Moon />}
    />
  );
};
