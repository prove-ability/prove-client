/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

import Content from './Content';

interface P1Props {}

function P1(props: P1Props) {
  return (
    <div
      css={css`
        background-image: url('/images/back_ground-light.jpg');
        position: relative;
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        width: 100%;
        height: 100vh;
      `}
    >
      <Content />
    </div>
  );
}

export default P1;
