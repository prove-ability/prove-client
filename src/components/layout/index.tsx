/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { ReactNode } from 'react';
import Header from 'src/components/layout/Header';
// import media from 'src/lib/styles/media';
// import pallete from 'src/lib/styles/palette';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      css={css`
        height: 100%;
      `}
    >
      <Header />
      {children}
    </div>
  );
};

export default Layout;
