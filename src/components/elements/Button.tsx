import React from "react";
import styled, { css } from "styled-components";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode | React.ReactNode[];
  size?: "sm" | "md";
  disabled?: boolean;
  styleType?: "circle" | "gray" | "line" | "sub";
};

const Button = ({
  children,
  size = "md",
  disabled,
  styleType,
  ...props
}: ButtonProps) => {
  return (
    <Wrapper className={styleType} size={size} disabled={disabled} {...props}>
      {children}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button<{
  size: "sm" | "md";
  disabled?: boolean;
}>`
  //크기 중간
  width: 100%;
  height: 48px;

  //기본
  font-weight: 700;
  font-size: 14px;
  line-height: 1.38;
  color: ${(props) => props.theme.color.white};
  border-radius: 10px;
  background: ${(props) => props.theme.color.gray2};
  border: solid 1px ${(props) => props.theme.color.gray2};

  //선
  &.line {
    color: ${(props) => props.theme.color.gray2};
    background: ${(props) => props.theme.color.white};
    border-color: ${(props) => props.theme.color.gray4};
  }

  &.sub {
    color: ${(props) => props.theme.color.gray2};
    background: ${(props) => props.theme.color.sub};
    border-color: ${(props) => props.theme.color.sub};
  }

  //원형
  &.circle {
    border-radius: 100px;
  }

  &.gray {
    color: ${(props) => props.theme.color.gray2};
    background: ${(props) => props.theme.color.gray8};
    border-color: ${(props) => props.theme.color.gray8};
  }

  &:disabled {
    color: ${(props) => props.theme.color.white};
    background: ${(props) => props.theme.color.gray6};
    border-color: ${(props) => props.theme.color.gray6};
  }

  ${(props) => props.size === "sm" && css``}
`;
