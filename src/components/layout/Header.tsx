/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { jsx, css } from '@emotion/core';
import palette from 'src/lib/styles/palette';
import { createBrotliCompress } from 'zlib';

interface HeaderProps {}

function Header(props: HeaderProps) {
  const [scrollPostion, setScrollPostion] = useState(0);
  function onScroll(e: any) {
    // 스크롤 할때마다 state에 scroll한 만큼 scrollTop 값 증가하므로 이를 업데이트해줌,
    //따라서 스크롤 시점에 따라 특정액션을 추후에 state를 활용하여 구현 가능
    const scrollTop = e.srcElement.scrollingElement.scrollTop;
    // this.setState({ scrollTop });
    setScrollPostion(scrollTop);
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);
  return (
    <div
      css={css`
        top: 0;
        position: fixed;
        background-color: transparent;
        z-index: 999;
        right: 0;
        left: 0;
        background-color: ${scrollPostion !== 0
          ? palette.gray9
          : 'transparent'};
        transition: background-color 0.25s ease-in-out;
      `}
    >
      <div
        css={css`
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1064px;
          height: 58px;
          margin-right: auto;
          margin-left: auto;
          padding: 9px 20px;
          box-sizing: border-box;
          color: ${palette.gray2};
        `}
      >
        <div
          css={css`
            font-size: 20px;
            font-weight: 600;
          `}
        >
          Prove
        </div>
        <div>메뉴</div>
      </div>
    </div>
  );
}

export default Header;
