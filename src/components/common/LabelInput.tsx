/** @jsx jsx */
import React, { useState, useCallback } from 'react';
import { jsx, css } from '@emotion/core';
import palette from '../../lib/styles/palette';
import { MdLockOutline } from 'react-icons/md';
import media from '../../lib/styles/media';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface LabelInputProps extends InputProps {
  label: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler;
}

const LabelInput: React.FC<LabelInputProps> = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  disabled,
  ...rest
}) => {
  const [focus, setFocus] = useState(false);

  const onFocus = useCallback(() => {
    setFocus(true);
  }, []);
  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);

  return (
    <div
      css={css`
        label,
        input {
          display: block;
          line-height: 1.5;
        }
        label {
          font-weight: bold;
          font-size: 1.125rem;
          color: ${palette.gray9};
          margin-bottom: 1rem;
          transition: all 0.125s ease-in;
          ${focus &&
          css`
            color: ${palette.teal7};
          `}
        }
        input {
          font-size: 1.5rem;
          border: none;
          outline: none;
          ${media.small} {
            font-size: 1.125rem;
          }
          width: 100%;
          color: ${palette.gray7};
          transition: all 0.125s ease-in;
          ${focus &&
          css`
            color: ${palette.teal7};
          `}
          &::placeholder {
            color: ${palette.gray5};
          }
          &:disabled {
            color: ${palette.gray6};
          }
        }
        .group {
          display: inline-block;
          max-width: 100%;
        }
        .input-wrapper {
          padding-bottom: 0.5rem;
          border-bottom: 1px solid ${palette.gray7};
          display: flex;
          align-items: center;
          ${focus &&
          css`
            border-color: ${palette.teal7};
          `}
          input {
            width: 1;
          }
          svg {
            font-size: 1.5rem;
            color: ${palette.gray6};
          }
        }
        .width-maker {
          max-width: 100%;
          display: inline-block;
          visibility: hidden;
          font-size: 1.5rem;
          overflow: hidden;
          line-height: 0;
        }
      `}
    >
      <label>{label}</label>
      <div className="group">
        <div className="input-wrapper">
          <input
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={disabled}
            {...rest}
          />
          {disabled && <MdLockOutline />}
        </div>

        <div className="width-maker">{value || `${placeholder}`}</div>
      </div>
    </div>
  );
};

export default LabelInput;
