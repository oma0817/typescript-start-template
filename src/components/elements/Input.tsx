import React, { useState } from "react";
import styled from "styled-components";
import { InputType } from "../../types/types";

const Input = ({
  label,
  errorText,
  placeholder,
  type = "text",
  value,
  disable = false,
  readOnly = false,
  onChange,
  onBlur,
  btnText,
  btnDisable,
  onClick,
  className,
  time,
  unit,
  id,
  ...props
}: InputType) => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <Label
      className={
        className + (focus ? " focus" : "") + (disable ? " disable" : "")
      }
    >
      <p>{label === "" ? <>&nbsp;</> : label}</p>
      <InputBox>
        <StyledInput
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() =>
            setFocus(readOnly || className?.includes("userNum") ? false : true)
          }
          onBlur={(e) => {
            setFocus(false);
            onBlur && onBlur(e);
          }}
          disabled={disable}
          readOnly={readOnly}
          {...props}
        />
        {unit && <Unit>{unit}</Unit>}
        {btnText && onClick && (
          <InputButton type="button" disabled={btnDisable} onClick={onClick}>
            {btnText}
          </InputButton>
        )}
        {time && time !== "" && <Time>{time}</Time>}
      </InputBox>
      {errorText && errorText !== "" && (
        <Error className={errorText.includes("사용가능한") ? "can" : ""}>
          {errorText}
        </Error>
      )}
    </Label>
  );
};

export default Input;

const Unit = styled.div`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.color.gray3};
  margin-left: 9px;
  white-space: nowrap;

  .disable & {
    color: ${(props) => props.theme.color.gray6};
  }
`;

const InputButton = styled.button`
  width: 65px;
  min-width: 65px;
  padding: 7px 6px;
  border-radius: 39px;
  background: ${(props) => props.theme.color.gray2};
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.color.white};

  &:disabled {
    background: ${(props) => props.theme.color.gray6};
  }
`;

const Error = styled.div`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.color.system2};

  &.can {
    color: ${(props) => props.theme.color.system1};
  }
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.color.system1};
`;

const StyledInput = styled.input`
  width: calc(100% - 75px);
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.color.gray1};

  &::placeholder {
    color: ${(props) => props.theme.color.gray6};
  }

  .full & {
    width: 100%;
  }

  .userNum & {
    width: 100%;
  }

  .disable & {
    color: ${(props) => props.theme.color.gray6};
  }
`;

const InputBox = styled.div`
  width: 100%;
  margin-top: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
  position: relative;
  display: block;
  padding: 11px 13px 9px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.color.white};

  &.line {
    border: 1px solid ${(props) => props.theme.color.gray7};
  }

  &.focus {
    border: 1px solid ${(props) => props.theme.color.gray1};
  }

  &.paddingNone {
    padding: 11px 0 9px;
    width: 23px;
  }

  &.disable {
    background: rgba(243, 243, 243, 0.5);
  }

  & > p {
    font-size: 11px;
    font-weight: 500;
    line-height: 11px;
    letter-spacing: -0.2px;
    color: ${(props) => props.theme.color.gray4};
    margin-bottom: 4px;
  }
`;
