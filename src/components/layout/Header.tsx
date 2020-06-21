/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import palette from 'src/lib/styles/palette';

interface HeaderProps {}

function Header(props: HeaderProps) {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        background-color: ${palette.red7};
        color: ${palette.gray1};
        font-size: 26px;
        font-weight: 600;
        min-height: 60px;
      `}
    >
      Prove
    </div>
  );
}

export default Header;
