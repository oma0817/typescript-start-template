import React, { useState } from "react";
import styled from "styled-components";
import { TextareaType } from "../../types/types";

const Textarea = ({
  label,
  errorText,
  placeholder,
  value,
  disable = false,
  readOnly = false,
  onChange,
  className,
  ...props
}: TextareaType) => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <Label className={className + (focus ? " focus" : "")}>
      {label && <p>{label}</p>}
      <InputBox>
        <StyledTextarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={(e) => {
            setFocus(false);
          }}
          disabled={disable}
          readOnly={readOnly}
          {...props}
        />
      </InputBox>
      {errorText && errorText !== "" && <Error>{errorText}</Error>}
    </Label>
  );
};

export default Textarea;

const Error = styled.div`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.color.system2};
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 91px;
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.color.gray1};
  resize: none;

  &::placeholder {
    color: ${(props) => props.theme.color.gray6};
  }

  .review & {
    margin-top: 0;
    height: 114px;
  }

  .large & {
    height: 113px;
  }
`;

const InputBox = styled.div`
  width: 100%;
  margin-top: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .review & {
    margin-top: 0;
  }
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

  &.review {
    padding: 12px 14px;
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
