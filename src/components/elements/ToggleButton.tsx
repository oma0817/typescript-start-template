import React from "react";
import styled from "styled-components";

const ToggleButton = ({
  checked,
  onClick,
}: {
  checked: boolean;
  onClick: () => void;
}) => {
  return (
    <Wrapper className={checked ? "active" : ""} onClick={onClick}>
      <Circle />
    </Wrapper>
  );
};

export default ToggleButton;

const Circle = styled.div`
  position: absolute;
  left: 2px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  border-radius: 30px;
  background: ${(props) => props.theme.color.white};
  transition: all 0.3s;

  .active & {
    background: ${(props) => props.theme.color.sub};
    left: calc(100% - 20px);
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 36px;
  height: 22px;
  border-radius: 30px;
  background: ${(props) => props.theme.color.gray6};
  transition: all 0.3s;
  cursor: pointer;

  &.active {
    background: ${(props) => props.theme.color.gray2};
  }
`;
