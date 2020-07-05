/** @jsx jsx */
import * as React from 'react';
import { jsx, css } from '@emotion/core';

import palette from 'src/lib/styles/palette';
import media from 'src/lib/styles/media';

interface RegisterTemplateProps {}

const RegisterTemplate: React.FC<RegisterTemplateProps> = ({ children }) => {
  return (
    <div
      css={css`
        width: 768px;
        margin: 0 auto;
        margin-top: 100px;
        line-height: 1.5;
        h1 {
          font-size: 4rem;
          color: ${palette.gray9};
          font-weight: bolder;
          margin: 0;
        }
        .description {
          font-size: 1.5rem;
          color: ${palette.gray9};
        }
        ${media.small} {
          width: 100%;
          padding-left: 1rem;
          padding-right: 1rem;
          margin-top: 4rem;
          h1 {
            font-size: 3rem;
          }
          .description {
            font-size: 1rem;
          }
        }
      `}
    >
      <h1>환영합니다!</h1>
      <div className="description">기본 회원 정보를 등록해주세요.</div>
      <div className="contents">{children}</div>
    </div>
  );
};

export default RegisterTemplate;
