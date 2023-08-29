import React from "react";
import styled from "styled-components";

const JoinTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.6px;
  color: ${(props) => props.theme.color.gray1};
`;

const PopupTitle = styled.h1`
  font-size: 22px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.6px;
  color: ${(props) => props.theme.color.gray1};

  &.center {
    text-align: center;
  }
`;

const PopupText = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.color.gray3};

  & > b {
    font-weight: 500;
  }

  &.center {
    text-align: center;
  }
`;

export { JoinTitle, PopupTitle, PopupText };
