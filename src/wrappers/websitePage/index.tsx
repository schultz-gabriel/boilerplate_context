import React, { useState } from 'react';
import { HamburgerButton } from 'react-hamburger-button';
import { WebsitePageTypes } from './types';

import Header from '../../components/commons/Header';
import Nav from '../../components/commons/Nav';
import Modal from '../../components/commons/Modal';
import { DesktopWrapper, MobileWrapper } from './ScreenWrappers';
import ThemeSwitcher from '../../components/commons/ThemeSwitcher';

import SEO from '../../SEO';

export default ({
  children, seoProps, toggleTheme, theme,
}:WebsitePageTypes) => {
  const [isModalOpen, setModalState] = useState(false);
  return (
    <>
      <SEO {...seoProps} />
      <div
        style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <MobileWrapper>
          <Modal
            isOpen={isModalOpen}
            onClose={() => { setModalState(false); }}
          >
            <div
              data-modal-safe-area
              style={
                {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: theme.menuBG,
                  opacity: 1,
                }
              }
            >
              <Nav />
              <ThemeSwitcher onChange={() => toggleTheme()} />
            </div>
          </Modal>
        </MobileWrapper>

        <Header>
          <h1>logo</h1>
          <DesktopWrapper>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Nav />
              <ThemeSwitcher onChange={() => toggleTheme()} />
            </div>
          </DesktopWrapper>
          <MobileWrapper>
            <HamburgerButton
              open={isModalOpen}
              onClick={() => setModalState(!isModalOpen)}
              width={40}
              height={30}
              strokeWidth={5}
              color={theme.color}
              animationDuration={0.2}
            />
          </MobileWrapper>
        </Header>

        {children}
      </div>
    </>
  );
};
