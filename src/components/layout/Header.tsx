/** @jsx jsx */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { jsx, css } from '@emotion/core';

import { IconContext } from 'react-icons';
import { FaGithubSquare, FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GrFormClose } from 'react-icons/gr';

import palette from 'src/lib/styles/palette';
import Dialog from 'src/components/common/Dialog';
import { useAppDispatch } from 'src/stores';
import ui from 'src/stores/ui';

const cssLink = {
  display: 'inline-block',
  margin: '1rem',
  color: 'inhe  it',
  textDecoration: 'none',
};

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const dispatch = useAppDispatch();
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
  const handleDialog = () => dispatch(ui.actions.handleDialog());
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
      <Dialog>
        <IconContext.Provider value={{ size: '30px' }}>
          <div
            css={css`
              width: 40vh;
              div {
                margin-bottom: 20px;
              }
            `}
          >
            <div
              css={css`
                text-align: right;
              `}
            >
              <GrFormClose />
            </div>
            <h3>로그인</h3>
            <div
              css={css`
                color: ${palette.gray6};
                font-size: 14px;
                font-weight: 600;
              `}
            >
              이메일로 로그인
            </div>
            <div
              css={css`
                display: flex;
                height: 30px;
              `}
            >
              <input
                css={css`
                  flex: 3;
                  height: 100%;
                  padding: 0px;
                  padding-left: 10px;
                  border-radius: 0px;
                  border: 1px solid ${palette.gray4};
                `}
                type="text"
                placeholder="이메일을 입력하세요."
              />
              <div
                css={css`
                  flex: 1;
                  display: flex;
                  height: 28px;
                  align-items: center;
                  justify-content: center;
                  background-color: ${palette.teal6};
                  border: 2px solid ${palette.teal6};
                  padding: auto 0;
                  margin-bottom: 0px !important;
                  color: ${palette.gray1};
                `}
              >
                로그인
              </div>
            </div>
            <div>
              <div
                css={css`
                  color: ${palette.gray6};
                  font-size: 14px;
                  font-weight: 600;
                `}
              >
                소셜 계정으로 로그인
              </div>
              <div
                css={css`
                  display: flex;
                  justify-content: space-around;
                `}
              >
                <FaGithubSquare />
                <FcGoogle />
                <FaFacebookF />
              </div>
            </div>
            <div
              css={css`
                margin-top: 20px;
                text-align: right;
                font-size: 16px;
              `}
            >
              아직 회원이 아니신가요?{' '}
              <span
                css={css`
                  color: ${palette.teal6};
                `}
              >
                회원가입
              </span>
            </div>
          </div>
        </IconContext.Provider>
      </Dialog>
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
        <div>
          <Link to={'/'} style={cssLink}>
            메뉴
          </Link>
          {/* <Link to={'/register'} style={cssLink}>
            로그인
          </Link> */}
          {/* <span css={menyBtn}>메뉴</span> */}
          <span
            css={css`
              margin: 1rem;
              :hover {
                cursor: pointer;
              }
            `}
            onClick={handleDialog}
          >
            로그인
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
