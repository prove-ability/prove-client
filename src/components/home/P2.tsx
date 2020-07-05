/** @jsx jsx */
import React, { useEffect } from 'react';
import { jsx, css } from '@emotion/core';
import { useSpring, animated } from 'react-spring';
import palette from 'src/lib/styles/palette';
import { useInView } from 'react-intersection-observer';
import { Spring } from 'react-spring/renderprops';

interface P2Props {}

const P2: React.FC<P2Props> = () => {
  // const [ref, inView, entry] = useInView({
  //   threshold: 0,
  // });
  const [ref, inView] = useInView({
    threshold: 0,
  });
  useEffect(() => {
    set({ opacity: inView ? 1 : 0 });
  }, [inView]);
  const [springProps, set] = useSpring(() => ({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2500 },
  }));
  return (
    <div
      css={css`
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: 100vh;
        background-image: url('/images/back_ground-woman.jpg');
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
      `}
    >
      <div
        css={css`
          max-width: 1024px;
          width: 95%;
          margin: 0 auto;
          box-sizing: border-box;
        `}
      >
        <div
          css={css`
            color: ${palette.gray4};
            font-weight: 400;
            font-size: 48px;
            line-height: 70px;
            word-spacing: 5px;
          `}
          ref={ref}
        >
          <animated.div style={springProps}>
            대한민국 국민{'  '}
            <b>
              <Spring
                config={{ duration: 2000 }}
                from={{ number: 0 }}
                to={{ number: 5184 }}
              >
                {({ number }) => <span>{number.toFixed()}</span>}
              </Spring>
              {/* <animated.span>{Teprops.number}</animated.span> */}
              만명 중
              <Spring
                config={{ duration: 2000 }}
                from={{ number: 0 }}
                to={{ number: 1 }}
              >
                {({ number }) => <span>{number.toFixed()}</span>}
              </Spring>
              명
            </b>{' '}
            사용
            <br />
            누적 가입수 <b>0번</b>
            <br />
            누적 관람액 <b>0번</b>
            <br />
            출시 이래 보안사고 <b>0건</b>
            <br />
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default P2;
