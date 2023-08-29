import React from "react";
import styled from "styled-components";
import { CheckBoxType } from "../../types/types";

import { ReactComponent as CheckAct } from "../../assets/icons/check-active-icon.svg";
import { ReactComponent as Check } from "../../assets/icons/check-icon.svg";

const CheckBox = ({ type, checked, onChange, children }: CheckBoxType) => {
  return (
    <CheckArea className={type}>
      <Label>
        {checked ? <CheckAct /> : <Check />}
        <input type="checkbox" checked={checked} onChange={onChange} />
      </Label>
      <Content>{children}</Content>
    </CheckArea>
  );
};

export default CheckBox;

const Content = styled.div`
  width: 100%;
`;

const Label = styled.label`
  margin-right: 10px;

  & > input {
    display: none;
  }
`;

const CheckArea = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;

  &.fit {
    height: fit-content;
  }

  &.small {
    height: fit-content;

    & > label {
      width: 16px;
      height: 16px;

      & > svg {
        width: 16px;
        height: 16px;
        margin-right: 8px;
      }
    }
  }
`;
