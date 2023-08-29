import React, { ReactNode, useEffect } from "react";
import styled from "styled-components";

interface ModalWrapperProps {
  children: ReactNode | ReactNode[];
  position?: "bottom" | "full" | "none" | null;
  onClose?: () => void;
}

function ModalWrapper({ children, position, onClose }: ModalWrapperProps) {
  const handleClose: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();

    if (e.currentTarget !== e.target) return;

    onClose?.();
  };

  useEffect(() => {
    document.documentElement.style.overflow = `hidden`;
    return () => {
      document.documentElement.style.overflow = `auto`;
    };
  }, []);

  return (
    <Wrapper onClick={handleClose} className={position ? position : ""}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  &.bottom {
    align-items: flex-end;
  }

  &.full {
    align-items: flex-start;
    background: revert;
  }

  &.none {
    background-color: revert;
  }
`;

export default ModalWrapper;
