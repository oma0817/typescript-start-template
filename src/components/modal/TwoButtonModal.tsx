import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { twoButtonModalState } from "../../utils/atom";
import ModalWrapper from "./ModalWrapper";
import Button from "../elements/Button";
import { PopupTitle, PopupText } from "../elements/Typography";

const TwoButtonModal = () => {
  const [modal, setModal] = useRecoilState(twoButtonModalState);

  const handleCancle = () => {
    if (window.location.href.includes("find_id")) {
      modal?.onConfirm && modal.onConfirm();
    } else if (modal?.title === "로그인 필요") {
      modal?.onClose && modal.onClose();
    }
    setModal(null);
  };

  const handleClose = () => {
    modal?.onClose && modal?.onClose();
    setModal(null);
  };

  const handleConfirm = () => {
    modal?.onConfirm && modal.onConfirm();
    setModal(null);
  };
  if (modal === null) return null;

  return (
    <ModalWrapper onClose={handleCancle}>
      <Wrapper className={modal?.findId ? "findID" : ""}>
        <PopupTitle className="center">{modal.title}</PopupTitle>
        <PopupText
          className="center"
          dangerouslySetInnerHTML={{ __html: modal.text }}
        />
        {modal?.findId && <h2>{modal?.findId}</h2>}
        <FlexBox>
          <Button onClick={handleClose}>{modal?.cancleText || "아니오"}</Button>
          <Button styleType="sub" onClick={handleConfirm}>
            {modal?.confirmText || "예"}
          </Button>
        </FlexBox>
      </Wrapper>
    </ModalWrapper>
  );
};

export default TwoButtonModal;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > button {
    max-width: calc(50% - 6px);
  }
`;

const Wrapper = styled.div`
  max-width: calc(100% - 80px);
  width: 100%;
  padding: 22px;
  background: #ffffff;
  border-radius: 10px;

  & > p {
    margin: 8px 0 30px;
  }

  &.findID {
    & > p {
      margin: 8px 0 24px;
    }

    & > h2 {
      position: relative;
      width: 100%;
      height: 50px;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 7px;
      background: ${(props) => props.theme.color.gray8};

      font-weight: 500;
      font-size: 14px;
      color: ${(props) => props.theme.color.gray1};
      margin-bottom: 30px;
    }
  }
`;
