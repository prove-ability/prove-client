/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

interface P3Props {}

const P3: React.FC<P3Props> = () => {
  return (
    <div
      css={css`
        background-image: url('/images/back_ground-cat.jpg');
        position: relative;
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        width: 100%;
        height: 100vh;
      `}
    ></div>
  );
};

export default P3;
