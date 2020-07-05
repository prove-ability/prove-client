/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

import palette from 'src/lib/styles/palette';

const Content: React.FC = () => {
  return (
    <div
      css={css`
        position: absolute;
        left: 0;
        right: 0;
        top: calc(50% - 120px);
        width: 100%;
        height: 204px;
        max-width: 1104px;
        padding: 0 40px;
        margin-left: auto;
        margin-right: auto;
      `}
    >
      <div
        css={css`
          margin: 0 0 23px;
          font-size: 48px;
          font-weight: 700;
          line-height: 1.3125;
          color: ${palette.gray0};
          text-shadow: 0 0 50px rgba(0, 0, 0, 0.18);
        `}
      >
        전시회의 모든 것,
        <br />
        프로브에서 간편하게~!!!
      </div>
      {/* <div>App 준비중. </div>  */}
    </div>
  );
};

export default Content;
