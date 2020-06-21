/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { ReactNode } from 'react';
import Header from 'src/components/layout/Header';
import media from 'src/lib/styles/media';
import pallete from 'src/lib/styles/palette';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div
      css={css`
        ${media.large} {
          max-width: 1200px;
        }
        ${media.medium} {
          max-width: 1024px;
        }
        background-color: ${pallete.red1};
      `}
    >
      <Header />
      {children}
    </div>
  );
}

export default Layout;
